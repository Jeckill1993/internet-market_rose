import React from 'react';
import { PanelItemInterface } from "../types/admin-type";
import AdminContentDashboard from "../components/admin-components/admin-content-components/AdminContentDashboard/AdminContentDashboard";

const AdminPage = () => {

    const panelComponents: PanelItemInterface[] = [
        {
            title: 'Panel state',
            icon: '',
            path: '/dashboard',
            component: <AdminContentDashboard/>
        },
        {
            title: 'Catalog',
            icon: '',
            path: '/dashboard',
            component: <AdminContentDashboard/>
        },

    ]

    return (
        <div>
            admin page
        </div>
    );
};

export default AdminPage;