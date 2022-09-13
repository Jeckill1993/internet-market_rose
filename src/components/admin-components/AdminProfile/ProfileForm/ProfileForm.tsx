import React from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    const isError = true;

    return (
        <div className={classes.form}>
            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>Login</label>
                <input type="text" className={classes['form-fieldset__input']} value={'test'}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>
            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>First Name</label>
                <input type="text" className={classes['form-fieldset__input']} value={'test'}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>
            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>Last Name</label>
                <input type="text" className={classes['form-fieldset__input']} value={'test'}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>
            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>E-Mail</label>
                <input type="email" className={classes['form-fieldset__input']} value={'test'}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>

            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>Password</label>
                <input type="password" className={classes['form-fieldset__input']}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>
            <div className={classes['form-fieldset']}>
                <label className={classes['form-fieldset__label']}>Confirm password</label>
                <input type="password" className={classes['form-fieldset__input']}/>
                { isError ? <span className={classes['form-fieldset__error-message']}></span> : '' }
            </div>
        </div>
    );
};

export default ProfileForm;