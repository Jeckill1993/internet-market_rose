import { RouteInterface } from "../../types/router-types";

import {Route} from "react-router-dom";

import MainPage from "../../pages/MainPage";
import CardigansPage from "../../pages/CardigansPage";
import CatalogPage from "../../pages/CatalogPage";
import DressesPage from "../../pages/DressesPage";
import ShortsPage from "../../pages/ShortsPage";
import SuitsPage from "../../pages/SuitsPage";
import TrousersPage from "../../pages/TrousersPage";
import AdminPage from "../../pages/AdminPage";

import {
    ADMIN_DASHBOARD_ROUTE,
    ADMIN_CATALOG_ROUTE,
    ADMIN_CATEGORIES_ROUTE,
    ADMIN_PRODUCTS_ROUTE,
    ADMIN_FILTERS_ROUTE,
    ADMIN_ATTRIBUTES_ROUTE,
    ADMIN_MAKERS_ROUTE,
    ADMIN_DOWNLOADS_ROUTE,
    ADMIN_REVIEWS_ROUTE,
    ADMIN_ARTICLES_ROUTE,
    ADMIN_SALES_ROUTE,
    ADMIN_ORDERS_ROUTE,
    ADMIN_RETURNS_ROUTE,
    ADMIN_CLIENTS_ROUTE,
    ADMIN_CLIENTS_LIST_ROUTE,
    ADMIN_CLIENTS_GROUPS_ROUTE,
    ADMIN_DELIVERY_ROUTE,
    ADMIN_NOVAPOSHTA_ROUTE,
    ADMIN_SYSTEM_ROUTE,
    ADMIN_SETTINGS_ROUTE,
    ADMIN_LOCALIZATION_ROUTE, NOT_FOUND_ROUTE
} from "../../utils/const";

import AdminDashboard from "../../components/admin-components/AdminDashboard/AdminDashboard";
import AdminCatalog from "../../components/admin-components/AdminCatalog/AdminCatalog";
import AdminCategories from "../../components/admin-components/AdminCatalog/AdminCategories/AdminCategories";
import AdminProducts from "../../components/admin-components/AdminCatalog/AdminProducts/AdminProducts";
import AdminFilters from "../../components/admin-components/AdminCatalog/AdminFilters/AdminFilters";
import AdminAttributes from "../../components/admin-components/AdminCatalog/AdminAttributes/AdminAttributes";
import AdminMakers from "../../components/admin-components/AdminCatalog/AdminMakers/AdminMakers";
import AdminDownloads from "../../components/admin-components/AdminCatalog/AdminDownloads/AdminDownloads";
import AdminReviews from "../../components/admin-components/AdminCatalog/AdminReviews/AdminReviews";
import AdminArticles from "../../components/admin-components/AdminCatalog/AdminArticles/AdminArticles";
import AdminSales from "../../components/admin-components/AdminSales/AdminSales";
import AdminOrders from "../../components/admin-components/AdminSales/AdminOrders/AdminOrders";
import AdminReturns from "../../components/admin-components/AdminSales/AdminReturns/AdminReturns";
import AdminClients from "../../components/admin-components/AdminClients/AdminClients";
import AdminClientsList from "../../components/admin-components/AdminClients/AdminClientsList/AdminClientsList";
import AdminClientsGroups from "../../components/admin-components/AdminClients/AdminClientsGroups/AdminClientsGroups";
import AdminDelivery from "../../components/admin-components/AdminDelivery/AdminDelivery";
import AdminNovaPoshta from "../../components/admin-components/AdminDelivery/AdminNovaPoshta";
import AdminSystem from "../../components/admin-components/AdminSystem/AdminSystem";
import AdminSettings from "../../components/admin-components/AdminSystem/AdminSettings/AdminSettings";
import AdminLocalization from "../../components/admin-components/AdminSystem/AdminLocalization/AdminLocalization";
import NotFound from "../../components/Content/NotFound";

export { userTest } from "../../moc(delete-later)";

export const adminDashboardRoute: RouteInterface = {
    path: ADMIN_DASHBOARD_ROUTE,
    page: <AdminDashboard/>,
}
export const adminCatalogRoute: RouteInterface = {
    path: ADMIN_CATALOG_ROUTE,
    page: <AdminCatalog/>,
}
export const adminCategoriesRoute: RouteInterface = {
    path: ADMIN_CATEGORIES_ROUTE,
    page: <AdminCategories/>,
}
export const adminProductsRoute: RouteInterface = {
    path: ADMIN_PRODUCTS_ROUTE,
    page: <AdminProducts/>,
}
export const adminFiltersRoute: RouteInterface = {
    path: ADMIN_FILTERS_ROUTE,
    page: <AdminFilters/>,
}
export const adminAttributesRoute: RouteInterface = {
    path: ADMIN_ATTRIBUTES_ROUTE,
    page: <AdminAttributes/>,
}
export const adminMakersRoute: RouteInterface = {
    path: ADMIN_MAKERS_ROUTE,
    page: <AdminMakers/>,
}
export const adminDownloadsRoute: RouteInterface = {
    path: ADMIN_DOWNLOADS_ROUTE,
    page: <AdminDownloads/>,
}
export const adminReviewsRoute: RouteInterface = {
    path: ADMIN_REVIEWS_ROUTE,
    page: <AdminReviews/>,
}
export const adminArticlesRoute: RouteInterface = {
    path: ADMIN_ARTICLES_ROUTE,
    page: <AdminArticles/>,
}
export const adminSalesRoute: RouteInterface = {
    path: ADMIN_SALES_ROUTE,
    page: <AdminSales/>,
}
export const adminOrdersRoute: RouteInterface = {
    path: ADMIN_ORDERS_ROUTE,
    page: <AdminOrders/>,
}
export const adminReturnsRoute: RouteInterface = {
    path: ADMIN_RETURNS_ROUTE,
    page: <AdminReturns/>,
}
export const adminClientsRoute: RouteInterface = {
    path: ADMIN_CLIENTS_ROUTE,
    page: <AdminClients/>,
}
export const adminClientsListRoute: RouteInterface = {
    path: ADMIN_CLIENTS_LIST_ROUTE,
    page: <AdminClientsList/>,
}
export const adminClientsGroupsRoute: RouteInterface = {
    path: ADMIN_CLIENTS_GROUPS_ROUTE,
    page: <AdminClientsGroups/>,
}
export const adminDeliveryRoute: RouteInterface = {
    path: ADMIN_DELIVERY_ROUTE,
    page: <AdminDelivery/>,
}
export const adminNovaPoshtaRoute: RouteInterface = {
    path: ADMIN_NOVAPOSHTA_ROUTE,
    page: <AdminNovaPoshta/>,
}
export const adminSystemRoute: RouteInterface = {
    path: ADMIN_SYSTEM_ROUTE,
    page: <AdminSystem/>,
}
export const adminSettingsRoute: RouteInterface = {
    path: ADMIN_SETTINGS_ROUTE,
    page: <AdminSettings/>,
}
export const adminLocalizationRoute: RouteInterface = {
    path: ADMIN_LOCALIZATION_ROUTE,
    page: <AdminLocalization/>,
}
export const notFoundPageRoute: RouteInterface = {
    path: NOT_FOUND_ROUTE,
    page: <NotFound/>,
}

const routes: RouteInterface[] = [
    adminDashboardRoute, adminCatalogRoute, adminCategoriesRoute, adminProductsRoute, adminFiltersRoute,
    adminAttributesRoute, adminMakersRoute, adminDownloadsRoute, adminReviewsRoute, adminArticlesRoute,
    adminSalesRoute, adminOrdersRoute, adminReturnsRoute, adminReturnsRoute, adminClientsRoute,
    adminClientsListRoute, adminClientsGroupsRoute, adminDeliveryRoute, adminNovaPoshtaRoute, adminSystemRoute,
    adminSettingsRoute, adminLocalizationRoute, notFoundPageRoute
]

export const adminRouter = routes.map((route: RouteInterface) => {
    const { path, page, id } = route;

    return <Route key={ id ? id : path} path={path} element={page}/>;
})