import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function OrderStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="OrdersScreen" 
                component={Home} 
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                        borderBottomWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitleStyle: {
                        display: 'none'
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 20, marginTop: 25}}>
                            <Icon.Button 
                            name="menu" 
                            size={25} 
                            color="#000"
                            backgroundColor="#d4d4d4" 
                            style={{ borderRadius: 10, paddingRight: 0}}
                            onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    )
                }}  
            />
        </Stack.Navigator>
    )
}
