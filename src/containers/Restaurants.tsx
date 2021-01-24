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
import TiledIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import { sortRestaurantsByName } from "../utils/sort";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
    restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [searchString, setSearchString] = useState("");
    const [isAscending, setIsAscending] = useState(false);
    const [isTiled, setIsTiled] = useState(false);

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

    const handleChangeIsTiled = () => {
        setIsTiled((prevState) => !prevState);
    };

    return (
        <Grid container className={classes.root} justify="center">
            {matches ? null : <Grid item md={1} />}
            <Grid item sm={12} md={10}>
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
            </Grid>
            {matches ? null : (
                <Grid item md={1}>
                    <IconButton onClick={handleChangeIsTiled}>
                        {isTiled ? <ListIcon /> : <TiledIcon />}
                    </IconButton>
                </Grid>
            )}
            <Grid
                item
                sm={12}
                md={8}
                container
                justify={isTiled && hasRestaurants ? "flex-start" : "center"}
            >
                {hasRestaurants ? (
                    processedResult.map((restaurant) => (
                        <>
                            <Grid item sm={12} md={isTiled ? 4 : 7}>
                                <RestaurantCard
                                    key={restaurant.name}
                                    restaurant={restaurant}
                                />
                            </Grid>
                        </>
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
