import style from './auth.card.module.scss';

const Card = (props) => {
    return (
        <div className={style.card}>
            {props.children}
        </div>
    )
}

export default Card;
