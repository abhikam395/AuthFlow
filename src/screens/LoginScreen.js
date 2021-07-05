import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginFormComponent from '../components/LoginFormComponent';

export default class LoginScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <LoginFormComponent {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 20
    },
})