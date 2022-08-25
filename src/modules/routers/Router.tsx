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
    ADMIN_ROUTE,
    CARDIGANS_ROUTE,
    CATALOG_ROUTE,
    DRESSES_ROUTE,
    MAIN_ROUTE,
    SHORTS_ROUTE,
    SUITS_ROUTE,
    TROUSERS_ROUTE
} from "../../utils/const";
import {userTest} from "../../moc(delete-later)";

export const adminRoute: RouteInterface = {
    path: ADMIN_ROUTE,
    page: <AdminPage/>,
    role: 'admin',
}
export const mainRoute: RouteInterface = {
    path: MAIN_ROUTE,
    page: <MainPage/>,
}
export const cardigansRoute: RouteInterface = {
    path: CARDIGANS_ROUTE,
    page: <CardigansPage/>,
}
export const catalogRoute: RouteInterface = {
    path: CATALOG_ROUTE,
    page: <CatalogPage/>,
}
export const dressesRoute: RouteInterface = {
    path: DRESSES_ROUTE,
    page: <DressesPage/>,
}
export const shortsRoute: RouteInterface = {
    path: SHORTS_ROUTE,
    page: <ShortsPage/>,
}
export const suitsRoute: RouteInterface = {
    path: SUITS_ROUTE,
    page: <SuitsPage/>,
}
export const trousersRoute: RouteInterface = {
    path: TROUSERS_ROUTE,
    page: <TrousersPage/>,
}

const routes: RouteInterface[] = [
    adminRoute, mainRoute, cardigansRoute, catalogRoute, dressesRoute, shortsRoute, suitsRoute, trousersRoute
]

export const router = routes.map((route: RouteInterface) => {
    const { path, role, page } = route;

    if (role && role !== userTest.role) return;

    return <Route key={path} path={path} element={page}/>;
})