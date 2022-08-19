import {RouteInterface} from "../types/router-types";
import MainPage from "../pages/MainPage";
import CardigansPage from "../pages/CardigansPage";

export const MAIN_ROUTE: RouteInterface = {
    path: '/',
    page: <MainPage/>,
}

export const CARDIGANS_ROUTE: RouteInterface = {
    path: '/cardigans',
    page: <CardigansPage/>,
}