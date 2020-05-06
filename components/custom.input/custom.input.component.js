import style from './custom.input.module.scss';

const Input = (props) => {
    const { type, placeholder, value, onChange, required, name} = props;

    const handleClick = (event) => onChange(event) 

    return(
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
}

export default Input