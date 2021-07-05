import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { register } from '../services/authService';
import { registerValidation } from '../utils/authInputValidation';
import { BLUE } from '../utils/commoncolors';
import CustomTextInput from './CustomTextInputComponent';

export default class RegisterFormComponent extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            address: '',
            mobile: '',
            error: ''
        }
        this.registerUser = this.registerUser.bind(this);
        this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
    }

    navigateToLoginScreen(){
        let {navigation} = this.props;
        navigation.navigate('Login');
    }


    async registerUser(){
        const validation = registerValidation(this.state);
        if(validation !== true){
            this.setState({error: validation});
        }
        else {
            this.setState({error: null})
            try {
                const user = await register(this.state);
                console.log(user);
            } catch (error) {
                console.log(error)
            }
        }
    }

    render(){
        let {error} = this.state;
        console.log(error);
        return (
            <View style={styles.container}>
                <CustomTextInput 
                    label="Username"
                    value={this.state.username}
                    error={error != null ? error.username : null}
                    callback={text => this.setState({username: text})}
                />
                <CustomTextInput 
                    label="Name"
                    value={this.state.name}
                    error={error != null ? error.name : null}
                    callback={text => this.setState({name: text})}
                />
                <CustomTextInput 
                    label="Email"
                    value={this.state.email}
                    error={error != null ? error.email : null}
                    keyboardType="email-address"
                    callback={text => this.setState({email: text})}
                />
                <CustomTextInput 
                    label="Password"
                    value={this.state.password}
                    secureTextEntry={true}
                    error={error != null ? error.password : null}
                    callback={text => this.setState({password: text})}
                />
                <CustomTextInput 
                    label="Address"
                    value={this.state.address}
                    error={error != null ? error.address : null}
                    callback={text => this.setState({address: text})}
                />
                <CustomTextInput 
                    label="Mobile"
                    value={this.state.mobile}
                    keyboardType="phone-pad"
                    error={error != null ? error.mobile : null}
                    callback={text => this.setState({mobile: text})}
                />
                <TouchableOpacity 
                    style={styles.createButton}
                    onPress={this.registerUser}>
                    <Text style={styles.buttonLabel}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.label}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={this.navigateToLoginScreen}>
                        <Text style={styles.link}>Login</Text>
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
    },
    input: {
        marginTop: 20,
        fontSize: 12,
    },
    createButton: {
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
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 13,
        color: BLUE
    }
})