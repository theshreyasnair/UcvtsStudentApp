import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../views/HomeScreen/HomeScreen.js";
import LoginScreen from "../views/LoginScreen/LoginScreen.js";
import SignUpScreen from "../views/SignUpScreen/SignUpScreen.js";

const screens = {
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    SignUp: {
        SignUpScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);