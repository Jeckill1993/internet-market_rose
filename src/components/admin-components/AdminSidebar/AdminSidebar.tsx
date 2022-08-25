import React from 'react';

import {PanelItemInterface} from "../../../types/admin-type";

import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminCatalog from "../AdminCatalog/AdminCatalog";
import AdminSales from "../AdminSales/AdminSales";
import AdminClients from "../AdminClients/AdminClients";
import AdminDelivery from "../AdminDelivery/AdminDelivery";
import AdminSystem from "../AdminSystem/AdminSystem";
import AdminList from "../AdminList/AdminList";
import PanelItem from "../PanelItem/PanelItem";
import AdminCategories from "../AdminCatalog/AdminCategories/AdminCategories";
import AdminProducts from "../AdminCatalog/AdminProducts/AdminProducts";
import AdminFilters from "../AdminCatalog/AdminFilters/AdminFilters";
import AdminAttributes from "../AdminCatalog/AdminAttributes/AdminAttributes";
import AdminMakers from "../AdminCatalog/AdminMakers/AdminMakers";
import AdminDownloads from "../AdminCatalog/AdminDownloads/AdminDownloads";
import AdminReviews from "../AdminCatalog/AdminReviews/AdminReviews";
import AdminArticles from "../AdminCatalog/AdminArticles/AdminArticles";
import AdminOrders from "../AdminSales/AdminOrders/AdminOrders";
import AdminReturns from "../AdminSales/AdminReturns/AdminReturns";
import AdminClientsList from "../AdminClients/AdminClientsList/AdminClientsList";
import AdminClientsGroups from "../AdminClients/AdminClientsGroups/AdminClientsGroups";
import AdminNovaPoshta from "../AdminDelivery/AdminNovaPoshta";
import AdminSettings from "../AdminSystem/AdminSettings/AdminSettings";
import AdminLocalization from "../AdminSystem/AdminLocalization/AdminLocalization";

import IconDashboard from "../../../assets/images/admin/icon-dashboard-admin.jpg";
import IconCatalog from "../../../assets/images/admin/icon-catalog-admin.jpg";
import IconSales from "../../../assets/images/admin/icon-sales-admin.jpg";
import IconClients from "../../../assets/images/admin/icon-clients-admin.jpg";
import IconDelivery from "../../../assets/images/admin/icon-delivery-admin.jpg";
import IconSettings from "../../../assets/images/admin/icon-settings-admin.jpg";

import {
    ADMIN_ARTICLES_ROUTE,
    ADMIN_ATTRIBUTES_ROUTE,
    ADMIN_CATALOG_ROUTE,
    ADMIN_CATEGORIES_ROUTE, ADMIN_CLIENTS_GROUPS_ROUTE, ADMIN_CLIENTS_LIST_ROUTE,
    ADMIN_CLIENTS_ROUTE,
    ADMIN_DASHBOARD_ROUTE,
    ADMIN_DELIVERY_ROUTE, ADMIN_DOWNLOADS_ROUTE,
    ADMIN_FILTERS_ROUTE, ADMIN_LOCALIZATION_ROUTE, ADMIN_MAKERS_ROUTE, ADMIN_NOVAPOSHTA_ROUTE, ADMIN_ORDERS_ROUTE,
    ADMIN_PRODUCTS_ROUTE, ADMIN_RETURNS_ROUTE, ADMIN_REVIEWS_ROUTE,
    ADMIN_SALES_ROUTE, ADMIN_SETTINGS_ROUTE,
    ADMIN_SYSTEM_ROUTE,

} from "../../../utils/const";

const AdminSidebar = () => {

    const panelComponents: PanelItemInterface[] = [
        {
            id: 'dashboard-panel',
            title: 'Dashboard',
            icon: IconDashboard,
            path: ADMIN_DASHBOARD_ROUTE,
            component: <AdminDashboard/>,
        },
        {
            id: 'catalog-panel',
            title: 'Catalog',
            icon: IconCatalog,
            path: ADMIN_CATALOG_ROUTE,
            component: <AdminCatalog/>,
            subItems: [
                {
                    id: 'catalog-panel-categories',
                    title: 'Categories',
                    path: ADMIN_CATEGORIES_ROUTE,
                    component: <AdminCategories/>
                },
                {
                    id: 'catalog-panel-products',
                    title: 'Products',
                    path: ADMIN_PRODUCTS_ROUTE,
                    component: <AdminProducts/>
                },
                {
                    id: 'catalog-panel-filters',
                    title: 'Filters',
                    path: ADMIN_FILTERS_ROUTE,
                    component: <AdminFilters/>
                },
                {
                    id: 'catalog-panel-attributes',
                    title: 'Attributes',
                    path: ADMIN_ATTRIBUTES_ROUTE,
                    component: <AdminAttributes/>
                },
                {
                    id: 'catalog-panel-makers',
                    title: 'Makers',
                    path: ADMIN_MAKERS_ROUTE,
                    component: <AdminMakers/>
                },
                {
                    id: 'catalog-panel-downloads',
                    title: 'Downloads',
                    path: ADMIN_DOWNLOADS_ROUTE,
                    component: <AdminDownloads/>
                },
                {
                    id: 'catalog-panel-reviews',
                    title: 'Reviews',
                    path: ADMIN_REVIEWS_ROUTE,
                    component: <AdminReviews/>
                },
                {
                    id: 'catalog-panel-articles',
                    title: 'Articles',
                    path: ADMIN_ARTICLES_ROUTE,
                    component: <AdminArticles/>
                }
            ]
        },
        {
            id: 'sales-panel',
            title: 'Sales',
            icon: IconSales,
            path: ADMIN_SALES_ROUTE,
            component: <AdminSales/>,
            subItems: [
                {
                    id: 'sales-panel-orders',
                    title: 'Orders',
                    path: ADMIN_ORDERS_ROUTE,
                    component: <AdminOrders/>
                },
                {
                    id: 'sales-panel-returns',
                    title: 'Returns',
                    path: ADMIN_RETURNS_ROUTE,
                    component: <AdminReturns/>
                },
            ]
        },
        {
            id: 'clients-panel',
            title: 'Clients',
            icon: IconClients,
            path: ADMIN_CLIENTS_ROUTE,
            component: <AdminClients/>,
            subItems: [
                {
                    id: 'clients-panel-list',
                    title: 'List of Clients',
                    path: ADMIN_CLIENTS_LIST_ROUTE,
                    component: <AdminClientsList/>
                },
                {
                    id: 'clients-panel-group',
                    title: 'Groups of Clients',
                    path: ADMIN_CLIENTS_GROUPS_ROUTE,
                    component: <AdminClientsGroups/>
                },
            ]
        },
        {
            id: 'delivery-panel',
            title: 'Delivery',
            icon: IconDelivery,
            path: ADMIN_DELIVERY_ROUTE,
            component: <AdminDelivery/>,
            subItems: [
                {
                    id: 'delivery-panel-nova-poshta',
                    title: 'Nova Poshta',
                    path: ADMIN_NOVAPOSHTA_ROUTE,
                    component: <AdminNovaPoshta/>
                },
            ]
        },
        {
            id: 'system-panel',
            title: 'System',
            icon: IconSettings,
            path: ADMIN_SYSTEM_ROUTE,
            component: <AdminSystem/>,
            subItems: [
                {
                    id: 'system-panel-settings',
                    title: 'Settings',
                    path: ADMIN_SETTINGS_ROUTE,
                    component: <AdminSettings/>
                },
                {
                    id: 'system-panel-localization',
                    title: 'Localization',
                    path: ADMIN_LOCALIZATION_ROUTE,
                    component: <AdminLocalization/>
                },
            ]
        },
    ]

    const renderItem = (item: PanelItemInterface) => <PanelItem key={item.id} panelItem={item} />

    return (
        <div>
            <AdminList items={panelComponents} renderItem={renderItem}/>
        </div>
    );
};

export default AdminSidebar;