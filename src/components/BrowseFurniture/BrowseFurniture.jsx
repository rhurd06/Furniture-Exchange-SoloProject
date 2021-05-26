// Material UI imports
import { Typography, AppBar, Card, CardActions, 
    CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } 
    from '@material-ui/core';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';
import useStyles from './Styles';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function BrowseFurniture() {
    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();

    //history helps us to navigate to another page
    const history = useHistory();

    //furniture grabs state from furniture reducer
    const furniture = useSelector(store => store.furnitureReducer);

    const classes = useStyles();

    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_FURNITURE' });
    }, []);
    return(
        <>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <WeekendTwoToneIcon className={classes.icon} />
                    <Typography variant="h6">
                        Available Furniture
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Available Furniture
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {/* Cards with furniture will go here */}
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my items
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4}>
                        {furniture.map((furniture) => {
                        <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        })}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                        Somthing here to give footer a purpose
                </Typography>
            </footer>
        </>
    )
}

export default BrowseFurniture;
