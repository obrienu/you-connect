import React, { useContext } from 'react';
import Header from '../header/header.container';
import style from './layout.module.scss';
import { StateContext } from '../../context/app.context';

const Layout = (props) => {
    const { dispatch } = useContext(StateContext);

    return (
        <>
            <Header />
            <main
                onMouseEnter={() => dispatch({ type: "CLOSE DESKTOP" })}
                className={style.layout}>
                {props.children}
            </main>
        </>
    )
};

export default Layout;
