import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './menu.button.module.scss';

const MenuButton = ({openMenu}) => {
    const handleClick = () => {
        openMenu()
    }
    return (
        <FontAwesomeIcon
        onClick={handleClick}
        className={style.menu} icon={["fas", "bars"]} />
    )
};

export default MenuButton