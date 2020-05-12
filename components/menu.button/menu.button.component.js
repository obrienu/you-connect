import React, { useContext } from 'react';
import { StateContext } from '../../context/app.context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './menu.button.module.scss';

const MenuButton = () => {
    const { dispatch } = useContext(StateContext);
    return (
        <FontAwesomeIcon
            onClick={() => dispatch({ type: "OPEN MOBILE" })}
            className={style.menu} icon={["fas", "bars"]} />
    )
};

export default MenuButton