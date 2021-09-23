import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import RestaurantDetail from '../screens/RestaurantDetail';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
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
                                activeOpacity={0.96} 
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
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
                options={{ headerTitleStyle: {display: 'none'}, headerShown: true }}
            />
        </Stack.Navigator>
    )
}
