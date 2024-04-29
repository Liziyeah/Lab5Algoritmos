import { Product } from '../components/product';
import {
    Actions,
    Appstate,
    Productsaction,
    GetProductsaction,
} from '../types/products';
import { appState } from './store';

export const reducer = (
    currentAction: Actions,
    currentState: Appstate
): Appstate => {
    const { action, payload } = currentAction;
    switch (action) {
        case Productsaction.GET:
            return {
                ...currentState,
                Products: payload,
            };
            break;
        case Productsaction.ADD:
            return {
                ...currentState,
                ShoppingItems: payload,
            };
            break;
        default:
            return currentState;
            break;
    }
};
