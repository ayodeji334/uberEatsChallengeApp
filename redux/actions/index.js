import { useDispatch } from 'react-redux';
import firebase from '../../firebase/config';

export const getCurrentUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid)
        } else {
          console.log('something went wrong')
        }
    });
}