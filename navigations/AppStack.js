import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';

import ChatsList from '../screens/ChatsList';
import OrderList from '../screens/OrderList';
import { createStackNavigator } from '@react-navigation/stack';
import ChatRoom from '../screens/ChatRoom';
import RestaurantDetail from '../screens/RestaurantDetail';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function AppStack({ navigation, route}){
  const TabStack  = () => {
    return (
      <Tabs.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          padding: 10,
          marginBottom: 2
        },
        headerTitleStyle: {
          fontFamily: 'PoppinsBold'
        }
      }}>
        <Tabs.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home'} size={size} color={color} />
            ),
            headerShown: false
          }}
        /> 
        <Tabs.Screen 
          name="Chats" 
          component={ChatsList} 
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'chatbox' : 'chatbox-outline'} size={size} color={color} />
            ),
            tabBarBadge: 3,
            headerShown: true,
          }}
        />
        <Tabs.Screen 
          name="Order" 
          component={OrderList} 
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'receipt' : 'receipt-outline'} size={size} color={color} />
            ),
            headerShown: true
          }}
        />
        <Tabs.Screen 
          name="Account" 
          component={Profile} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5 name={focused ? 'user' : 'user'} size={size} color={color} />
            ),
            headerShown: true
          }}
        />
      </Tabs.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='Root' component={TabStack} options={{ headerShown: false}} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen 
        name="RestaurantDetail"
        component={RestaurantDetail} 
        options={{ 
          headerTitleStyle: { display: 'none' }, 
          headerShown: true 
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}