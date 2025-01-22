import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/welcomeScreen';
import homescreen from './src/screen/homescreen';
import AboutScr from './src/screen/aboutscr';
import ContactScr from './src/screen/contactscr';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HOME" component={homescreen} />
        <Stack.Screen name="About" component={AboutScr} />
        <Stack.Screen name="Contact" component={ContactScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
