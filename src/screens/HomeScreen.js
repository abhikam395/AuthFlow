import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { BLUE } from '../utils/commoncolors';
import { clear, getToken, getUser } from '../utils/sharedPreferences';

export default class HomeScreen extends Component{

    constructor(){
        super();
        this.state = {
            user: null,
            token: null
        }
    }

    async componentDidMount(){
        const user = await getUser();
        const token = await getToken();
        this.setState({user: user, token: token});
    }

    //clear token and user information
    clearData(){
        clear();
    }

    render(){
        let {user, token} = this.state;
        if(user == null || token == null) return <View />
        const {id, username, email, address, mobile} = user;
        return (
            <View style={styles.container}>
                <Text>id: {id}</Text>
                <Text>Username: {username}</Text>
                <Text>Email: {email}</Text>
                <Text>Address: {address}</Text>
                <Text>Mobile: {mobile}</Text>
                <Text>Token:  {token}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.clearData();
                        this.props.navigation.replace('Login');
                    }}>
                    <Text style={styles.buttonLabel}>Clear</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        backgroundColor: BLUE,
        height: 50,
        marginTop: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})