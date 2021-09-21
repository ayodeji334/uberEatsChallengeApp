import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import OrderItem from "./OrderItem";
import firebase from "../../firebase/config";
import { ScrollView } from 'react-native-gesture-handler';

export default function CheckOutModalContent ({ navigation, total, totalUSD, items, restaurantName, setOrderPlacedLoading }){
  
  const addOrderToFireBase = () => {
    setOrderPlacedLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setOrderPlacedLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2000);
      });
  };

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
              onPress={() => {
                addOrderToFireBase();
                setOrderPlacedLoading(false);
              }}
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
    marginTop: 5,
    paddingHorizontal: 20
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "800",
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    marginBottom: 10,
  },
});
