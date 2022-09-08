

export interface CatalogProductsStateType {
    favorite: FavoriteProductType[]
}

export interface FavoriteProductType {
    productId: string;
    image: string;
    name: string;
    description: AttributeProductType[];
}

export interface AttributeProductType {
    name: string;
    value: string;
}