import React, { useLayoutEffect } from 'react';
import { 
    StyleSheet, 
    View,  
    TouchableOpacity, 
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import UpdateProfileForm from '../components/form/UpdateProfileForm';

export default function EditProfile({ navigation }) {
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
            title: 'Edit Profile',
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

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%'}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <ScrollView>            
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <UpdateProfileForm />
                    </View>
                </View>
            </ScrollView>  
        </SafeAreaView>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 130
    },
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold",
    },
    title: {
        fontSize: 25,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000",
        paddingVertical: 14
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
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontFamily: "PoppinsBold",
        fontSize: 13
    },
    button: {
        backgroundColor: "tomato",
        paddingVertical: 18,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    },
    image: {
        width: 100,
        height: 120,
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    link: {
      paddingLeft: 0,
      marginLeft: 5,
      color: "#dc143c"
    },
    disabled: {
        opacity: .56,
        backgroundColor: "#000",
        paddingVertical: 17,
        borderRadius: 50,
        width: "100%",
        marginTop: 15,
    }
});
