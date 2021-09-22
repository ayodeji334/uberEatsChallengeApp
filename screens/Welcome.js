import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image, 
    View, 
    TouchableOpacity, 
    StatusBar
} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <React.Fragment>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="#ffffff"
        />
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/icon.png')} style={styles.image}/>
            </View>
            <View style={styles.detail}>
                <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={styles.title}>Welcome to Instant Meals</Text>
                    <Text style={styles.description}>
                        Order food and get your package where few minutes
                    </Text>
                </View> 
                <View style={{ paddingVertical: 20, width: "80%"}}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("Register")}
                        style={[styles.button, styles.filledBtn ]}>
                        <Text style={styles.filledBtnText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("Login")}
                        style={[styles.button, styles.outlineBtn ]}>
                        <Text style={styles.outlineBtnText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: "Poppins",
        marginTop: -40
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "#000000",
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
        resizeMode: "cover",
        width: '100%',
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
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    outlineBtnText: {
        textTransform: "uppercase",
        color: "#000000",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "PoppinsBold",
    },
    button: {
        paddingVertical: 18,
        borderRadius: 999,
        marginTop: 30,
    },
    outlineBtn: {
        backgroundColor: "#e7e7e7",
    },
    filledBtn: {
        backgroundColor: "#000000"
    }
});
