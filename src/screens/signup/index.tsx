import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View} from 'react-native';
import TextField from '../../components/textinput'; // Make sure this component is correctly implemented
import Button from '../../components/button'; // Make sure this component is correctly implemented
import strings from '../../utils/strings';
import { signInValidation, signUpValidation } from '../../utils/validations';
import Toast from 'react-native-root-toast';
import styles from './styles';
import Icons from '../../utils/icons';

const SignUp = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [firstnamelMessage, setFirstNameMessage] = useState('');
    const [lastnameMessage, setLastNAmeMessage] = useState('');
    const [isSecure, setSecure] = useState(true);

    const handleEmail = (text) => {
        setEmail(text);
        setEmailMessage('');
    };

    const handlePassword = (text) => {
        setPassword(text);
        setPasswordMessage('');
        
    };

    const handleFirstName = (text) => {
        setFirstName(text);
        setFirstNameMessage('');
    };

    const handleLastName = (text) => {
        setLastName(text);
        setLastNAmeMessage('');
        
    };

    const handleSecure = () => {
        setSecure(!isSecure);
    };


const onSubmit = () => {
    const data = signUpValidation({firstname,lastname,email,password})
    console.log(data);
    if(data.status){
        Toast.show(strings.signupSuccess, {
            duration: Toast.durations.LONG,
          });
    }else{
        setFirstNameMessage(data.firstnameError)
        setLastNAmeMessage(data.lastnameError)
        setEmailMessage(data.emailError)
        setPasswordMessage(data.passwordError)
    
    }
}



    const renderFields = () => {
        return (
        <View>
            <TextField
                placeholder={strings.firstName}
                handleText={handleFirstName}
                value={firstname}
                message={firstnamelMessage}
                handleSecure={handleSecure}
                isSecure={false}/>
                <TextField
                placeholder={strings.lastName}
                handleText={handleLastName}
                value={lastname}
                message={lastnameMessage}
                handleSecure={handleSecure}
                isSecure={false}/>
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
                text={strings.signup}
                onClick={onSubmit}
                />
        </View>
 )
    }

    const navigationBack=()=>{
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigationBack}><Image source={Icons.leftIcon} style={{width:20,height:20}}/></TouchableOpacity>
            <Text style={styles.title}>{strings.signupText}</Text>
            {renderFields()}    
            {renderButton()}
        </View>
    );
};



export default SignUp;
