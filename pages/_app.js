import '../styles/global.scss';
import { StateContextProvider } from '../context/app.context';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAddressBook, faRegistered, far } from '@fortawesome/free-regular-svg-icons';
import {
    faCheckSquare,
    faCoffee,
    faLaptopHouse,
    faSearch,
    fas,
    faBlog,
    faShoppingCart,
    faHandsHelping,
    faSignInAlt,
    faSignOutAlt,
    faImages,

} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, far, faImages, faRegistered, faSignOutAlt, faSignInAlt, faHandsHelping, faCheckSquare, faCoffee, faLaptopHouse, faSearch, faAddressBook, faUser, faBlog, faShoppingCart)

export default function App({ Component, pageProps }) {

    return (
        <StateContextProvider>
            <Component {...pageProps} />
        </StateContextProvider>
    )
};
