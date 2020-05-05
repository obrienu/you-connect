import style from './logo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const Logo = () => {
    return(
        <div>
            <FontAwesomeIcon className={style.icon} icon="hands-helping" />
            <span className={style.first}>You</span> <span className={style.second}> Connect</span>
        </div>
    )
};

export default Logo