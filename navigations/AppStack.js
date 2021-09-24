import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from '../components/drawer/DrawerContent';

//Stacks
import HomeStack from './HomeStack';
import ChatsStack from './ChatsStack';
import OrderStack from './OrderStack';
import ProfileStack from './ProfileStack';


//navigators
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//tabs screens
const TabsContainer = ({ navigation, route}) => {
  console.log(route, navigation)
    return (
          <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
          }}>
            <Tabs.Screen 
              name="Home" 
              component={HomeStack} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused, color, size }) => (
                  <Ionicons name={focused ? 'home' : 'home'} size={size} color={color} />
                )
              }}
            /> 
            <Tabs.Screen 
              name="Chats" 
              component={ChatsStack} 
              options={{
                tabBarLabel: 'Chats',
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons name={focused ? 'chatbox' : 'chatbox-outline'} size={size} color={color} />
                ),
                tabBarBadge: 3,
                tabBarStyle: {
                  display: 'none'
                }
              }}
            /> 
            {/* <Tabs.Screen 
              name="Profile" 
              component={ProfileStack} 
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons name={focused ? 'user' : 'user'} size={size} color={color} />
                ),
                tabBarBadge: 3,
              }}
            />  */}
            <Tabs.Screen 
              name="Order" 
              component={OrderStack} 
              options={{
                tabBarLabel: 'Order',
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons name={focused ? 'receipt' : 'receipt-outline'} size={size} color={color} />
                ),
              }}
            /> 
        </Tabs.Navigator>
    )
}

export default function AppStack(){
    return (
        <Drawer.Navigator 
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
           <Drawer.Screen name="HomeScreen" component={TabsContainer} />
           {/* <Drawer.Screen name="ProfileScreen" component={TabsContainer} />
           <Drawer.Screen name="OrdersScreen" component={TabsContainer} />
           <Drawer.Screen name="ChatsScreen" component={TabsContainer} /> */}
        </Drawer.Navigator>
    )
}