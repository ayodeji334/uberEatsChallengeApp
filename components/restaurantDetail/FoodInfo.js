import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FoodInfo(props) {
    return (
        <View style={{ width: 240, justifyContent: "space-evenly" }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text style={{ fontSize: 15, fontWeight: "500", fontFamily: 'Poppins'}}>{props.food.description}</Text>
            <Text style={{ fontSize: 14, fontWeight: "900", fontFamily: 'PoppinsBold'}}>{props.food.price}</Text>
        </View>   
    )
}

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "900",
      fontFamily: 'PoppinsBold'
    },
  });
