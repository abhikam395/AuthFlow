import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import RegisterFormComponent from '../components/RegisterFormComponent';

export default class RegisterScreen extends Component{

    render(){
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Create Account</Text>
                <RegisterFormComponent {...this.props}/>
            </ScrollView>
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