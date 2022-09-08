import {CatalogProductsStateType} from "../../types/catalog-products-types";


const initialState: CatalogProductsStateType = {
    favorite: [
        {
            productId: '1',
            image: 'src',
            name: 'Test',
            description: [
                {
                    name: 'Test Attribute',
                    value: 'Testing'
                }
            ]
        }
    ],
}

function catalogReducer (state = initialState, action: any): CatalogProductsStateType {
    switch (action.type) {
        default:
            return state;
    }
}

export default catalogReducer;