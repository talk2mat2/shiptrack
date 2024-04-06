import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../views/dashboard';
import AppTabBar from './tabBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <View>
      <Text>hhh</Text>
    </View>
  );
};

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false}}
        tabBar={props => <AppTabBar {...props} />}>
        <Tab.Screen name="Shipments" component={Dashboard} />
        <Tab.Screen name="Scan" component={Dashboard} />
        <Tab.Screen name="Wallet" component={Dashboard} />
        <Tab.Screen name="Profile" component={Dashboard} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomNav;
