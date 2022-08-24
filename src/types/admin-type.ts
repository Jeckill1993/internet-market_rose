import React from "react";

export interface PanelItemInterface {
    title: string,
    icon: React.ReactNode | string,
    path?: string,
    component: React.ReactNode,
    subItems?: PanelSubItemInterface[],
}

export interface PanelSubItemInterface {
    path: string,
    component: React.ReactNode,
}