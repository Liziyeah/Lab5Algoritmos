import { reducer } from './reducer';
import { Products } from '../services/get_products';
import ShoppingCartItems from '../components/ShoppingCartITems/ShoppingCartITems';

export let appState = {
    Products: [] as Products[],
    ShoppingCartItems: [] as ShoppingCartItems[],
};

let observers: any[] = [];

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    appState = reducer(action, clone);
    observers.forEach((o) => o.render());
};

export const addObserver = (ref: any) => {
    observers.push(ref);
};
