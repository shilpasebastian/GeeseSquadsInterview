import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

const TextField=({placeholder,handleText,value,message,handleSecure,isSecure} : {placeholder:string,handleText:any,value:any,message:any,handleSecure:any,isSecure:any})=>{
    return(
        <View style={{marginTop:30}}>
            <TextInput style={{height:50,backgroundColor:'white',color:'grey',paddingHorizontal:10}}
            placeholder={placeholder} placeholderTextColor={'grey'} onChangeText={handleText} value={value} secureTextEntry={isSecure}/>{placeholder=='Password'?
            <TouchableOpacity style={{position:'absolute',right:10,top:23}} onPress={handleSecure}><Image source={isSecure?require('../../assets/images/view.png'):require('../../assets/images/closed-eyes.png')} style={{width:18,height:13}}></Image></TouchableOpacity>:''}
           {message?<Text style={{fontSize:10,color:'red'}}>{message}</Text>:''}
        </View> 
    )
}
export default TextField;