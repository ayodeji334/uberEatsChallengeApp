import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

 const QuantityPicker = ({ food, handleOnChange }) => {
    const [quantity, setQuantity] = useState(1);
    const currentQuantityValueRef = useRef();
    currentQuantityValueRef.current = quantity;

    return (
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
                    handleOnChange('minus', currentQuantityValueRef.current);
                }}
            >
                <Entypo name='minus' color='#000' size={20} />
            </TouchableOpacity>

            <Text
                style={styles.titleStyle}
            >
                {food.quantity ? food.quantity : quantity}
            </Text>

            <TouchableOpacity 
                style={styles.addBtn} 
                activeOpacity={0.8} 
                onPress={() => {
                    setQuantity(prevState => prevState + 1);
                    handleOnChange('add', currentQuantityValueRef.current);
                }}
            >
                <Entypo name='plus' color='white' size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default QuantityPicker;

