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
const TabsContainer = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'Chat') {
            return false;
        }
        return true;
    };

    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
                return <Ionicons name={iconName} size={size} color={color} />;

              } else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user';
                return <FontAwesome5 name={iconName} size={size} color={color} />;

              }else if(route.name === 'Chats'){
                iconName = focused ? 'chatbox' : 'chatbox-outline';
                return <Ionicons name={iconName} size={size} color={color} />;

              }else{
                iconName = focused ? 'receipt' : 'receipt-outline';
                return <Ionicons name={iconName} size={size} color={color} />;

              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
          })}>
            <Tabs.Screen name="Home" component={HomeStack} /> 
            <Tabs.Screen name="Chats" component={ChatsStack}  options={{ tabBarBadge: 3}} />
            <Tabs.Screen name="Orders" component={OrderStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} />
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