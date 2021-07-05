import React, { Component } from "react";
import {View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './../screens/LoginScreen';
import HomeScreen from './../screens/HomeScreen';
import RegisterScreen from './../screens/RegisterScreen';
import { getToken } from "../utils/sharedPreferences";
import { ActivityIndicator } from "react-native-paper";
import { BLUE } from "../utils/commoncolors";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default  class MainNavigation extends Component{

    constructor(){
        super();
        this.state = {
            token : undefined
        }
    }

    async componentDidMount(){
        const token = await getToken();
        console.log(token)
        this.setState({token: token});
    }

    render(){
        let {token} = this.state;
        if(token === undefined){
            return (
                <View style={styles.container}>
                    <ActivityIndicator color={BLUE} size="large" style={styles.loader}/>
                </View>
            )
        }

        return (
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName={token == null ? "Login" : "Home"} 
                    screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    loader: {
        // alignSelf: 'center'
    }
});