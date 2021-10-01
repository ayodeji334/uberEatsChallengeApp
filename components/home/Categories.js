import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories({ handleSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState('Pick-up');

  const handleOnPress = (text) => {
    setActiveCategory(text);
    handleSelectCategory(text);
  }

  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
        <Text style={{ fontSize: 23, fontFamily: 'PoppinsBold', paddingTop: 10, paddingBottom: 20 }}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              activeOpacity={.8}
              onPress={() => handleOnPress(item.text)}
              style={[styles.categoriesContainer, {
                backgroundColor: activeCategory === item.text ? "red" : "white"
              }]}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ 
                paddingLeft: 10, 
                fontSize: 16, 
                fontFamily: 'PoppinsBold',
                color: activeCategory === item.text ? "white" : "black",
              }}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: { 
    flexDirection: 'row', 
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center", 
    justifyContent: 'center',
    marginRight: 30 
  }
})