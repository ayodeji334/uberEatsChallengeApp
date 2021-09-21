import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {  } from "expo-status-bar";

export default function About({navigation, ...props}) {
  const { name, image, price, reviews, rating, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (reviews ${reviews}+)`;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTransparent: true,
      headerLeft: () => {
        return (
          <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
            <TouchableOpacity style={{
              padding: 8, 
              marginTop: 1, 
              backgroundColor: "#e7e7e7",
              borderRadius: 9999
            }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
              <Ionicons name="md-chevron-back-sharp" size={21} color="#000" />
            </TouchableOpacity>
          </View>
        )
      }
    })
  }, []);

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}


const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 190 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 23,
      fontWeight: '900',
      fontFamily: 'PoppinsBold',
      marginTop: 10,
      marginHorizontal: 15,
      paddingBottom: 5,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 1,
      marginHorizontal: 15,
      fontWeight: "500",
      fontSize: 14.5,
      fontFamily: 'Poppins',
      paddingBottom: 5,
    }}
  >
    {props.description}
  </Text>
);