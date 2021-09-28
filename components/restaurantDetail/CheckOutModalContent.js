import React, { useEffect, useState } from 'react';
import { View, Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';
import OrderItem from "./OrderItem";
// import firebase from "../../firebase/config";
import { ScrollView } from 'react-native-gesture-handler';
import PaymentScreen from '../payment/PaymentScreeen';
import { useStripe } from '@stripe/stripe-react-native';

export default function CheckOutModalContent ({ navigation, total, totalUSD, items, restaurantName, setOrderPlacedLoading }){
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('client"31212@');

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`https://expo-stripe-server-example.glitch.me/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        total
      }
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();
    
    setClientSecret(paymentIntent);
    
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initialisePaymentSheet = async () => {
      const {
          paymentIntent,
          ephemeralKey,
          customer,
      } = await fetchPaymentSheetParams();

      const { error } = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        customFlow: false,
        merchantDisplayName: 'Uber-Eats-Clone',
        style: 'automatic',
      });

      if (!error) {
        setPaymentSheetEnabled(true);
      }
  };

  const openPaymentSheet = async () => {
      if (!clientSecret) {
        return;
      }

      setLoading(true);

      const { error } = await presentPaymentSheet({
        clientSecret,
      });
  
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        Alert.alert('Success', 'The payment was confirmed successfully');
      }

      setPaymentSheetEnabled(false);
      setLoading(false);
  };
  
  useEffect(() => {
      // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
      // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
      initialisePaymentSheet();
  }, []);

  // const addOrderToFireBase = () => {
  //   setOrderPlacedLoading(true);
  //   const db = firebase.firestore();
  //   db.collection("orders")
  //     .add({
  //       items: items,
  //       restaurantName: restaurantName,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //     .then(() => {
  //       setTimeout(() => {
  //         setOrderPlacedLoading(false);
  //         navigation.navigate("OrderCompleted");
  //       }, 2000);
  //     });
  // };

  return (
    <React.Fragment>
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </ScrollView>
        
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={styles.subtotalText}>${totalUSD}</Text>
          </View>

          <PaymentScreen>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingvertical: 10 }}>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: "black",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 18,
                  paddingHorizontal: 20,
                  borderRadius: 30,
                  width: 250,
                  position: "relative",
                }}
                onPress={openPaymentSheet}
                activeOpacity={0.8}
                disabled={!paymentSheetEnabled && loading}
              >
                <Text style={{ color: "white", fontWeight: '900', fontSize: 15, fontFamily: 'Poppins' }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    fontWeight: '900',
                    fontFamily: 'Poppins',
                    top: 17,
                  }}
                >
                  ${total & totalUSD}
                </Text>
              </TouchableOpacity>
            </View>
          </PaymentScreen>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 19,
    height: 530,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 22,
    fontFamily: 'PoppinsBold',
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#999",
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "800",
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    marginBottom: 10,
  },
});
