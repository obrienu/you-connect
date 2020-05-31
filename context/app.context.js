import React, { createContext, useReducer, useEffect } from 'react';
import { stateReducer } from '../helper/app.reducer'
import { useCookies } from 'react-cookie';

export const StateContext = createContext();

export function StateContextProvider(props) {

    const [cookies, setCookie] = useCookies(['token']);

    const getHeaderConfig = () => {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };
        return config;
    };

    const { headers } = getHeaderConfig();

    const isAuthenticated = false;


    const [state, dispatch] = useReducer(stateReducer, { isAuthenticated, isLoading: false, mobileMenu: false, desktopMenu: false, user: null, token: cookies.token })

    useEffect(() => {
        let isMounted = true
        async function onChange(userInfo) {
            if (userInfo.Error) {
                setCookie('token', null);
                return dispatch({
                    type: "AUTH ERROR",
                });
            }
            const { user, token } = userInfo;
            setCookie('token', token);
            dispatch({
                type: "SET AUTH",
                payload: { user, token }
            });
        }

        async function getUser() {
            const res = await fetch("/api/user", {
                method: "GET",
                headers
            });
            const userInfo = await res.json();

            if (isMounted) {
                console.log(userInfo);
                return onChange(userInfo);
            }
        }

        getUser();

        return () => {
            isMounted = false;
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
