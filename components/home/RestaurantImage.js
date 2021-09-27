import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Image, TouchableOpacity, View } from "react-native";

export default function RestaurantImage(props){
    const [isLiked, setIsLiked] = useState(false);

    const toggleLiked = () => {
        setIsLiked(!isLiked);
    }

    return (
        <View style={{ position: 'relative'}}>
            <Image
                source={{
                    uri: props.image,
                }}
                style={{ width: "100%", height: 230, borderRadius: 20 }}
            />
            <TouchableOpacity onPress={toggleLiked} style={{ right: 10, top: 20, marginRight: 10, position: 'absolute' }}>
                <FontAwesome name="heart" size={25} color={isLiked ? "red" : "white"} />
            </TouchableOpacity>
        </View>
    )
}