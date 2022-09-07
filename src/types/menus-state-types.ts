
export interface MenusStateTypes {
    menuHeader: MenuHeaderType;
    menuFooter: MenuFooterType;
    infoMenuFooter: InfoFooterType;
}

export interface MenuHeaderType {
    isVisible: boolean;
    categories: MenuItemType[];
}

export interface MenuFooterType {
    isVisible: boolean;
    title: string;
    categories: MenuItemType[];
}

export interface InfoFooterType {
    isVisible: boolean;
    title: string;
    categories: MenuItemType[];
}

export interface MenuItemType {
    name: string;
    link: string;
    subCategories?: MenuSubItemType[];
}

export interface MenuSubItemType {
    name: string;
    link: string;
}

/* ACTIONS */
export interface updateHeaderMenuActionType {
    type: 'UPDATE_HEADER_MENU_ACTION';
    categories: MenuItemType[];
    isVisible: boolean;
}

export interface updateFooterMenuActionType {
    type: 'UPDATE_FOOTER_MENU_ACTION';
    categories: MenuItemType[];
    isVisible: boolean;
}