import { IProduct } from '../../types/productInterface';
// import { IComment } from '../../types/commentInterface';

interface IProductsState {
    products: IProduct[];
    product: IProduct | null;
};


const initialState: IProductsState = {
    products: [],
    product: null,
};

export const productsReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "ADD_NEW_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        case "DELETE_PRODUCT":
            const products = state.products?.filter((product: IProduct) => {
                return product.id !== action.payload
            })
            return {
                ...state,
                products: products
            }
        case "SET_PRODUCT_ABOUT":
            debugger
            return {
                ...state,
                product: action.payload
            }

        default:
            return state
    }
}