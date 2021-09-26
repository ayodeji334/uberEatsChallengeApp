import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_ITEM_IN_CART } from '../../redux/actionsType';

export default function FoodInfo(props) {
  const [quantity, setQuantity] = useState(1);
  const { selectedItems } = useSelector((state) => state.cart);
  const { name: resName } = useSelector((state) => state.cart.selectedRestaurant);
  
  const dispatch = useDispatch();
  const currentQuantityValueRef = useRef();
  currentQuantityValueRef.current = quantity;

  const restaurantSelectedItems = selectedItems.filter(item => item.restaurantName === resName);

  const updateItemPrice = () => {
    console.log();
    // const itemToUpdate = restaurantSelectedItems.filter(item => item.id === props.food.id);

    // if(itemToUpdate.length > 0){
    //   const price = itemToUpdate[0]?.price.replace(/\D/g,'');
    //   const itemNewPrice = ((price / 100) * quantity).toFixed(2);

    //   const updatedItem = {
    //     ...itemToUpdate[0],
    //     price: `$${itemNewPrice}`,
    //     quantity
    //   };

    //   console.log(updatedItem);

      // dispatch({
      //   type: UPDATE_ITEM_IN_CART,
      //   payload: updatedItem
      // });
    // }
  };

  return (
      <View style={{ width: 240, justifyContent: "space-evenly" }}>
          <Text style={styles.titleStyle}>{props.food.title}</Text>
          <Text style={styles.description}>{props.food.description}</Text>

          <View style={styles.detailContainer}>
            <Text style={styles.titleStyle}>
              {props.food.price}
            </Text>

            <View style={{
              display: 'flex', 
              flexDirection: 'row',
            }}>
              <TouchableOpacity 
                disabled={quantity === 1}
                style={styles.subtractBtn} 
                activeOpacity={0.8} 
                onPress={() => {
                  setQuantity(prevState => prevState - 1);
                }}
              >
                <Entypo name='minus' color='#000' size={20} />
              </TouchableOpacity>

              <Text
                style={styles.titleStyle}
              >
                {props.food.quantity ? props.food.quantity : quantity}
              </Text>

              <TouchableOpacity 
                style={styles.addBtn} 
                activeOpacity={0.8} 
                onPress={() => {
                  setQuantity(prevState => prevState + 1);
                }}
              >
                <Entypo name='plus' color='white' size={20} />
              </TouchableOpacity>
            </View>
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
