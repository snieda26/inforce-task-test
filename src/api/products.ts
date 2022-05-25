import { instance } from './instance';
import { IProduct } from '../types/productInterface';
import { urls } from '../configs/urlConfig';

export const productsAPI = {
    getAll: () => instance.get<IProduct[]>(urls.products),
    edit: (id: number | undefined, data: IProduct) => instance.patch<IProduct>(`${urls.products}/${id}`, data),
    get: (id: string | undefined) => instance.get<IProduct>(`${urls.products}/${id}`),
    createNewProduct: (data: IProduct) => instance.post<IProduct>(urls.products, data),
    delete: (id: number | undefined | string) => instance.delete(`${urls.products}/${id}`)
}
