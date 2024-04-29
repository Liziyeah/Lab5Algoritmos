import './components';
import { Products, getProducts } from './services/get_products';
import { addObserver, appState } from './store/store';
import { Product } from './components/product';
import ShoppingCartItems from './components/ShoppingCartITems/ShoppingCartITems';

export class AppContainer extends HTMLElement {
    products: Products[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback(): Promise<void> {
        const data = await getProducts();
        this.products = data;

        this.render();
    }

    render(): void {
        if (this.shadowRoot) {
            const products = this.products.map(
                (product) => /*html*/ `
                <custom-product
                    pid=${product.id}
                    ptitle=${product.title}
                    price=${product.price}
                    description=${product.description}
                    category=${product.category}
                    image=${product.image}
                    rating=${product.rating.rate}
                ></custom-product>
            `
            );

            this.shadowRoot.innerHTML = /*html*/ `
                ${products.join('')}
            `;
        }
    }
}

customElements.define('app-container', AppContainer);
