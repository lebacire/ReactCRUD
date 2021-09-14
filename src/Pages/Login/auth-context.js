import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => { }
})

const AuthContextPrvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = () => {
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', true);
    }
    const logoutHandler = () => {
        setIsAuthenticated(false)
        localStorage.setItem('isAuthenticated', false);
        window.location.reload(false);
    }
    return (
        <BrowserRouter>
            <Route>
                {(routeProps) => (
                    <AuthContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated, logout: logoutHandler }}>
                        {props.children}
                    </AuthContext.Provider>
                )}
            </Route>
        </BrowserRouter>
    )
}
export default AuthContextPrvider;