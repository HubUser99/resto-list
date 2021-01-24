import { Grid } from "@material-ui/core";
import RestaurantCard from "../components/RestaurantCard";
import { Restaurant } from "../types/types";

interface Props {
    restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
    const hasRestaurants = restaurants.length > 0;

    return hasRestaurants ? (
        <Grid container>
            <Grid item sm={false} md={3} />
            <Grid item sm={12} md={6}>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.name}
                        restaurant={restaurant}
                    />
                ))}
            </Grid>
        </Grid>
    ) : null;
};

export default Restaurants;
