import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FurnitureCardTemplate from '../FurnitureCardTemplate/FurnitureCardTemplate';

//Material UI imports
import { Container, Grid } from '@material-ui/core';


function BrowseFurnitureExpandable() {


    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();
    const furniture = useSelector(store => store.furnitureReducer);


    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_FURNITURE' });
        }, [furniture]);

    return(
        <Container>
            <Grid container spacing={4}>
                {furniture.map((furniture, i) => {
                    return  <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                        <FurnitureCardTemplate furniture={furniture} i={i} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
};
    export default BrowseFurnitureExpandable;