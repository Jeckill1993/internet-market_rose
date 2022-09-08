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
    basket: [
        {
            productId: '1',
            image: 'src',
            name: 'Test',
            description: [
                {
                    name: 'Test Attribute',
                    value: 'Testing'
                }
            ],
            amount: '1',
            price: '1001',
        }
    ]
}

function catalogReducer (state = initialState, action: any): CatalogProductsStateType {
    switch (action.type) {
        default:
            return state;
    }
}

export default catalogReducer;