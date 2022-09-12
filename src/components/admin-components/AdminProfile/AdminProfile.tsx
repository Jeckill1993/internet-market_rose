import React from 'react';
import ProfileForm from "./ProfileForm/ProfileForm";

import classes from './AdminProfile.module.css';
import CartControlButton from "../CartControlButton/CartControlButton";
import CartStatus from "../CartStatus/CartStatus";

const AdminProfile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes['profile-title']}>
                <div className="row row_space-between">
                    <h1 className={classes['profile-title__title']}>Profile</h1>
                    <CartControlButton />
                </div>
            </div>
            <CartStatus />
            <ProfileForm />
        </div>
    );
};

export default AdminProfile;