import React, { useState } from 'react';
import style from './custom.input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = (props) => {
    const { type, placeholder, value, onChange, required, name } = props;

    const handleClick = (event) => onChange(event)

    const [isVisible, setisVisible] = useState(0);

    const changePasswordType = () => {
        setisVisible(!isVisible);
    }

    const passwordInput = (
        <div className={style.password}>
            <input
                className={style.passwordInput}
                type={isVisible ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={handleClick}
                required={required}
                name={name}
            />
            <span 
            className={style.passwordIcon}
            >
                <FontAwesomeIcon
                    onClick={changePasswordType}
                    icon={!isVisible ? ["fas", "eye"] : ["fas", "eye-slash"]}
                />
            </span>
        </div>
    )

    const input = (
        <input
            className={style.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleClick}
            required={required}
            name={name}
        />
    )

    return type === "password" ? passwordInput : input;
}

export default Input