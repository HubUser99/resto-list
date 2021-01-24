import {
    CircularProgress,
    createStyles,
    Grid,
    makeStyles,
} from "@material-ui/core";
import RestaurantCard from "../components/RestaurantCard";
import { Restaurant } from "../types/types";

interface Props {
    restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
    const classes = useStyles();

    const hasRestaurants = restaurants.length > 0;

    return hasRestaurants ? (
        <Grid container className={classes.root}>
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
    ) : (
        <CircularProgress />
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(8),
        },
    })
);

export default Restaurants;
