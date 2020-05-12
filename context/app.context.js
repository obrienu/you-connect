import React, { createContext, useReducer, useEffect } from 'react';
import { stateReducer } from '../helper/app.reducer'
import { auth } from '../firebase/firebase'
export const StateContext = createContext();

const userState = {
    profile: null,
    messages: [],
    reviews: [],
    about: null,
};

const search = [];
const isAuthenticated = null;
const accountType = null;

export function StateContextProvider(props) {
    const [state, dispatch] = useReducer(stateReducer, { isAuthenticated, accountType, isLoading: false, mobileMenu: false, desktopMenu: false, userState, search, })

    async function setUserAccount(user) {
        if (user) {
            const { claims: { accountType } } = await user.getIdTokenResult();
            dispatch({
                type: "LOAD ACCOUNT TYPE",
                payload: accountType
            });
        } else {
            dispatch({
                type: "LOAD ACCOUNT TYPE",
                payload: null
            });
        }
    };

    function onChange(user) {
        dispatch({
            type: "LOAD AUTH",
            payload: user
        });
        setUserAccount(user)
    }

    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(onChange);
        unsubscribeFromAuth()
    }, [])

    return (
        <StateContext.Provider
            value={{ ...state, dispatch }}
        >
            {props.children}
        </StateContext.Provider>
    )
}
