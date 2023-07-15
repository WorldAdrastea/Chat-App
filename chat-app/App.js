// import the screens
import Screen1 from './components/Start';
import Screen2 from './components/Chat';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator(); // Creating a new stack navigator using the createNativeStackNavigator function

const App = () => {
  return (
    // Wrapping the entire app with the NavigationContainer component to provide navigation functionalities
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
