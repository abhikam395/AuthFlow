import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export default function CustomTextInput(props){
    let {callback, value, label, error, keyboardType, secureTextEntry} = props;
    return (
        <View style={styles.container}>
            <TextInput
                label={label}
                value={value}
                style={styles.input}
                mode="outlined"
                onChangeText={callback}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            {error != null  && (
                <HelperText type="error">
                    {error}
                </HelperText>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        marginTop: 20,
        fontSize: 12,
    },
})