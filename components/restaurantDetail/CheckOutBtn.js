import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

export default function CheckOutBtn({ totalPrice, handleShowModal }) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginTop: 10,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 17,
            paddingHorizontal: 20,
            borderRadius: 30,
            width: 300,
          }}
          onPress={() => handleShowModal()}
        >
          <Text style={{ color: "white", fontSize: 15, fontFamily: 'Poppins', fontWeight: '900'}}>
            View Cart
          </Text>
          <Text style={{ color: "white", fontSize: 15, fontFamily: 'Poppins',  fontWeight: '900'}}>${totalPrice}</Text>
        </TouchableOpacity>
      </View>
    )
}
