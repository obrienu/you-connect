import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import style from './link.module.scss';


const Links = (props) => {
    const { icon, pagePath, dropdownMenu, isMobile, closeMenu } = props;

    const handleClick = () => {
       if(typeof dropdownMenu === 'function'){
        return dropdownMenu();
       }
       if(isMobile){
           return closeMenu();
       }
    }
    const handleHover = () => {
       if(typeof dropdownMenu === 'function'){
        return dropdownMenu();
       }
    }
    return (
        <>
            <Link href={pagePath}>
                <a 
                onMouseEnter={handleHover}
                onClick={handleClick}
                className={style.link}
                >
                    <FontAwesomeIcon className={style.icon} icon={icon}/>
                    <span className={style.name}>{props.children.toUpperCase()}</span>
                </a>
            </Link>
        </>
    )
};

export default Links;