import React from "react";

export interface PanelItemInterface {
    id: string,
    title: string,
    icon: React.ReactNode | string,
    path?: string,
    component: React.ReactNode,
    subItems?: PanelSubItemInterface[],
}

export interface PanelSubItemInterface {
    id: string,
    path: string,
    component: React.ReactNode,
    title: string,
}