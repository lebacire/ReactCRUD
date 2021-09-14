import React, { useContext } from "react";
import Mainpage from "./Pages/Mainpage/MainPage";
import Login from './Pages/Login/Login';
import { AuthContext } from './Pages/Login/auth-context';
const App = (props) => {
    const authContext = useContext(AuthContext);
    const rememberMe = localStorage.getItem('isAuthenticated') === 'true';
    console.log('rememberMe' + rememberMe)


    let content = <Login />
    if (rememberMe === true) {
        content = <Mainpage />
    }
    //https://programmingwithmosh.com/react/localstorage-react/
    // let content = <Mainpage />
    if (authContext.isAuth) {
        content = <Mainpage />
    }
    // content = <Login />
    return content
}
export default App;
