import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image, 
    View, 
    TouchableOpacity, 
    StatusBar} from 'react-native';

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
                <View>
                    <Text style={styles.title}>Welcome to Instant Meals</Text>
                    <Text style={styles.description}>
                        Order food and get your package where few minutes
                    </Text>
                </View> 
                <View style={{ paddingVertical: 20, width: "80%"}}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate("Login")}
                        style={[styles.button, styles.filledBtn ]}>
                        <Text style={styles.filledBtnText}>
                            Get Started
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
        fontFamily: "Poppins"
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "#000000",
        marginTop: -20,
        position: 'relative'
    },
    detail: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 60,
        paddingHorizontal: 45,
    },
    image: {
        resizeMode: "cover",
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 28,
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
        maxWidth: "65%",
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
