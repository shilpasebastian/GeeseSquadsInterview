export const signInValidation = ({email,password}:{email:string,password:string}) => {
    let emailError = '';
    let passwordError = '';
    let status = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if((email === undefined || email === null || email === '' )){
        emailError = 'Please enter an email address.';
        status = false;
    }else if(!emailRegex.test(email)){
        emailError = 'Please enter an valid email address.';
        status = false;
    }
    if(password === undefined || password === null || password === ''){
        passwordError = 'Please enter a password.'
        status = false;
    }
    return {status: status, emailError: emailError, passwordError: passwordError};
     
}

export const signUpValidation = ({firstname,lastname,email,password}:{firstname:string,lastname:string,email:string,password:string}) => {
    let firstnameError='';
    let lastnameError='';
    let emailError = '';
    let passwordError = '';
    let status = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if((firstname === undefined || firstname === null || firstname === '' )){
        firstnameError = 'Please enter first name.';
        status = false;
    }
    if((lastname === undefined || lastname === null || lastname === '' )){
        lastnameError = 'Please enter last name.';
        status = false;
    }
    if((email === undefined || email === null || email === '' )){
        emailError = 'Please enter an email address.';
        status = false;
    }else if(!emailRegex.test(email)){
        emailError = 'Please enter an valid email address.';
        status = false;
    }
    if(password === undefined || password === null || password === ''){
        passwordError = 'Please enter a password.'
        status = false;
    }
    return {status: status,firstnameError:firstnameError,lastnameError:lastnameError, emailError: emailError, passwordError: passwordError};
     
}