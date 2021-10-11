import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FurnitureCardTemplate from '../FurnitureCardTemplate/FurnitureCardTemplate';
import './BrowseFurniture.css';

//Material UI imports
import { Container, Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../ViewMyItems/Styles';

function BrowseFurniture() {


    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();
    const furniture = useSelector(store => store.furnitureReducer);
    const useStyles = makeStyles();
    const classes = useStyles();


    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_FURNITURE' });
        }, [furniture]);

    return(
        <Container>
             <AppBar position="relative">
                {/* Banner across the top with sofa icon */}
                <Toolbar className="appBar">
                    <WeekendTwoToneIcon className={classes.icon} />
                    <Typography align="center" variant="h3">
                        Browse Furniture
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid style={{backgroundColor: "lightseagreen"}} container spacing={4} >
                {furniture.map((furniture, i) => {
                    return  <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                        <FurnitureCardTemplate furniture={furniture} i={i} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
};
    export default BrowseFurniture;