import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
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
      <View style={{ flexDirection: "row",}}>
        <Text style={{ fontWeight: "600", fontSize: 15, fontFamily: 'Poppins' }}>{item?.quantity}</Text>
        <Text style={{ fontWeight: "600", fontSize: 15, fontFamily: 'Poppins',  marginLeft: 10  }}>{item?.title}</Text>
      </View>
      <Text style={{ fontWeight: "600", opacity: 0.7, fontSize: 15, fontFamily: 'Poppins' }}>{item?.price}</Text>
    </View>
  );
}