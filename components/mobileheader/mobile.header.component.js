import React, { useContext } from 'react';
import style from './mobile.header.module.scss';
import Links from '../link/link.component';
import Logo from '../logo/logo.component';
import { StateContext } from '../../context/app.context';

const MobileHeader = ({ isMobile }) => {


    const { mobileMenu, isAuthenticated, accountType } = useContext(StateContext);
    const userLoggedLinks = (
        <>
            <Links isMobile={isMobile}
                icon={["far", "user-circle"]} pagePath="/">
                profile
            </Links>
            <Links isMobile={isMobile}
                icon={["far", "comments"]} pagePath="/">
                messages
            </Links>
            {
                accountType === "escorts" &&
                <>
                    <Links isMobile={isMobile}
                        icon="images" pagePath="/">
                        gallery
            </Links>
                    <Links isMobile={isMobile}
                        icon="business-time" pagePath="/">
                        services
            </Links>
                    <Links isMobile={isMobile}
                        icon={["fas", "star-half-alt"]} pagePath="/">
                        reviews
            </Links>
                </>
            }

            <Links
                isMobile={isMobile}
                isSignOut={true}
                icon={["fas", "sign-out-alt"]} pagePath="">
                sign out
            </Links>

        </>
    );
    const mainLinks = (
        <>

            <Links isMobile={isMobile}
                icon="search" pagePath="/search">
                Search
                    </Links>
            <Links isMobile={isMobile}
                icon="address-book" pagePath="/contact-us">
                contact us
                    </Links>
            <Links isMobile={isMobile}
                icon="user" pagePath="/about-us">
                about us
                    </Links>
            <Links isMobile={isMobile}
                icon="shopping-cart" pagePath="/shop">
                shop
                    </Links>
            <Links isMobile={isMobile}
                icon="blog" pagePath="/blog">
                blog
                    </Links>
        </>
    );
    const userLoggedOutLinks = (
        <>
            <Links isMobile={isMobile}
                icon="sign-in-alt" pagePath="/sign-in">
                sign in
            </Links>
            <Links isMobile={isMobile}
                icon="registered" pagePath="/register">
                register
            </Links>

        </>
    );


    return (
        <div className={mobileMenu ? `${style.openNav} ${style.mobileNav}` : style.mobileNav}>
            <div className={style.logo}>
                <Logo />
            </div>
            <nav className={style.nav} >
                <Links isMobile={isMobile}
                    icon="laptop-house" pagePath="/">
                    Home
                </Links>
                {isAuthenticated ? userLoggedLinks : userLoggedOutLinks}
                {mainLinks}

            </nav>
        </div>

    )
};

export default MobileHeader;