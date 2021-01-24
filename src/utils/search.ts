import { Restaurant } from "../types/types";

export const filterRestaurantsByName = (
    restaurants: Restaurant[],
    searchString: string
) => {
    return restaurants.filter((r) =>
        r.name.toLowerCase().includes(searchString.toLowerCase())
    );
};
