import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

export default function FoodInfo(props) {
    // console.log('food info',props.food);
    const [ quantity, setQuantity ] = useState(1);
    const currentStateRef = useRef();
    currentStateRef.current = quantity;

    const handleQuantityAddAndMinus = (actionType) => {
      if(actionType === 'add'){
        setQuantity(prevState => prevState + 1);
      }else{
        setQuantity(prevState => prevState - 1);
      }
    }

    useEffect(() => {
      props.handleUpdateItemPrice(currentStateRef.current, props.food.id);
    }, [quantity]);


    return (
        <View style={{ width: 240, justifyContent: "space-evenly" }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text style={{ fontSize: 15, fontWeight: "500", fontFamily: 'Poppins'}}>{props.food.description}</Text>
            <View style={{ 
              display: 'flex',  
              flexDirection: 'row',
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginVertical: 8
            }}>
              <Text style={{ 
                fontSize: 14, 
                fontWeight: "900", 
                fontFamily: 'PoppinsBold',
                color: 'black'
              }}>
                {props.food.price}
              </Text>
              <View style={{
                display: 'flex', 
                flexDirection: 'row',
              }}>
                <TouchableOpacity 
                  disabled={quantity === 1}
                  style={{
                    marginHorizontal: 20, 
                    backgroundColor: "#e7e7e7",
                    padding: 2,
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} 
                  activeOpacity={0.8} 
                  onPress={() => handleQuantityAddAndMinus('minus')}
                >
                  <Entypo name='minus' color='#000' size={20} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'PoppinsBold',
                    color: 'black'
                  }}
                >
                  {props.food.quantity ? props.food.quantity : quantity}
                </Text>
                <TouchableOpacity 
                  style={{
                    padding: 2,
                    marginHorizontal: 20, 
                    backgroundColor: "#000",
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} 
                  activeOpacity={0.8} 
                  onPress={() => handleQuantityAddAndMinus('add')}
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
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "900",
      fontFamily: 'PoppinsBold'
    },
  });
