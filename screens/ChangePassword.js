import React, { useLayoutEffect, useState } from 'react'
 import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
 import { Formik } from 'formik';
import PasswordInputField from '../components/form/PasswordInputField';
import AlertModalBox from '../components/general/AlertModalBox';
import * as Yup from 'yup';
import firebase from '../firebase/config';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/actionsType';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ChangePassword({ navigation }) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const dispatch = useDispatch()
    const handleCloseModal = () => setModalVisibility(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'black',
                fontFamily: 'PoppinsBold',
                marginTop: 10,
                textAlign: 'center'
            },
            title: 'Change Password',
            headerLeft: () => {
                return (
                    <View style={{padding: 20}}>
                        <TouchableOpacity style={{
                            padding: 10,
                            borderRadius: 9
                        }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <FontAwesome5 name="angle-left" size={21} color="#000" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }, []);

    const initialValues = { 
        password: '', 
        confirm_new_password: '',
        new_password: ''
    };

    const loginValidationSchema = Yup.object().shape({
        password: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        new_password: Yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        confirm_new_password: Yup
            .string()
            .when('password', {
                is: val => ( val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('new_password')], "Both new and confirm password need to be the same "
                )
            })
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
        <SafeAreaView style={{ backgroundColor: '#fff'}}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" />
            <View style={{ paddingHorizontal: 30, paddingTop: StatusBar.currentHeight}}>
                {/* <Text style={{ fontFamily: 'Poppins',textAlign: 'center', paddingBottom: 25}}>
                    Provide your current password and the new one
                </Text> */}
                <Formik
                   initialValues={initialValues}
                   validationSchema={loginValidationSchema}
                   onSubmit={(values, actions) => handleLogin(values, actions)}
                >
                {(props) => (
                    <>
                        <PasswordInputField
                            currentValue={props.values.password}
                            labelName="Current Password"
                            fieldName="current_password"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.current_password}
                            touched={props.touched.current_password}
                        />
                        <PasswordInputField
                            currentValue={props.values.password}
                            labelName="New Password"
                            fieldName="new_password"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.password}
                            touched={props.touched.password}
                        />
                        <PasswordInputField
                            currentValue={props.values.password}
                            labelName="ReType New Password"
                            fieldName="confirm_new_password"
                            handleBlur={props.handleBlur}
                            handleChange={props.handleChange}
                            error={props.errors.confirm_new_password}
                            touched={props.touched.confirm_new_password}
                        />
                        <TouchableOpacity
                            disabled={!props.isValid || props.isSubmitting}
                            activeOpacity={0.8}
                            onPress={props.handleSubmit}
                            style={props.isSubmitting ? styles.disabled : styles.button}>
                            {!props.isSubmitting ? <Text style={styles.buttonText}>Update Password</Text> : <Text style={styles.buttonText}>Loading...</Text> }
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
            </View>
           
        </SafeAreaView>
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
        backgroundColor: "black",
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

