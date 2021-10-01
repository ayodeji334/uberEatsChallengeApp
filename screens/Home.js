import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import Categories from "../components/home/Categories";
// import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
// import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = 
"gkckb2H79jY1L4QM7QmZw2meFFQq3BqIEUN5WZC0JiwxO8beHXNe26vc4oYoP-DSQRZYqwapbZ_3ax3NdkqjL2BT_HOfoS_2T0Lu2_om-kGoeiKyqffm9Mar_rBJYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeCategory] = useState("Pickup");

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
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeCategory.toLowerCase())
          )
        )
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar backgroundColor='white' barStyle='light-content' />
      <View style={{ paddingTop: StatusBar.currentHeight,}}>
        <View style={{marginHorizontal: 20, paddingVertical: 20 }}>
          <Text style={{ fontFamily: 'PoppinsBold', fontSize: 26}}>Good morning, Odunayo</Text>
          <Text style={{ fontFamily: 'Poppins', fontSize: 20}}>
            Find good meals around you
          </Text>
        </View>
        <StatusBar backgroundColor='#fff' barStyle="dark-content"  />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          {/* <Divider /> */}
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}