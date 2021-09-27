import React, { useState } from 'react';
 import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { Formik } from 'formik';
import TextInputField from './TextInputField';
import EmailInputField from './EmailInputField';
import AlertModalBox from '../general/AlertModalBox';
import firebase from '../../firebase/config';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';


export default function UpdateProfileForm() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const dispatch = useDispatch();
    const handleCloseModal = () => setModalVisibility(false);

    const initialValues = { 
        email: '', 
        firstname: '',
        lastname: ''
    }

    const signupValidationSchema = Yup.object().shape({
        firstname: Yup
            .string()
            .required('firstname is Required'),
        lastname: Yup
            .string()
            .required('lastname is Required'),
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
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
                            fieldName="firstname"
                            labelName="Firstname"
                            placeholder="Odunayo"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.name}
                            touched={props.touched.name}
                        /> 
                        <TextInputField 
                            currentValue={props.values.name}
                            fieldName="lastname"
                            labelName="Lastname"
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
                       <TouchableOpacity
                            disabled={!props.isValid || props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>Save</Text> : <Text style={styles.buttonText}>Loading...</Text> }
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
        backgroundColor: "#000",
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
