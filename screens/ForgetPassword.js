import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import firebase from '../firebase/config';
import * as Yup from 'yup'
import { Formik } from 'formik';
import EmailInputField from '../components/form/EmailInputField';

export default function ForgetPassword({navigation}) {
    const initialValues = { 
        email: ''
    };

    const formValidationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required')
    });
    
    const handleRetrieveUserPassword = async (values, actions) => {
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

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                display: "none"
            },
            headerLeft: () => {
                return (
                    <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
                        <TouchableOpacity style={{
                            padding: 8, 
                            marginTop: 8, 
                            backgroundColor: "#e7e7e7",
                            borderRadius: 9
                        }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
                            <Ionicons name="md-chevron-back-sharp" size={21} color="#000" />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }, []);

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Black.ttf')
    });
    
    if (!loaded) {
        return null;
    }
    

    return (
        <SafeAreaView style={{ backgroundColor: '£fff', height: '100%'}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            /> 
            <View style={styles.container}>
                <View style={styles.greetingInfo}>
                    <Text style={styles.title}>Password Recovery</Text>
                    <Text style={styles.description}>
                        Enter the email associated with your account to recovery your password.
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={formValidationSchema}
                        onSubmit={(values, actions) => handleRetrieveUserPassword(values, actions)}
                    >
                        {(props) => (
                            <View style={{paddingVertical: 30}}>
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
                                    {!props.isSubmitting ? <Text style={styles.buttonText}>Send Token</Text> : <Text style={styles.buttonText}>Loading...</Text> }
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop:  20
    },
    input: {
        borderRadius: 10,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginTop: 5,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 13
    },
    label: {
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    imageContainer: {
        flex: 1,
        color: "#000000",
        paddingBottom: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer: {
        paddingHorizontal: 30
    },
    greetingInfo: {
        color: "#000000",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        fontFamily: "Poppins",
        letterSpacing: 1,
        paddingBottom: 40,
        textAlign: "center",
        maxWidth: "65%",
        fontWeight: "500",
        color: "#000",
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13,
    },
    title: {
        fontSize: 25,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000",
        paddingVertical: 14
    },
    button: {
        backgroundColor: "#000000",
        paddingVertical: 20,
        borderRadius: 50,
        width: "100%",
        marginTop: 25,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    link: {
      paddingLeft: 0,
      marginLeft: 5,
      color: "blue"
    },
    disabled: {
        opacity: .56,
        backgroundColor: "#dc143c",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
});
