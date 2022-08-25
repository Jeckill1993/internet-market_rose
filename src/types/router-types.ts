import React from "react";

export interface RouteInterface {
    path: string,
    page: React.ReactNode,
    role?: string,
    id?: string,
}