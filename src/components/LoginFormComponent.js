import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { login, register } from '../services/authService';
import { loginValidation } from '../utils/authInputValidation';
import { BLUE } from '../utils/commoncolors';
import CustomTextInput from './CustomTextInputComponent';

export default class LoginFormComponent extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: null
        }
        this.loginUser = this.loginUser.bind(this);
        this.navigateToRegisterScreen = this.navigateToRegisterScreen.bind(this);
    }

    navigateToRegisterScreen(){
        let {navigation} = this.props;
        navigation.navigate('Register');
    }

    async loginUser(){
        const validation = loginValidation(this.state);
        if(validation !== true){
            this.setState({error: validation});
        }
        else {
            this.setState({error: null})
            try {
                const user = await login(this.state);
                console.log(user);
            } catch (error) {
                console.log(error)
            }
        }
    }

    render(){
        let {error} = this.state;
        return (
            <View style={styles.container}>
                 <CustomTextInput 
                    label="Username/Email"
                    value={this.state.username}
                    keyboardType="email-address"
                    error={error != null ? error.email : null}
                    callback={text => this.setState({email: text})}
                />
                 <CustomTextInput 
                    label="Password"
                    value={this.state.password}
                    secureTextEntry={true}
                    error={error != null ? error.password : null}
                    callback={text => this.setState({password: text})}
                />
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={this.loginUser}>
                    <Text style={styles.buttonLabel}>Login</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.label}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={this.navigateToRegisterScreen}>
                        <Text style={styles.link}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        fontSize: 12
    },
    loginButton: {
        height: 50,
        backgroundColor: BLUE,
        borderRadius: 5,
        marginTop: 50,
        marginBottom: 30,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        color: 'white',
        fontWeight: 'bold'
    },
    row: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 13
    },
    link: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 13,
        color: BLUE
    }
})