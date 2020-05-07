import style from './custom.select.module.scss';

const Select = props => {
const {options, label, onChange, name, value, required} = props;
const handleClick = (event) => onChange(event) 

return(
    <select 
    className={style.select} 
    name={name} value={value} 
    onChange={handleClick}
    required={required}
    >
        <option value="">{label}</option>
        {options.map((option) => (
            <option key={option.id} value={option.value}>{option.value.toUpperCase()}</option>
        ))}
    </select>
)
};

export default Select;
