// Material UI imports
import { Typography, AppBar, Card, CardActions, 
    CardContent, CssBaseline, Grid, Toolbar, Container, Button } 
    from '@material-ui/core';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';
import useStyles from './Styles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import UpdateItem from '../UpdateItem/UpdateItem';


function myFurnitureItems() {
    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();

    //history helps us to navigate to another page
    const history = useHistory();

    //furniture grabs state from furniture reducer
    const myFurniture = useSelector(store => store.myFurniture);

    //classes adds a variable name to call with styling choices from MUI
    const classes = useStyles();

    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_MY_FURNITURE' });
    }, []);

    const updateItem = (event, furniture) => {
        console.log('clicked on item', furniture);
        //Send info on that furniture item to reducer
        dispatch({ type: 'SET_UPDATED_FURNITURE', payload: furniture})
        history.push('/updateItem');
    }

    // function handleDelete(id) {
    //     alert('ARE YOU SURE YOU WANT TO DELETE THIS ITEM?');
    //     dispatch({ type: 'DELETE_ITEM', payload: id})
    //     history.push('/myItems');
    // }
    console.log(myFurniture);
   
    return(
        <div>
            <CssBaseline />
            <AppBar position="relative" >
                {/* Banner across the top with sofa icon */}
                <Toolbar>
                    <WeekendTwoToneIcon className={classes.icon} />
                    <Typography variant="h6">
                        My Furniture
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Header */}
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            My Furniture
                        </Typography>
                    </Container>
                </div>
                {/* the next portion has MUI styling to create cards for each item */}
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4}>
                        {myFurniture.map((furniture, index) => {
                            return  <Grid item key={index} xs={12} sm={6} md={4} >
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
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={(event) => UpdateItem(event, furniture)}>Edit</Button>
                                    {/* <Button size="small" color="secondary" onClick={() => handleDelete(myFurniture.id)}>Delete</Button> */}
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

export default myFurnitureItems;
