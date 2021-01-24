import {
    CardContent,
    createStyles,
    makeStyles,
    Typography,
} from "@material-ui/core";

interface Props {
    description: string;
    city: string;
}

const CardCollapsedContent = ({ description, city }: Props) => {
    const classes = useStyles();

    return (
        <CardContent className={classes.expandedContent}>
            <Typography variant="caption" color="textSecondary">
                Description
            </Typography>
            <Typography>{description}</Typography>
            <Typography variant="caption" color="textSecondary">
                City
            </Typography>
            <Typography>{city}</Typography>
        </CardContent>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        expandedContent: {
            textAlign: "left",
        },
    })
);

export default CardCollapsedContent;
