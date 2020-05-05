import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import style from './link.module.scss';


const Links = (props) => {
    const { icon, pagePath, dropdownMenu } = props;

    const handleClick = () => {
       if(typeof dropdownMenu === 'function'){
        dropdownMenu();
       }
    }
    return (
        <>
            <Link href={pagePath}>
                <a 
                onMouseEnter={handleClick}
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