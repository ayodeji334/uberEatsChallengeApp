import React, { useEffect } from 'react';
import Welcome from "../screens/Welcome";
import Login from '../screens/Login';
import Home from '../screens/Home';
import ForgetPassword from '../screens/ForgetPassword';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../screens/Register';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantDetail from '../screens/RestaurantDetail';
import firebase from '../firebase/config'; 
import { LOGIN_SUCCESS } from '../redux/actionsType';

const Stack = createStackNavigator();

export default function RootNavigation (){
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const screenOption = {
        headerTitleStyle: {
            display: "none"
        },
        headerShown: true
    };

    console.log(isAuthenticated);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        isEmailVerified: user.emailVerified,
                        photoUrl: user.photoURL
                    }
                });
            } else {
              console.log('something went wrong');
            }
        });
    }, [])

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={screenOption}
                />
                <Stack.Screen
                    name="RestaurantDetail"
                    component={RestaurantDetail}
                    options={screenOption}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={screenOption}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

// export default function RootNavigation() {
//     return (
//         <NavigationContainer>
//             <StackRoutes />
//         </NavigationContainer>
//     )
// }