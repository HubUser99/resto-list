import { AppBar, Toolbar, Typography } from "@material-ui/core";

const HeaderBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">RestoList</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
