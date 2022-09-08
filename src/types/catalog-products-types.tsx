

export interface CatalogProductsStateType {
    favorite: FavoriteProductType[];
    basket: BasketProductType[];
}

export interface FavoriteProductType {
    productId: string;
    image: string;
    name: string;
    description: AttributeProductType[];
}

export interface BasketProductType {
    productId: string;
    image: string;
    name: string;
    description: AttributeProductType[];
    amount: string;
    price: string;
}

export interface AttributeProductType {
    name: string;
    value: string;
}