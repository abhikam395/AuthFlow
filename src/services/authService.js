import { BASEAPI } from "../utils/config"

export async function register(user){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${BASEAPI}/auth/register`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

export async function login(user){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${BASEAPI}/auth/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}