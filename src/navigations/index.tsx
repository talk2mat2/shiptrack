import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../views/dashboard';
import FirstIntro from '../views/splash/firstIntro';
import Login from '../views/login';
import BottomNav from './bottomNav';

const Navigations = () => {
  const [showSplash, setShowSplash] = useState(1);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {showSplash === 1 ? (
        <FirstIntro handleNext={() => setShowSplash(2)} />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name='Dashboard' component={BottomNav}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigations;
