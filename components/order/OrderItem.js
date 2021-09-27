import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'

export default function OrderItem() {
    return (
        <View style={{ paddingHorizontal: 20, marginBottom: 40}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flexDirection: 'row'}}>
                    <Image
                        source={require('../../assets/images/bg2.jpg')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 8,
                        }}
                    />
                    <View style={{ flexDirection: 'column', marginLeft: 10}}>
                        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 20}}>Restaurant Name</Text>
                        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 17, color: '#6e6e6e'}}>I2 items</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'PoppinsBold', paddingTop: 5 }}>Mar 19</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={{ padding: 20, backgroundColor: '#2b2b2b', marginTop: 20, borderRadius: 10}}>
                <Text style={{ fontFamily: 'PoppinsBold', color: 'white', textAlign: 'center'}}>Re-Order</Text>
            </TouchableOpacity>
        </View>
    )
}
