const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export type Products = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export interface ShoppingCartItems {
    image: string;
    title: string;
    price: number;
}

export async function getProducts(): Promise<Products[]> {
    try {
        const response = await fetch(PRODUCTS_URL);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);

        return [];
    }
}
