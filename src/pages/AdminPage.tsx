import React from 'react';
import AdminHeader from "../components/admin-components/AdminHeader/AdminHeader";
import AdminSidebar from "../components/admin-components/AdminSidebar/AdminSidebar";
import AdminContent from "../components/admin-components/AdminContent/AdminContent";

const AdminPage = () => {

    return (
        <div>
            <AdminHeader/>
            <div className="row">
                <AdminSidebar/>
                <AdminContent/>
            </div>
        </div>
    );
};

export default AdminPage;