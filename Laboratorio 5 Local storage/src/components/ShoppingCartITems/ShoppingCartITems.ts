export enum AttributeProduct {
    'image' = 'image',
    'title' = 'Title',
    'description' = 'description',
    'category' = 'category',
    'price' = 'price',
    'ratingcount' = 'ratingcount',
    'ratingrate' = 'ratingrate',
}

class ShoppingCartItems extends HTMLElement {
    image?: string;
    Title?: string;
    description?: string;
    category?: string;
    price?: number;
    ratingcount?: number;
    ratingrate?: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        const attrs: Record<AttributeProduct, null> = {
            image: null,
            Title: null,
            description: null,
            category: null,
            price: null,
            ratingcount: null,
            ratingrate: null,
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeProduct,
        oldValue: string,
        newValue: string
    ) {
        switch (propName) {
            case AttributeProduct.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            case AttributeProduct.ratingcount:
                this.ratingcount = newValue ? Number(newValue) : undefined;
                break;
            case AttributeProduct.ratingrate:
                this.ratingrate = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = /*html*/ `
              <div>
                <img class="image" src="${this.image}" alt="Producto">
                <h2>${this.title}</h2>
                <h3>Price: ${this.price}</h3>
                <button type="submit">Añadir al carrito de compras</button>
              </div>`;
        }
    }
}
export default ShoppingCartItems;
customElements.define('shopping-items', ShoppingCartItems);
