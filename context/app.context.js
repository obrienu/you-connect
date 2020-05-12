import React, { createContext, useReducer } from 'react';
import { stateReducer } from '../helper/app.reducer'

export const StateContext = createContext();

const user = {
    profile: null,
    messages: [],
    reviews: [],
    about: null,
};

const search = [];

export function StateContextProvider(props) {
    const [state, dispatch] = useReducer(stateReducer, { isLoading: false, mobileMenu: false, desktopMenu: false, user, search, })

    return (
        <StateContext.Provider
            value={{ ...state, dispatch }}
        >
            {props.children}
        </StateContext.Provider>
    )
}
