import React from 'react';
import { 
    StyleSheet, 
    Text,
    View, 
    StatusBar,
    SafeAreaView,
    Image,
    SectionList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import SectionItem from '../components/profile/SectionItem';

export default function Profile({navigation}) {

    const sectionsData = [
        {
            id: 1,
            title: 'Account',
            data: [
                {
                    id: 1,
                    name: 'Edit Profile',
                    icon: <FontAwesome5 name="user-edit" />,
                    gotoScreen: 'Edit-Profile'
                },
                {
                    id: 2,
                    name: 'Change Password',
                    icon: <FontAwesome5 name="key" />,
                    gotoScreen: 'Change-Password'
                },
            ]
        },
        {
            id: 2,
            title: 'Help & Security',
            data: [
                {
                    id: 4,
                    name: 'Privary & Security',
                    icon: <FontAwesome5 name="lock" />,
                    gotoScreen: 'Edit-Profile'
                },
                {
                    id: 5,
                    name: 'Change or Add Card',
                    icon: <FontAwesome5 name="credit-card" />,
                    gotoScreen: 'Edit-Profile'
                },
                {
                    id: 6,
                    name: 'Help',
                    icon: <FontAwesome5 name="question-circle" />,
                    gotoScreen: 'Help'
                }
            ]
        },
        {
            id: 3,
            title: '',
            data: [
                {
                    id: 4,
                    name: 'Log Out',
                    icon: <Feather name="log-out" />
                }
            ]
        }
    ];

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor='#fff'
            />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image  
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 9999
                        }}
                        source={require('../assets/images/bg2.jpg')}
                    />
                    <Text 
                        style={{ 
                            fontFamily: 'PoppinsBold', 
                            fontSize: 23,
                            paddingTop: 20
                        }}
                    >
                        Odunayo Fawumi
                    </Text>
                    <Text style={{ color: "#808080", fontFamily: 'Poppins', fontSize: 17}}>fawumiodunayo@gmail.com</Text>
                </View>

                <View style={styles.detail}>
                    <View>
                        <SectionList
                            sections={sectionsData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <SectionItem item={item} navigation={navigation} />}
                            renderSectionHeader={({section: { title }}) => (
                                <Text style={styles.header}>{title}</Text>
                            )}
                        />
                    </View>
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
        marginTop: 0,
        paddingTop: StatusBar.currentHeight
    },
    header: {
        fontSize: 15,
        paddingLeft: 20,
        marginTop: 10,
        paddingVertical: 4,
        color: '#808080',
        fontFamily: 'PoppinsBold',
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail: {
        flex: 2,
        paddingTop: 13,
        backgroundColor: '#fff',
        borderColor: '#e7e7e7',
        borderWidth: 1,
        borderRadius: 30
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
        backgroundColor: "black"
    }
});
