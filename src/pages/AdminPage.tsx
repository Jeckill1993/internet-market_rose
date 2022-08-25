import React from 'react';
import AdminHeader from "../components/admin-components/AdminHeader/AdminHeader";
import AdminSidebar from "../components/admin-components/AdminSidebar/AdminSidebar";
import AdminContent from "../components/admin-components/AdminContent/AdminContent";
import {adminRouter} from "../modules/routers/RouterAdmin";
import {BrowserRouter, Routes} from "react-router-dom";

const AdminPage = () => {

    return (
        <div>
            {adminRouter}
            <AdminHeader/>
            <div>
                <AdminSidebar/>
                <AdminContent/>
            </div>
        </div>
    );
};

export default AdminPage;