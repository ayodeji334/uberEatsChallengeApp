import React from 'react';
import { 
    StyleSheet, 
    Text, 
    ImageBackground, 
    View, 
    TouchableOpacity, 
    StatusBar,
    SafeAreaView
} from 'react-native';

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <StatusBar 
            barStyle="light-content"
            backgroundColor='#000'
            translucent={false}
        />
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 27}}>Profile</Text>
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
        marginTop: 0
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
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
