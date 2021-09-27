import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,  
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import OrderItem from '../components/order/OrderItem';

export default function OrderList() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%'}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />
            <ScrollView style={{ paddingTop: StatusBar.currentHeight}}>            
                <View style={styles.container}>
                    {/* <View style={styles.greetingInfo}>
                        <Text style={styles.title}>You don't have order yet.</Text>
                    </View> */}

                    {
                        arr.map(item => (
                            <OrderItem key={item} />
                        ))
                    }
                    
                </View>
            </ScrollView>  
        </SafeAreaView>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
