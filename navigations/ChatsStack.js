import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatsList from '../screens/ChatsList';
import ChatRoom from '../screens/ChatRoom';

const Stack = createStackNavigator();

export default function ChatsStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName='ChatsScreen'>
            <Stack.Screen 
                name="ChatsScreen" 
                component={ChatsList} 
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                        borderBottomWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitleStyle: {
                        color: 'black',
                        fontFamily: 'PoppinsBold',
                        marginTop: 21
                    },
                    title: 'Chats',
                    headerLeft: () => (
                        <View style={{ marginLeft: 20, marginTop: 25}}>
                            <Icon.Button 
                                name="md-chevron-back-sharp" 
                                size={25} 
                                color="#000"
                                backgroundColor="#d4d4d4" 
                                style={{ borderRadius: 10, paddingRight: 0}}
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    )
                }}  
            />
            <Stack.Screen 
                name="ChatRoomItem" 
                component={ChatRoom}   
            />
        </Stack.Navigator>
    )
}
