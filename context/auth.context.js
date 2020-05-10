import React, { createContext } from 'react';
import { auth } from '../firebase/firebase';
import { useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(function (user) {
            if (user) {
                setIsAuthenticated(user)
            } else {
                setIsAuthenticated(null)
            }
        });

        return function cleanup() {
            unsubscribeFromAuth();
        };
    }, [isAuthenticated])


    return (
        <AuthContext.Provider
            value={{ isAuthenticated }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
