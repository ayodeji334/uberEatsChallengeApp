import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

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

export default function Categories() {
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
              <View key={index} style={styles.categoriesContainer}>
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain",
                  }}
                />
                <Text style={{ paddingLeft: 10, fontSize: 16, fontFamily: 'PoppinsBold' }}>{item.text}</Text>
              </View>
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: { 
    flexDirection: 'row', 
    paddingVertical: 10, 
    alignItems: "center", 
    justifyContent: 'center',
    marginRight: 30 
  }
})