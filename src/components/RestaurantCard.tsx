import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Restaurant } from "../types/types";

interface Props {
    restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
    const classes = useStyles();
    const { name, image, city, tags } = restaurant;

    const verticalDivider = (
        <Typography variant="subtitle2" color="textSecondary">
            &nbsp;|&nbsp;
        </Typography>
    );

    return (
        <Card className={classes.root}>
            <CardHeader title={name} />
            <CardMedia component="img" height={200} src={image} title={name} />
            <CardContent className={classes.content}>
                <Typography variant="subtitle2" color="textSecondary">
                    {city}
                </Typography>
                {verticalDivider}
                <Typography variant="subtitle2">{tags.toString()}</Typography>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: theme.spacing(3),
        },
        content: {
            textAlign: "left",
            display: "flex",
        },
    })
);

export default RestaurantCard;
