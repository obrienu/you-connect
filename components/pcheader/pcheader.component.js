import Links from '../link/link.component';
import UserDropdown from '../user.dropdown/user.dropdown.component';
import style from './pcheader.module.scss';

const Header = (props) => {
    const {dropdownMenu, isDown} = props
        return(
            <header className={style.header}>
            <nav className={style.nav}>
                <Links icon="laptop-house" pagePath="/">
                    Home
                </Links>
                <Links
                dropdownMenu={dropdownMenu}
                icon="user" pagePath="">
                    user
                </Links>
                <Links icon="search" pagePath="/search">
                    Search
                </Links>
                <Links icon="address-book" pagePath="/contact-us">
                    contact us
                </Links>
                <Links icon="user" pagePath="/about-us">
                    about us
                </Links>
                <Links icon="shopping-cart" pagePath="/shop">
                    shop
                </Links>
                <Links icon="blog" pagePath="/blog">
                    blog
                </Links>
            </nav>
            <UserDropdown
                dropdownMenu= {dropdownMenu}
             isDown={isDown} 
             />
            </ header>
        )
    
}

export default Header;