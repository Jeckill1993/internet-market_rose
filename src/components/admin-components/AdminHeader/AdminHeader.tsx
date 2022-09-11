import React from 'react';

import classes from './AdminHeader.module.css';
import {Link} from "react-router-dom";
import {ADMIN_PROFILE_ROUTE} from "../../../utils/const";

import IconExitAdmin from '../../../assets/images/admin/icon-exit-admin.png';
import IconUser from '../../../assets/images/admin/icon-user.png';

const AdminHeader = () => {
    return (
        <header className={classes.header}>
            <div className="row row_space-between">
                <Link to={'/'} className={classes.header__logo}>ROZE</Link>
                <div className={classes['header-right-block']}>
                    <Link to={ADMIN_PROFILE_ROUTE} className={classes['header-link']}>
                        <img src={IconUser} className={classes['header-link__icon']} alt="open admin profile"/>
                        <span className={classes['header-link__text']}>Your Profile</span>
                    </Link>
                    <div className={classes['header-exit']}>
                        <img src={IconExitAdmin} className={classes['header-exit__icon']} alt="exit from admin"/>
                        <span className={classes['header-exit__text']}>Exit</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;