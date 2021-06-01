import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './Styles';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FurnitureCardTemplate({furniture, i}){

     //classes adds a variable name to call with styling choices from MUI
     const classes = useStyles();

     const dispatch=useDispatch();

     //these states handle the card state; whether it's been expanded or not
     const [expandedId, setExpandedId] = useState(false);
     const [favorite, setFavorite] = useState(false);


     const handleExpandClick = (i) => {
        //expand the card to show all information
        setExpandedId( expandedId === i ? -1 : i );
    };

    const handleAddToFavorites = (i) => {
        //turn favorites to red
        setFavorite(favorite === i ? -1 : i);
        dispatch({ type: 'POST_TO_FAVORITES', payload: furniture });
    };
return(
<Card className={classes.card}>
                            <CardContent>
                                <img
                                    image src={furniture.picture_url}
                                />
                            <Typography> Cost: ${furniture.cost} </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton 
                                onClick={() => handleAddToFavorites(i)}
                                aria-label="addToFavorites">
                                    {favorite ? (
                                        <FavoriteIcon color="secondary"/>
                                    ) : (
                                        <FavoriteIcon />
                                    )}
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
);
};

export default FurnitureCardTemplate;