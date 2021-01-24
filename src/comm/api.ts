import { Restaurant, RestaurantsApi } from "../types/types";

export const fetchRestaurants = async (): Promise<RestaurantsApi | undefined> => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
        );
        const data: RestaurantsApi = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
