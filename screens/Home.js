import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
// import { Divider } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = 
"gkckb2H79jY1L4QM7QmZw2meFFQq3BqIEUN5WZC0JiwxO8beHXNe26vc4oYoP-DSQRZYqwapbZ_3ax3NdkqjL2BT_HOfoS_2T0Lu2_om-kGoeiKyqffm9Mar_rBJYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      },
      headerLeft: () => {
        return (
            <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
                <TouchableOpacity 
                  style={{
                    padding: 8, 
                    marginTop: 1, 
                    backgroundColor: "#e7e7e7",
                    borderRadius: 9999
                  }} 
                  activeOpacity={0.4} 
                  onPress={() => navigation.goBack()}>
                    <Ionicons name="menu-outline" size={21} color="#000" />
                </TouchableOpacity>
            </View>
        )
      }
    })
  }, []);

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}