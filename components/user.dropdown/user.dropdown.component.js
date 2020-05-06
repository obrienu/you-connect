import style from './user.dropdown.module.scss';
import Links from '../link/link.component';

const signedInLinks = (
    <>
        <Links icon={["far","user-circle" ]}pagePath="/">
                profile
        </Links>
        <Links icon={["far", "comments"]} pagePath="/">
                messages
        </Links>
        <Links icon="images" pagePath="/">
                gallery
        </Links>
        <Links icon="business-time" pagePath="/">
                services
        </Links>
        <Links icon={["fas", "star-half-alt"]} pagePath="/">
                reviews
        </Links>
        <Links icon={["fas", "sign-out-alt"]} pagePath="">
                sign out
        </Links>
    </>
)
const signedOutLinks = (
    <>
        <Links icon="sign-in-alt" pagePath="/sign-in">
            sign in
        </Links>
        <Links icon="registered" pagePath="/register">
            register
        </Links>
    </>
)

const UserDropdown = (props) => {
    const {isDown, dropdownMenu} = props;
    const {dropdown, animateDropdown} = style;

    const handleClick = () => {
        if(typeof dropdownMenu === 'function'){
            dropdownMenu();
        }
     }
     
    return (
        <nav
        onMouseLeave={handleClick}
        className={ !isDown ? dropdown : `${dropdown} ${animateDropdown}`}
         >
            {signedOutLinks}
            {signedInLinks}
        </nav>
    )
};

export default UserDropdown