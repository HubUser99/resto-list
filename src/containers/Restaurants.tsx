import {
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Restaurant } from "../types/types";
import { filterRestaurantsByName } from "../utils/search";
import { debounce } from "lodash";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { sortRestaurantsByName } from "../utils/sort";

interface Props {
    restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
    const classes = useStyles();

    const [searchString, setSearchString] = useState("");
    const [isAscending, setIsAscending] = useState(false);

    const filteredResult = filterRestaurantsByName(restaurants, searchString);
    const processedResult = sortRestaurantsByName(filteredResult, isAscending);

    const hasRestaurants = processedResult.length > 0;

    const delayedHandleChange = debounce(
        (value) => setSearchString(value),
        200
    );

    const handleChangeSearchString = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = event.target;
        delayedHandleChange(value);
    };

    const handleChangeOrder = () => {
        setIsAscending((prevState) => !prevState);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item sm={false} md={3} />
            <Grid item sm={12} md={6}>
                <div>
                    <TextField
                        label="Search"
                        onChange={handleChangeSearchString}
                    />
                    <IconButton
                        className={classes.sortButton}
                        onClick={handleChangeOrder}
                    >
                        {isAscending ? (
                            <ArrowUpwardIcon />
                        ) : (
                            <ArrowDownwardIcon />
                        )}
                    </IconButton>
                </div>
                {hasRestaurants ? (
                    processedResult.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.name}
                            restaurant={restaurant}
                        />
                    ))
                ) : (
                    <Typography
                        variant="h5"
                        color="textSecondary"
                        className={classes.noResultsText}
                    >
                        No results
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(10),
        },
        noResultsText: {
            marginTop: theme.spacing(10),
        },
        sortButton: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
        },
    })
);

export default Restaurants;
