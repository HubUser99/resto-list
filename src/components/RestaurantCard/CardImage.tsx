import {
    makeStyles,
    createStyles,
    CardMedia,
    Typography,
} from "@material-ui/core";

interface Props {
    src: string;
    name: string;
    online: boolean;
}

export const CardImage = ({ src, name, online }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.imageContainer}>
            <CardMedia component="img" height={200} src={src} title={name} />
            {online ? null : (
                <div className={classes.imageOverlay}>
                    <Typography variant="h6">Temporarily offline</Typography>
                </div>
            )}
        </div>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        imageContainer: {
            position: "relative",
        },
        imageOverlay: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF",
        },
    })
);

export default CardImage;
