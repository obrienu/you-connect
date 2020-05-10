import style from './logo.header.module.scss';
import Logo from '../logo/logo.component';
import MenuButton from '../menu.button/menu.button.component';


const LogoHeader = () => {
    return (
        <div className={style.topHeader}>
            <MenuButton />
            <Logo />
        </div>

    )
};

export default LogoHeader;