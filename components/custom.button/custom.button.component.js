import style from './custom.button.module.scss'

const Button = (props) => {
    const { onClick, type, block, isActive } = props;
    const handleClick = () => onClick && onClick();

    return(
        <button
        type={type}
        className={`${style.button} ${block && style.isBlock } ${isActive && style.isActive }`}
        onClick={handleClick}
        >
            {props.children}
        </button>
    )
};

export default Button