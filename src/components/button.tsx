import { Text, TouchableOpacity } from "react-native"

const Button=({text,onClick}:{text:string,onClick: Function})=>{
    return(
        <TouchableOpacity style={{height:50,backgroundColor:'#7b68ee',marginTop:40,borderRadius:15,alignItems:'center'}} onPress={() => onClick()}>
            <Text style={{fontSize:14,fontFamily:'Poppins_400Regular',color:'white',marginTop:13}}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Button;