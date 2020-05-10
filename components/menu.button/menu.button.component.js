import React, { useContext } from 'react';
import { HeaderContext } from '../../context/header.context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './menu.button.module.scss';

const MenuButton = () => {
    const { dispatch } = useContext(HeaderContext);
    return (
        <FontAwesomeIcon
            onClick={() => dispatch({ type: "OPEN MOBILE" })}
            className={style.menu} icon={["fas", "bars"]} />
    )
};

export default MenuButton