import style from './logo.header.module.scss';
import Logo from '../logo/logo.component';
import MenuButton from '../menu.button/menu.button.component';


const LogoHeader = (props) => {
    const { openMenu } = props;
    return (
        <div className={style.topHeader}>
            <MenuButton openMenu={openMenu} />
            <Logo />
        </div>

    )
};

export default LogoHeader;