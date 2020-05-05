import React from 'react';
import Links from '../link/link.component';
import Logo from '../logo/logo.component';
import UserDropdown from '../user.dropdown/user.dropdown.component';
import style from './pcheader.module.scss';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userMenu : false
        }

        this.toggleUserMenu = this.toggleUserMenu.bind(this)
    }

toggleUserMenu(){
    this.setState({
        userMenu: !this.state.userMenu
    })
}
    render(){
        return(
            <header className={style.header}>
            <div className={style.topHeader}>
            <Logo />
            </div>
            <nav className={style.nav}>
                <Links icon="laptop-house" pagePath="/">
                    Home
                </Links>
                <Links
                dropdownMenu={this.toggleUserMenu}
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
                dropdownMenu= {this.toggleUserMenu}
             isDown={this.state.userMenu} 
             />
            </ header>
        )
    }
}

export default Header;