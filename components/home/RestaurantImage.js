import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, TouchableOpacity } from "react-native";

export default function RestaurantImage(props){
   return (
        <React.Fragment>
            <Image
                source={{
                    uri: props.image,
                }}
                style={{ width: "100%", height: 180, borderRadius: 20 }}
            />
            <TouchableOpacity style={{ right: 40, top: 20, marginRight: 20 }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
            </TouchableOpacity>
        </React.Fragment>
   )
}