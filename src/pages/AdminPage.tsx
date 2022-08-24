import React from 'react';
import { PanelItemInterface } from "../types/admin-type";

import AdminDashboard from "../components/admin-components/AdminDashboard/AdminDashboard";
import AdminCatalog from "../components/admin-components/AdminCatalog/AdminCatalog";
import AdminSales from "../components/admin-components/AdminSales/AdminSales";
import AdminClients from "../components/admin-components/AdminClients/AdminClients";
import AdminDelivery from "../components/admin-components/AdminDelivery/AdminDelivery";
import AdminSettings from "../components/admin-components/AdminSettings/AdminSettings";

import IconDashboard from "../assets/images/admin/icon-dashboard-admin.jpg";
import IconCatalog from "../assets/images/admin/icon-catalog-admin.jpg";
import IconSales from "../assets/images/admin/icon-sales-admin.jpg";
import IconClients from "../assets/images/admin/icon-clients-admin.jpg";
import IconDelivery from "../assets/images/admin/icon-delivery-admin.jpg";
import IconSettings from "../assets/images/admin/icon-settings-admin.jpg";

const AdminPage = () => {

    const panelComponents: PanelItemInterface[] = [
        {
            title: 'Dashboard',
            icon: IconDashboard,
            path: '/dashboard',
            component: <AdminDashboard/>
        },
        {
            title: 'Catalog',
            icon: IconCatalog,
            path: '/catalog',
            component: <AdminCatalog/>
        },
        {
            title: 'Sales',
            icon: IconSales,
            path: '/sales',
            component: <AdminSales/>
        },
        {
            title: 'Clients',
            icon: IconClients,
            path: '/clients',
            component: <AdminClients/>
        },
        {
            title: 'Delivery',
            icon: IconDelivery,
            path: '/settings',
            component: <AdminDelivery/>
        },
        {
            title: 'Settings',
            icon: IconSettings,
            path: '/settings',
            component: <AdminSettings/>
        },
    ]

    return (
        <div>
            admin page
        </div>
    );
};

export default AdminPage;