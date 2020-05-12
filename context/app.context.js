import React, { createContext, useReducer, useEffect } from 'react';
import { stateReducer } from '../helper/app.reducer'
import { auth } from '../firebase/firebase';

export const StateContext = createContext();

const userState = {
    profile: null,
    messages: [],
    reviews: [],
    about: null,
};

const search = [];
const isAuthenticated = "loading";
const accountType = null;
export function StateContextProvider(props) {

    const [state, dispatch] = useReducer(stateReducer, { isAuthenticated, accountType, isLoading: false, mobileMenu: false, desktopMenu: false, userState, search, })

    useEffect(() => {
        async function onChange(user) {
            dispatch({
                type: "LOAD AUTH",
                payload: user
            });
            if (user) {
                const { claims: { accountType } } = await user.getIdTokenResult();
                dispatch({
                    type: "LOAD ACCOUNT TYPE",
                    payload: accountType
                });
            }

        }

        const unsubscribeAuth = auth.onAuthStateChanged(onChange)
        return () => {
            unsubscribeAuth();
        }
    }, [isAuthenticated])

    return (
        <StateContext.Provider
            value={{ ...state, dispatch }}
        >
            {props.children}
        </StateContext.Provider>
    )
}
