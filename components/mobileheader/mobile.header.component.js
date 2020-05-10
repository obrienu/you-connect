import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import style from './mobile.header.module.scss';
import Links from '../link/link.component';
import Logo from '../logo/logo.component';
import { HeaderContext } from '../../context/header.context';

const MobileHeader = ({ isMobile }) => {


    const { isAuthenticated } = useContext(AuthContext);
    const { mobileMenu } = useContext(HeaderContext);
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