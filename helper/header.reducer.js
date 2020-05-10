export const headerReducer = (state, action) => {
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
        default:
            return state;
    }
}