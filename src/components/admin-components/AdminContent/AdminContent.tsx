import React from 'react';
import {Outlet} from "react-router-dom";

import classes from './AdminContent.module.css';

const AdminContent = () => {
    return (
        <div className={classes.content}>
            <Outlet />
        </div>
    );
};

export default AdminContent;