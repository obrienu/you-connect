import React, { createContext } from 'react';
import { auth } from '../firebase/firebase';
import { useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [accountType, setAccountType] = useState(null)
    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(async function (user) {
            if (user) {
                const { claims } = await user.getIdTokenResult()
                setIsAuthenticated(user)
                if (claims) {
                    setAccountType(claims.accountType)
                }

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
            value={{ isAuthenticated, accountType }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
