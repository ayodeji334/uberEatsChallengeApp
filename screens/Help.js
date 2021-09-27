import React, { useLayoutEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,  
    TouchableOpacity, 
    StatusBar,
    SafeAreaView,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HelpDescriptionItem from '../components/profile/HelpDescriptionItem';

export default function Help({ navigation }) {
    const helpInfo = [
        {
            id: 1,
            title: 'What is React Native',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id: 2,
            title: 'What is React Native Expo',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id: 3,
            title: 'Is my credit card safe?',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
            id: 4,
            title: "What's the difference between React Native CLI and Expo CLI",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
    ];
    
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
            title: 'Need Help?',
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
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1}}>
            <View style={styles.container}>
               <Text style={{ fontFamily:'PoppinsBold', fontSize: 20, paddingTop: 30}}>Frequently Asked Questions</Text>

               <ScrollView style={{ marginTop: 30}}>
                    {
                        helpInfo.map(item => (
                           <HelpDescriptionItem item={item} key={item.id} />
                        ))
                    }
               </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "#e7e7e7",
    },
    detail: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 13,
        paddingHorizontal: 45,
    },
    image: {
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontFamily: "PoppinsBold",
        letterSpacing: 1,
        textAlign: "center",
        color: "#000000",
        paddingVertical: 14
    },
    description: {
        fontSize: 16,
        fontFamily: "Poppins",
        letterSpacing: 1,
        paddingBottom: 40,
        textAlign: "center",
        fontWeight: "500",
        color: "#000000",
    },
    filledBtnText: {
        textTransform: "uppercase",
        color: "#fff",
        textAlign: "center",
        fontFamily: "PoppinsBold",
    },
    outlineBtnText: {
        textTransform: "uppercase",
        color: "#000000",
        textAlign: "center",
        fontFamily: "PoppinsBold",
    },
    button: {
        paddingVertical: 15,
        borderRadius: 999,
        marginTop: 30,
    },
    outlineBtn: {
        backgroundColor: "#e7e7e7",
    },
    filledBtn: {
        backgroundColor: "tomato"
    }
});

