import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './../screens/LoginScreen';
import HomeScreen from './../screens/HomeScreen';
import RegisterScreen from './../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}