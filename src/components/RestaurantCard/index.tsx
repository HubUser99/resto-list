import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    createStyles,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { useState } from "react";
import { Restaurant } from "../../types/types";
import { parsePriceToString } from "../../utils/currency";
import CardCollapsedContent from "./CardCollapsedContent";
import CardImage from "./CardImage";

interface Props {
    restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
    const classes = useStyles();
    const {
        name,
        image,
        city,
        tags,
        description,
        delivery_price,
        currency,
        online,
    } = restaurant;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const VerticalDivider = () => (
        <Typography variant="subtitle2" color="textSecondary">
            &nbsp;|&nbsp;
        </Typography>
    );

    return (
        <Card className={classes.root}>
            <CardHeader title={name} />
            <CardImage src={image} name={name} online={online} />
            <div className={classes.previewContainer}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" color="textSecondary">
                        Delivery {parsePriceToString(delivery_price, currency)}
                    </Typography>
                    <VerticalDivider />
                    <Typography variant="subtitle2" color="textSecondary">
                        {tags.toString()}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardCollapsedContent description={description} city={city} />
            </Collapse>
        </Card>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: "relative",
            margin: theme.spacing(3),
        },
        deliveryPriceContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        previewContainer: {
            display: "flex",
        },
        content: {
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: "rotate(180deg)",
        },
    })
);

export default RestaurantCard;
