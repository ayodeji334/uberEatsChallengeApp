import React, { useState } from 'react';
 import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 import { Formik } from 'formik';
import TextInputField from './TextInputField';
import PasswordInputField from './PasswordInputField';
import EmailInputField from './EmailInputField';
// import { AUTHENTICATION_SUCCESS } from '../config/Reducer';
import AlertModalBox from '../general/AlertModalBox';
import firebase from '../../firebase/config';
import * as Yup from 'yup';


export default function RegisterForm() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleCloseModal = () => setModalVisibility(false);

    const initialValues = { 
        email: '', 
        password: '', 
        name: ''
    }

    const signupValidationSchema = Yup.object().shape({
        name: Yup
            .string()
            .required('name is Required'),
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: Yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    const handleRegister = async (values, actions) => {
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(({user}) => {
            user.updateProfile({ displayName: values.name }).then(() => console.log('user name updated successfully'));
            actions.setSubmitting(false);
            actions.resetForm({
                values: initialValues
            });

            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    email: user.email,
                    displayName:  user.displayName,
                    uid: user.uid,
                    isEmailVerified: user.emailVerified,
                    photoUrl: user.photoURL
                }
            });
            
        }).catch(err => {
            actions.setSubmitting(false);
            console.log(err.code)
            if(err.code === 'auth/email-already-in-use'){
                setMessage("Email already used by another person");
            }else if(err.code === 'auth/wrong-password'){
                setMessage("Invalid email or password");
            }else if(err.code === 'auth/network-error'){
                setMessage("Please make sure you are connect to the internet. Then try again");
            }else{
                setMessage("Something went wrong. Please try again");
            }
            setMessage(err.message);
            setAlertType("error");
            setModalVisibility(true);
        });
    };
    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={signupValidationSchema}
                onSubmit={(values, actions) => handleRegister(values, actions)}
            >
                {(props) => (
                    <>
                        <TextInputField 
                            currentValue={props.values.name}
                            fieldName="name"
                            labelName="Name"
                            placeholder="Odunayo"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.name}
                            touched={props.touched.name}
                        /> 
                        <EmailInputField
                            currentValue={props.values.email}
                            fieldName="email"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.email}
                            touched={props.touched.email}
                        /> 
                        <PasswordInputField
                            currentValue={props.values.password}
                            labelName="Password"
                            fieldName="password"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.password}
                            touched={props.touched.password}
                        />
                       <TouchableOpacity
                            disabled={!props.isValid || props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>Create Account</Text> : <Text style={styles.buttonText}>Loading...</Text> }
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <AlertModalBox 
                type={alertType} 
                isModalVisible={modalVisibility} 
                message={message} 
                closeModalhandler={handleCloseModal} 
            />
        </React.Fragment>
        
    )
}

const styles = StyleSheet.create({
    link: {
        paddingVertical: 5,
        textAlign: "right",
        color: "#dc143c",
        fontWeight: "500",
        fontFamily: "Poppins",
        fontSize: 13 
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    button: {
        backgroundColor: "#000000",
        paddingVertical: 18,
        borderRadius: 50,
        width: "100%",
        marginTop: 25,
    },
    disabled: {
        opacity: .86,
        backgroundColor: "#000",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
})
