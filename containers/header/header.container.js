import React from 'react';
import PcHeader from '../../components/pcheader/pcheader.component';
import MobileHeader from '../../components/mobileheader/mobile.header.component';
import LogoHeader from '../../components/logo.header/logo.header.component';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userMenu: false,
            mobileMenu: false
        }

        this.toggleUserMenu = this.toggleUserMenu.bind(this)
        this.openMobileMenu = this.openMobileMenu.bind(this)
        this.closeMobileMenu = this.closeMobileMenu.bind(this)
    }

    toggleUserMenu() {
        this.setState({
            userMenu: !this.state.userMenu
        })
    }

    openMobileMenu() {
        this.setState({
            mobileMenu: true
        })
    }
    closeMobileMenu() {
        this.setState({
            mobileMenu: false,
           
        })
    }

    render() {
        return (
            <>
                <LogoHeader
                 openMenu={this.openMobileMenu}
                 />
                <div className="mt">
                <PcHeader
                isDown = {this.state.userMenu}
                dropdownMenu={this.toggleUserMenu}
                />
                <MobileHeader
                isMobile={true}
                closeMenu={this.closeMobileMenu}
                isOpen={this.state.mobileMenu}
                 />
                </div>
               <style jsx>{`
               .mt{
                   margin-top: 3rem;
               }
               `}</style>
            </>
        )
    }
}


export default Header