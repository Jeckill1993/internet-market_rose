import React from 'react';
import ProfileForm from "./ProfileForm/ProfileForm";

import classes from './AdminProfile.module.css';

const AdminProfile = () => {
    return (
        <div className={classes.profile}>
            <div className="row">
                <h1 className={classes.profile__title}>Profile</h1>
                <div className={classes['profile-control']}>
                    <div className={classes['profile-save']}></div>
                    <div className={classes['profile-cancel']}></div>
                </div>
            </div>
            <p className={classes.profile__subtitle}>Editing</p>
            <ProfileForm />
        </div>
    );
};

export default AdminProfile;