import React from 'react';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthStack(){
    const screenOption = {
        headerTitleStyle: {
            display: "none"
        },
        headerShown: true
    };

    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={screenOption}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={screenOption}
            />

            <Stack.Screen
                name="ForgetPassword"
                component={ForgetPassword}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}