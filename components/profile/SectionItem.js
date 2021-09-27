import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function SectionItem({ navigation, item}) {
    return (
        <View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(`${item.gotoScreen}`)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>
                    <View style={{ backgroundColor: '#d1e4ed', borderRadius: 9, padding: 10, marginRight: 15}}>
                        {item.icon}
                    </View>
                    <Text style={[{ fontFamily: 'PoppinsBold'}, item.name === 'Log Out' ? { color: '#f00518'} : { color: '#000'}]}>{item.name}</Text>
                </View>
                <FontAwesome5 name="angle-right" size={20} color={item.name === 'Log Out' ? "#f00518" : '#000'} />
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 15,
        paddingLeft: 20,
        marginTop: 10,
        paddingVertical: 4,
        color: '#808080',
        fontFamily: 'PoppinsBold',
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

