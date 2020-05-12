import { cleanUserData } from '../helper/reducer.helpers'

export const stateReducer = (state, action) => {
    switch (action.type) {
        case "OPEN MOBILE":
            return ({
                ...state,
                mobileMenu: true,
            });
        case "CLOSE MOBILE":
            return ({
                ...state,
                mobileMenu: false,
            });
        case "OPEN DESKTOP":
            return ({
                ...state,
                desktopMenu: true,
            });
        case "CLOSE DESKTOP":
            return ({
                ...state,
                desktopMenu: false,
            });
        case "START LOADING":
            return ({
                ...state,
                isLoading: true,
            });
        case "STOP LOADING":
            return ({
                ...state,
                isLoading: false,
            });
        case "LOAD AUTH":
            const data = action.payload ? cleanUserData(action.payload) : null
            return ({
                ...state,
                isLoading: false,
                isAuthenticated: data,
            });
        case "LOAD ACCOUNT TYPE":
            return ({
                ...state,
                isLoading: false,
                accountType: action.payload,
            });
        default:
            return state;
    }
}