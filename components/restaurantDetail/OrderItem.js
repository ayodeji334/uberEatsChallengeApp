import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#e7e7e7",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 15, fontFamily: 'Poppins' }}>{title}</Text>
      <Text style={{ fontWeight: "600", opacity: 0.7, fontSize: 15, fontFamily: 'Poppins' }}>{price}</Text>
    </View>
  );
}