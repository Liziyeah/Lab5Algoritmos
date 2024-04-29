export enum Attributes {
    pid = 'pid',
    ptitle = 'ptitle',
    price = 'price',
    description = 'description',
    category = 'category',
    image = 'image',
    rating = 'rating',
}

export class Product extends HTMLElement {
    pid?: number;
    image?: string;
    ptitle?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return [
            'pid',
            'image',
            'ptitle',
            'description',
            'category',
            'price',
            'rating',
        ];
    }

    attributeChangedCallback(
        name: Attributes,
        oldValue: unknown,
        newValue: Product[Attributes]
    ) {
        this[name] = newValue as undefined;

        this.render();
    }

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = /*html*/ `
                <div>
                    <img src="${this.image}" alt="Producto de la tienda" width="100">
                    <h1>${this.ptitle}</h1>
                    <p>${this.description}</p>
                    <ul>
                        <li>${this.category}</li>
                        <li>${this.price}</li>
                        <li>${this.rating}</li>
                    </ul>
                    <button id = "save">Guardar producto</button>
                </div>

            `;
        }
    }
}

customElements.define('custom-product', Product);
