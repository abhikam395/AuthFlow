import SharedPreferences from 'react-native-shared-preferences';

export function saveUser(user){
    SharedPreferences.setItem('user', user);
}

export function saveToken(token){
    SharedPreferences.setItem('token', token)
}

export async function getUser(){
    return new Promise((resolve, reject) => {
        SharedPreferences.getItem('user', function(value){
            resolve(JSON.parse(value));
        });
    })
}

export async function getToken(){
    return new Promise((resolve, reject) => {
        SharedPreferences.getItem('token', function(value){
            resolve(value);
        });
    })
}

export function clear(){
    SharedPreferences.clear();
}