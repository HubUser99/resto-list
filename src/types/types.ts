export interface RestaurantsApi {
    restaurants: Restaurant[];
}

export interface Restaurant {
    blurhash: string;
    city: string;
    currency: string;
    delivery_price: number;
    description: string;
    image: string;
    location: [number, number];
    name: string;
    online: boolean;
    tags: Array<string>;
}
