// Material UI imports
import { Typography, AppBar, Card, CardActions, 
    CardContent, CssBaseline, Grid, Toolbar, Container, Button } 
    from '@material-ui/core';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';
import useStyles from './Styles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function myFavoriteItems() {
    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();

    const history = useHistory();


    //classes adds a variable name to call with styling choices from MUI
    const classes = useStyles();

        //myFurniture grabs state from myFurniture reducer
        const myFavorites = useSelector(store => store.myFavorites);
        const user = useSelector(store => store.user);

    console.log(user.id);
    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_MY_FAVORITES', payload: user.id });
    }, []);

    function handleDelete(id) {
        console.log(id);
        alert('ARE YOU SURE YOU WANT TO DELETE THIS ITEM FROM YOUR FAVORITES?');
        dispatch({ type: 'DELETE_FROM_FAVORITES', payload: id})
        history.push('/myFavorites');
    }
   
    return(
        <div>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    <WeekendTwoToneIcon className={classes.icon} />
                    <Typography variant="h6">
                        My Favorites
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            My Favorites
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4}>
                        {myFavorites.map((furniture) => {
                            return  <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                            <Card className={classes.card}>
                                <CardContent>
                                <img
                                    image src={furniture.picture_url}
                                />
                                </CardContent>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                       {furniture.cost}
                                    </Typography>
                                    <Typography>
                                        {furniture.description}
                                        <br />
                                        {furniture.location}
                                        <br />
                                        {/* {furniture.username}
                                        <br />
                                        {furniture.email} */}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small" color="secondary" onClick={() => handleDelete(furniture.furniture_id)}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        })}
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default myFavoriteItems;
