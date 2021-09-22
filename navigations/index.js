import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase/config'; 
import { LOGIN_SUCCESS } from '../redux/actionsType';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default function RootNavigation (){
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

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
            {/* <AppStack /> */}
            <AuthStack />
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