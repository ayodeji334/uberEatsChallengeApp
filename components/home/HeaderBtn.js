import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
export default function HeaderBtn({ text, activeTab, setActiveTab }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: activeTab === text ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}
            activeOpacity={0.7}
            onPress={() => setActiveTab(text)}
        >
            <Text
                style={{
                    color: activeTab === text ? "white" : "black",
                    fontSize: 14,
                    fontFamily: 'PoppinsBold'
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}
