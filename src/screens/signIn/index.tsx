import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import TextField from '../../components/textinput'; // Make sure this component is correctly implemented
import Button from '../../components/button'; // Make sure this component is correctly implemented
import strings from '../../utils/strings';
import styles from './styles';
import { signInValidation } from '../../utils/validations';
import Toast from 'react-native-root-toast';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isSecure, setSecure] = useState(true);

    const handleEmail = (text) => {
        setEmail(text);
        setEmailMessage('');
    };

    const handlePassword = (text) => {
        setPassword(text);
        setPasswordMessage('');
        
    };

    const handleSecure = () => {
        setSecure(!isSecure);
    };

const onSubmit = () => {
    const data = signInValidation({email,password})
    console.log(data);
    if(data.status){
        Toast.show(strings.signinSuccess, {
            duration: Toast.durations.LONG,
          });
    }else{
        setEmailMessage(data.emailError)
        setPasswordMessage(data.passwordError)
    
    }
}

const redirect = () => {
    props.navigation.navigate('SignUp');
}

    const renderFields = () => {
        return (
        <View>
            <TextField
                placeholder={strings.email}
                handleText={handleEmail}
                value={email}
                message={emailMessage}
                handleSecure={handleSecure}
                isSecure={false}/>
            <TextField
                placeholder={strings.password}
                handleText={handlePassword}
                value={password}
                message={passwordMessage}
                handleSecure={handleSecure}
                isSecure={isSecure}/>
        </View>
        )
    }

    const renderButton = () => {
        return (
        <View>
            <Button
                text={strings.signin}
                onClick={onSubmit}
                />
            <View style={styles.footer}>
                <Text style={styles.footerText}>{strings.noAccount}</Text>
                <TouchableOpacity onPress={redirect}>
                    <Text style={styles.signUpText}>{strings.signup}</Text>
                </TouchableOpacity>
            </View>
        </View>
 )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{strings.signin}</Text>
            {renderFields()}    
            {renderButton()}
        </View>
    );
};



export default SignIn;
