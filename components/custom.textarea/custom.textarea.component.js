import style from './custom.textarea.module.scss';

const Textarea = (props) => {
    const { value, onChange, required, name, min, max, row} = props;

    const handleClick = (event) => onChange(event) 

    return(
        <textarea
        className={style.textarea}
        value={value}
        onChange={handleClick}
        required={required}
        name={name}
        >
        </textarea>
    )
}

export default Textarea