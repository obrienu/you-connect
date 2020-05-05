import style from './mobile.header.module.scss';
import Links from '../link/link.component';
import Logo from '../logo/logo.component';


const MobileHeader = ({ isOpen, isMobile, closeMenu }) => {

    const userLoggedLinks = (
        <>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon={["far", "user-circle"]} pagePath="/">
                profile
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon={["far", "comments"]} pagePath="/">
                messages
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="images" pagePath="/">
                gallery
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="business-time" pagePath="/">
                services
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon={["fas", "star-half-alt"]} pagePath="/">
                reviews
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon={["fas", "sign-out-alt"]} pagePath="">
                sign out
            </Links>

        </>
    );
    const mainLinks = (
        <>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="laptop-house" pagePath="/">
                Home
                    </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="search" pagePath="/search">
                Search
                    </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="address-book" pagePath="/contact-us">
                contact us
                    </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="user" pagePath="/about-us">
                about us
                    </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="shopping-cart" pagePath="/shop">
                shop
                    </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="blog" pagePath="/blog">
                blog
                    </Links>
        </>
    );
    const userLoggedOutLinks = (
        <>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="sign-in-alt" pagePath="/">
                sign in
            </Links>
            <Links isMobile={isMobile}
                closeMenu={closeMenu}
                icon="registered" pagePath="/register">
                register
            </Links>

        </>
    );

    return (
        <div className={isOpen ? `${style.openNav} ${style.mobileNav}` : style.mobileNav}>
            <div className={style.logo}>
                <Logo />
            </div>
            <nav className={style.nav} >
                {mainLinks}
                {userLoggedLinks}
                {userLoggedOutLinks}
            </nav>
        </div>

    )
};

export default MobileHeader;