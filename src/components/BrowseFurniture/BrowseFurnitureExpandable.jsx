import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function BrowseFurnitureExpandable() {

    //classes adds a variable name to call with styling choices from MUI
    const classes = useStyles();
    //these states handle the card state; whether it's been expanded or not
    const [expandedId, setExpandedId] = useState(false);
    const [favorite, setFavorite] = useState(false);

    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();
    const furniture = useSelector(store => store.furnitureReducer);


    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_FURNITURE' });
        }, [furniture]);

    const handleExpandClick = (i) => {
        //expand the card to show all information
        setExpandedId( expandedId === i ? -1 : i );
    };

    const handleAddToFavorites = () => {
        //turn favorites to red
        setFavorite(true);
        dispatch({ type: 'POST_TO_FAVORITES', payload: action.payload });
    };

    return(
        <Container>
            <Grid container spacing={4}>
                {furniture.map((furniture, i) => {
                    return  <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardContent>
                                <img
                                    image src={furniture.picture_url}
                                />
                            <Typography> Cost: ${furniture.cost} </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton 
                                onClick={() => handleAddToFavorites()}
                                aria-label="addToFavorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton
                                onClick={() => handleExpandClick(i)}
                                aria-expanded={expandedId === i}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {furniture.description}
                                        <br />
                                        {furniture.location}
                                        <br />
                                        {furniture.username}
                                        <br />
                                        {furniture.email}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                })}
            </Grid>
        </Container>
    )
};
    export default BrowseFurnitureExpandable;