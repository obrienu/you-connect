import style from './profile.card.module.scss';
import React, { useContext } from 'react';
import { StateContext } from '../../context/app.context';

const ProfileCard = () => {

    const { user: { profile }, dispatch } = useContext(StateContext);
    return (
        <div>

        </div>
    );
}

export default ProfileCard;
