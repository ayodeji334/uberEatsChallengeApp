import React, { useLayoutEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
              paddingVertical: 7, 
              paddingHorizontal: 13,
              marginTop: 1, 
              backgroundColor: "#e7e7e7",
              borderRadius: 9
            }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
              <FontAwesome5 name="angle-left" size={21} color="#000" />
            </TouchableOpacity>
          </View>
        )
      }
    })
  }, []);

  return (
    <View style={{ paddingBottom: 10}}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />

      <TouchableOpacity 
        style={{
          paddingVertical: 4, 
          paddingHorizontal: 10,
          marginVertical: 10,
          marginHorizontal: 20, 
          backgroundColor: "#000",
          borderRadius: 9999,
          width: 150,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        activeOpacity={0.4} 
        onPress={() => navigation.navigate('ChatRoom', {name})}
      >
        <Text
          style={{
            fontWeight: '900',
            fontFamily: 'Poppins',
            marginTop: 10,
            marginHorizontal: 15,
            paddingBottom: 5,
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Chat With Us
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
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