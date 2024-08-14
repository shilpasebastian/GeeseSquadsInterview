import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../screens/signIn";
import SignUp from "../screens/signup";
const stack=createNativeStackNavigator();
const LoginStack=()=>{
    return(
        
            <stack.Navigator initialRouteName="SignIn">
                <stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
                <stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
            </stack.Navigator>

    );
};
export default LoginStack;