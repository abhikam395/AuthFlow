export function registerValidation(props){
    let { username, name, email, password, address, mobile } = props;
    let emailSuffix = email.split('@')[1];
    let error = {};

    if(username == '' || username.length < 3)
        error.username = username == '' ? "Enter username" : "Username must be more than 2 characters"
    if(name == '' || name.length < 5)
        error.name = name == '' ? "Enter name" : "Name must be more than 4 characters"
    if(email == '' || emailSuffix == 'gmail.com')
        error.email = email == '' ? "Enter email" : "Invalid email"
    if(password == '' || password.length < 6)
        error.password = password == '' ? "Enter password" : "password must be more than 5 characters"
    if(address == '')
        error.address = "Enter address"
    if(mobile == '' || mobile.length != 10){
        error.mobile = mobile == '' ? "Enter mobile number" : 
            mobile.length > 10 ? "Mobile number should not more than 10 digits" : "Mobile number should not less than 10 digits"
    }
    if(Object.keys(error).length != 0) return error;
    else return true;
}

export function loginValidation(props){
    let { email, password } = props;
    let emailSuffix = email.split('@')[1];
    let error = {};

    if(email == '' || emailSuffix != 'gmail.com'){
        error.email = email == '' ? "Enter email" : "Invalid email"
    }
    if(password == '' || password.length < 6)
        error.password = password == '' ? "Enter password" : "password must be more than 5 characters"

    if(Object.keys(error).length != 0) return error;
    else return true;
}