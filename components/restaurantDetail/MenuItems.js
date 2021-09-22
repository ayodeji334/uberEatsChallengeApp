import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/actionsType";
import FoodImage from "./FoodImage";
import FoodInfo from "./FoodInfo";

export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.selectedItems.items);

  const addItemToCart = (item, checkboxValue) => (
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      }
    })
  )
  
  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom: 80}}>
      {foods.map((food, index) => (
        <View key={index} style={{ borderBottomColor: '#a3a2a2', borderBottomWidth: 1 }}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? <></> : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => addItemToCart(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
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