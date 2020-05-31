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
        case "SET AUTH":
            return ({
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false
            });
        case "REGISTER FAIL":
        case "AUTH ERROR":
        case "LOGOUT SUCCESS":
        case "LOGIN FAIL":
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            };
        default:
            return state;
    }
}