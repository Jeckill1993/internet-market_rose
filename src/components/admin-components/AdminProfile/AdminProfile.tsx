import React from 'react';
import ProfileForm from "./ProfileForm/ProfileForm";

import classes from './AdminProfile.module.css';
import CartControlButton from "../CartControlButton/CartControlButton";
import CartStatus from "../CartStatus/CartStatus";

const AdminProfile = () => {
    return (
        <div className={classes.profile}>
            <div className="row">
                <h1 className={classes.profile__title}>Profile</h1>
                <CartControlButton />
            </div>
            <CartStatus />
            <ProfileForm />
        </div>
    );
};

export default AdminProfile;