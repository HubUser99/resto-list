import {
    makeStyles,
    createStyles,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

interface Props {
    src: string;
    name: string;
    online: boolean;
}

export const CardImage = ({ src, name, online }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    const classes = useStyles(isLoading);

    const handleChangeIsLoading = () => {
        setIsLoading(false);
    };

    return (
        <div className={classes.imageContainer}>
            <CardMedia
                component="img"
                height={200}
                src={src}
                title={name}
                onLoad={handleChangeIsLoading}
                className={classes.cardImage}
            />
            {isLoading && (
                <Blurhash
                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    width="100%"
                    height={200}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    className={classes.blurhashImage}
                />
            )}
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
        blurhashImage: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
        },
        cardImage: (isLoading) => ({
            visibility: isLoading ? "collapse" : "unset",
            height: isLoading ? 0 : undefined,
        }),
    })
);

export default CardImage;
