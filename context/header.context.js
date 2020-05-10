import React, { createContext, useReducer } from 'react';
import { headerReducer } from '../helper/header.reducer'

export const HeaderContext = createContext();

export function HeaderContextProvider(props) {
    const [menu, dispatch] = useReducer(headerReducer, { mobileMenu: false, desktopMenu: false })

    return (
        <HeaderContext.Provider
            value={{ ...menu, dispatch }}
        >
            {props.children}
        </HeaderContext.Provider>
    )
}
