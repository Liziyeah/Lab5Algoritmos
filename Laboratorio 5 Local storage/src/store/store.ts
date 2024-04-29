import { reducer } from './reducer';
import { Products } from '../services/get_products';
import ShoppingCartItems from '../components/ShoppingCartITems/ShoppingCartITems';
import { Appstate } from '../types/products';

export let appState = {
    Products: [],
    ShoppingItems: [],
} as Appstate;

let observers: any[] = [];

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    appState = reducer(action, clone);
    observers.forEach((o) => o.render());
};

export const addObserver = (ref: any) => {
    observers.push(ref);
};
