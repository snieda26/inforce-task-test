import { IProduct } from "../../types/productInterface"

export const setProductsAction = (payload: any) => {
    return { type: "SET_PRODUCTS", payload }
}


export const addNewProduct = (payload: IProduct) => {
    return { type: "ADD_NEW_PRODUCT", payload }
}

export const deleteProduct = (payload: number) => {
    return { type: "DELETE_PRODUCT", payload }
}

export const setProductAbout = (payload: IProduct) => {
    return { type: "SET_PRODUCT_ABOUT", payload }
}