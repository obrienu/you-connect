import React, { useContext } from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import style from './link.module.scss';
import { StateContext } from '../../context/app.context';
import { auth } from '../../firebase/firebase';

const Links = (props) => {
    const { icon, pagePath, dropdown, isMobile, isSignOut } = props;
    const { dispatch } = useContext(StateContext);
    const handleClick = async () => {
        if (isSignOut) {
            await auth.signOut();
            Router.push("/");
        };

        if (dropdown) {
            return dispatch({ type: "OPEN DESKTOP" });
        }

        if (isMobile) {
            return dispatch({ type: "CLOSE MOBILE" });
        }

    }
    const handleHover = () => {
        if (dropdown) {
            return dispatch({ type: "OPEN DESKTOP" });
        }
    }

    {
        return pagePath ?
            (<>
                <Link href={pagePath}>
                    <a
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={style.link}
                    >
                        <FontAwesomeIcon className={style.icon} icon={icon} />
                        <span className={style.name}>{props.children.toUpperCase()}</span>
                    </a>
                </Link>
            </>)
            : (
                <>
                    <a
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        className={style.link}
                    >
                        <FontAwesomeIcon className={style.icon} icon={icon} />
                        <span className={style.name}>{props.children.toUpperCase()}</span>
                    </a>
                </>
            )
    }

};

export default Links;