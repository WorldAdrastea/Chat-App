// import the screens
import Screen1 from './components/Start';
import Screen2 from './components/Chat';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Create the navigator
const Stack = createNativeStackNavigator(); // Creating a new stack navigator using the createNativeStackNavigator function

const App = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDTswzUwMaYKlzEa38WkmnkASyC0wvHki4",
    authDomain: "chat-app-dc27c.firebaseapp.com",
    projectId: "chat-app-dc27c",
    storageBucket: "chat-app-dc27c.appspot.com",
    messagingSenderId: "207972992076",
    appId: "1:207972992076:web:ca8865d306d3a9faf960e9",
    measurementId: "G-HB5XE8NVDK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    // Wrapping the entire app with the NavigationContainer component to provide navigation functionalities
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        >
        </Stack.Screen>
        <Stack.Screen
          name="Screen2"
        >
        {/* Passes the props to Screen2 component */}
        {(props) => <Screen2 db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
