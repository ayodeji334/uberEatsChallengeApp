import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_ITEM_IN_CART } from '../../redux/actionsType';
import QuantityPicker from './QuantityPicker';

export default function FoodInfo(props) {
  const { selectedItems } = useSelector((state) => state.cart);
  const { name: resName } = useSelector((state) => state.cart.selectedRestaurant);
  
  const dispatch = useDispatch();

  const restaurantSelectedItems = selectedItems.filter(item => item.restaurantName === resName);

  const updateItemPrice = (action, value) => {
    let itemQuantity;

    if(action === 'add'){
     itemQuantity = value + 1;
    }else{
      itemQuantity =  value - 1;
    }

    const itemToUpdate = restaurantSelectedItems.filter(item => item.id === props.food.id);

    if(itemToUpdate.length > 0){
      const price = itemToUpdate[0]?.price.replace(/\D/g,'');
      const itemNewPrice = ((price / 100) * itemQuantity).toFixed(2);

      const updatedItem = {
        ...itemToUpdate[0],
        price: `$${itemNewPrice}`,
        quantity:  itemQuantity
      };

      console.log(updatedItem);

      dispatch({
        type: UPDATE_ITEM_IN_CART,
        payload: updatedItem
      });
    }
  };

  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text style={styles.description}>{props.food.description}</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.titleStyle}>
          {props.food.price}
        </Text>

        <QuantityPicker 
          food={props.food} 
          handleOnChange={updateItemPrice} 
        />
      </View>
    </View>   
  )
}

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
    detailContainer: {
      display: 'flex',  
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'flex-start',
      marginVertical: 8
    },
    titleStyle: {
      fontSize: 19,
      fontWeight: "900",
      fontFamily: 'PoppinsBold'
    },
    addBtn: {
      padding: 2,
      marginHorizontal: 20, 
      backgroundColor: "#000",
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    subtractBtn: {
      marginHorizontal: 20, 
      backgroundColor: "#e7e7e7",
      padding: 2,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    description: {
      fontSize: 15, 
      fontWeight: "500", 
      fontFamily: 'Poppins'
    }
});
