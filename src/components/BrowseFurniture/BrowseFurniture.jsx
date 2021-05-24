import { Typography, AppBar, Card, CardActions, 
    CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } 
    from '@material-ui/core';
    import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';

function BrowseFurniture() {
    return(
        <>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <WeekendTwoToneIcon />
                    <Typography variant="h6">
                        Available Furniture
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Available Furniture
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default BrowseFurniture;
