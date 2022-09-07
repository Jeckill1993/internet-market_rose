import {
    MenuHeaderType,
    MenusStateTypes,
    updateFooterMenuActionType,
    updateHeaderMenuActionType
} from "../../types/menus-state-types";
import {
    CARDIGANS_ROUTE,
    CATALOG_ROUTE,
    DRESSES_ROUTE,
    SHORTS_ROUTE,
    SUITS_ROUTE,
    TROUSERS_ROUTE
} from "../../utils/const";


export const updateHeaderMenuAction = ({ isVisible, categories }: MenuHeaderType): updateHeaderMenuActionType => {
    return {
        type: 'UPDATE_HEADER_MENU_ACTION',
        isVisible,
        categories,
    }
}

export const updateFooterMenuAction = ({ isVisible, categories }: MenuHeaderType): updateFooterMenuActionType => {
    return {
        type: 'UPDATE_FOOTER_MENU_ACTION',
        isVisible,
        categories,
    }
}

type Action = updateHeaderMenuActionType | updateFooterMenuActionType;


const initialState: MenusStateTypes = {
    menuHeader: {
        isVisible: true,
        categories: [
            {
                name: 'Cardigans',
                link: CARDIGANS_ROUTE
            },
            {
                name: 'Dresses',
                link: DRESSES_ROUTE
            },
            {
                name: 'Shorts',
                link: SHORTS_ROUTE
            },
            {
                name: 'Suits',
                link: SUITS_ROUTE
            },
            {
                name: 'Trousers',
                link: TROUSERS_ROUTE
            },
            {
                name: 'Catalog',
                link: CATALOG_ROUTE
            },
        ]
    },
    menuFooter: {
        isVisible: true,
        title: 'Menu Footer',
        categories: [
            {
                name: 'Cardigans',
                link: CARDIGANS_ROUTE
            },
            {
                name: 'Dresses',
                link: DRESSES_ROUTE
            },
            {
                name: 'Shorts',
                link: SHORTS_ROUTE
            },
            {
                name: 'Suits',
                link: SUITS_ROUTE
            },
            {
                name: 'Trousers',
                link: TROUSERS_ROUTE
            },
            {
                name: 'Catalog',
                link: CATALOG_ROUTE
            },
        ]
    },
    infoMenuFooter: {
        isVisible: true,
        title: 'Info Menu Footer',
        categories: [
            {
                name: 'Cardigans',
                link: CARDIGANS_ROUTE
            },
            {
                name: 'Dresses',
                link: DRESSES_ROUTE
            },
            {
                name: 'Shorts',
                link: SHORTS_ROUTE
            },
            {
                name: 'Suits',
                link: SUITS_ROUTE
            },
            {
                name: 'Trousers',
                link: TROUSERS_ROUTE
            },
            {
                name: 'Catalog',
                link: CATALOG_ROUTE
            },
        ]
    },
}

function menusReducer (state = initialState, action: Action ): MenusStateTypes {
    switch (action.type) {
        default:
            return state;
    }
}

export default menusReducer;