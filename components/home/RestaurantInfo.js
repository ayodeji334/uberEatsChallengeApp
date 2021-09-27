import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RestaurantInfo(props){
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <View>
                <Text style={{ fontSize: 16, fontWeight: "900", fontFamily: 'PoppinsBold' }}>{props.name}</Text>
                <Text style={{ fontSize: 14, color: "gray", fontFamily: 'Poppins' }}>30-45 • min</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: 'center'
                }}
            >
                <FontAwesome name="star" color="gold" style={{ paddingRight: 5}} size={16} />
                <Text style={{ fontSize: 16, fontFamily: 'PoppinsBold'}}>{props.rating}</Text>
            </View>
        </View>
    )
};