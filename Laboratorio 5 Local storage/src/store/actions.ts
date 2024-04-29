import { getProducts } from '../services/get_products';
import {
    GetProductsaction,
    Productsaction,
    GetShopingCartitems,
} from '../types/products';

export const getProductsData = async (): Promise<GetProductsaction> => {
    const data = await getProducts();

    return {
        action: Productsaction.GET,
        payload: data,
    };
};

export const AddShoppingCartitems = (array: any, currentFavorites: any) => {
    const updatedFavorites = currentFavorites.concat(array);
    return {
        type: Productsaction.ADD,
        payload: updatedFavorites,
    };
};
