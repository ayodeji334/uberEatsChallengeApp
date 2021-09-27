import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function HelpDescriptionItem({ item }) {
    const [showDescription, setShowDecription] = React.useState(false);

    const toggleShowDescription = () => {
       setShowDecription(!showDescription);
    };

    return (
        <View key={item.id} style={{  paddingHorizontal: 7 }}>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={toggleShowDescription} 
            >
                <View 
                    style={{ 
                        flexDirection: 'row', 
                        paddingVertical: 15, 
                        justifyContent: 'space-between', 
                        alignContent: 'center',
                        marginBottom: 5,
                    }}
                >
                    <Text style={{ width: '80%', color: '#000', fontFamily: 'PoppinsBold', fontSize: 16, marginRight: 50 }}>{item.title}</Text> 
                    <FontAwesome5Icon name={showDescription ? 'angle-up' : 'angle-down'} size={20} />
                </View>
            </TouchableOpacity>

            { showDescription && <Text style={{ 
                    fontFamily: 'Poppins', 
                    color: "#6e6e6e",
                    textAlign: 'left',
                    paddingBottom: 10, 
                    fontSize: 16 }}>
                        {item.description}
                </Text>
            }
        </View>
    )
}
