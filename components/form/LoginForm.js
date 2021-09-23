import React, { useState } from 'react'
 import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 import { Formik } from 'formik';
import PasswordInputField from './PasswordInputField';
import EmailInputField from './EmailInputField';
import AlertModalBox from '../general/AlertModalBox';
import * as Yup from 'yup';
import firebase from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../../redux/actionsType';

export default function LoginForm({ navigation }) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const dispatch = useDispatch()
    const handleCloseModal = () => setModalVisibility(false);

    const initialValues = { 
        email: '', 
        password: '' 
    };

    const loginValidationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: Yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    const handleLogin = async (values, actions) => {
        firebase.auth().signInWithEmailAndPassword(values.email, values.password).then(({user}) => {
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

            if(err.code === 'auth/user-not-found'){
                setMessage("The crendential does not match any record");
            }else if(err.code === 'auth/wrong-password'){
                setMessage("Invalid email or password");
            }else if(err.code === 'auth/network-error'){
                setMessage("Please make sure you are connect to the internet. Then try again");
            }else{
                setMessage("Something went wrong. Please try again");
            }

            setAlertType("error");
            setModalVisibility(true);
        });
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={(values, actions) => handleLogin(values, actions)}
            >
                {(props) => (
                    <>
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
                        <Text 
                            style={styles.link} 
                            onPress={() => {navigation.navigate('ForgetPassword') }}
                        >
                            Forget Password
                        </Text>
                        <TouchableOpacity
                            disabled={!props.isValid || props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>Log in</Text> : <Text style={styles.buttonText}>Loading...</Text> }
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
        backgroundColor: "tomato",
        paddingVertical: 20,
        borderRadius: 50,
        width: "100%",
        marginTop: 25,
    },
    disabled: {
        opacity: .56,
        backgroundColor: "#000",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
})
