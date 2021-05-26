import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    //dispatch sends and receives info from sagas
    const dispatch = useDispatch();
    const furniture = useSelector(store => store.furnitureReducer);

    useEffect(() => {
        //on page load, get list of furniture from database
        dispatch({ type: 'FETCH_FURNITURE' });
        }, [furniture]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Container>
            <Grid container spacing={4}>
                {furniture.map((furniture) => {
                    return  <Grid item key={furniture.id} xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardContent>
                                <img
                                    image src={furniture.picture_url}
                                />
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography> Cost: $</Typography>
                                    <Typography paragraph></Typography>
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