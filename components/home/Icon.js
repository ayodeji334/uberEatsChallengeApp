import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Icon({icon, text}) {
    return (
        <TouchableOpacity>
            <View>
                <FontAwesome5
                    name={icon}
                    size={25}
                    style={{
                        marginBottom: 3,
                        alignSelf: "center",
                    }}
                />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
