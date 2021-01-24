import { Restaurant } from "../types/types";

export const sortRestaurantsByName = (
    restaurants: Restaurant[],
    ascending?: boolean
) => {
    return [...restaurants].sort((a, b) => {
        if (ascending) {
            return a.name < b.name ? 1 : -1;
        } else {
            return a.name > b.name ? 1 : -1;
        }
    });
};
