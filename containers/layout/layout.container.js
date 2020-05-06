import Header from '../header/header.container';
import style from './layout.module.scss';

const Layout = (props) => {
return (
    <>
    <Header/>
    <main className={style.layout}>
    {props.children}
    </main>
    </>
)
};

export default Layout;
