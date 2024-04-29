import { Products } from '../services/get_products';
import { ShoppingCartItems } from '../services/get_products';

export type observer = { render: () => void } & HTMLElement;

export type Appstate = {
    Products: Products[];
    ShoppingItems: ShoppingCartItems[];
};

export enum Productsaction {
    'GET' = 'GET',
    'ADD' = 'ADD',
}

export interface GetProductsaction {
    action: Productsaction.GET;
    payload: Products[];
}

export interface GetShopingCartitems {
    action: Productsaction.ADD;
    payload: ShoppingCartItems[];
}

export type Actions = GetProductsaction | GetShopingCartitems;
