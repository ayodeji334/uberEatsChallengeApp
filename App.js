import 'react-native-gesture-handler';
import * as React from 'react';
import { useFonts } from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import RootNavigation from './navigations/index';
import firebase from './firebase/config'; 

//Prevent splashscreen from auto hiding until the app finish loading auth state
SplashScreen.preventAutoHideAsync();

const store = configureStore();

export default function App() {
  // const dispatch = useDispatch();

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
  });

  useEffect(() => {
    setTimeout(async () => {
      // Hide the splash after 4s
      await SplashScreen.hideAsync()
    }, 6000);
  }, []);
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  )
};
