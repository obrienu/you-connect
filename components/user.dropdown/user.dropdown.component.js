import React, { useContext } from 'react';
import style from './user.dropdown.module.scss';
import Links from '../link/link.component';
import { StateContext } from '../../context/app.context'

const UserDropdown = () => {
    const { desktopMenu, isAuthenticated, accountType } = useContext(StateContext);
    const { dropdown, animateDropdown } = style;

    const signedInLinks = (
        <>
            <Links icon={["far", "user-circle"]} pagePath="/">
                profile
            </Links>
            <Links icon={["far", "comments"]} pagePath="/">
                messages
            </Links>
            {accountType === "escorts" &&
                <>
                    <Links icon="images" pagePath="/">
                        gallery
                    </Links>
                    <Links icon="business-time" pagePath="/">
                        services
                    </Links>
                    <Links icon={["fas", "star-half-alt"]} pagePath="/">
                        reviews
                    </Links>
                </>
            }
            <Links icon={["fas", "sign-out-alt"]}
                isSignOut={true}
            >
                sign out
            </Links>

        </>
    )
    const signedOutLinks = (
        <>
            <Links icon="sign-in-alt" pagePath="/sign-in">
                sign in
            </Links>
            <Links icon="registered" pagePath="/register">
                register
            </Links>
        </>
    )

    return (
        <nav
            className={!desktopMenu ? dropdown : `${dropdown} ${animateDropdown}`}
        >
            {isAuthenticated ? signedInLinks : signedOutLinks}
        </nav>
    )
};

export default UserDropdown