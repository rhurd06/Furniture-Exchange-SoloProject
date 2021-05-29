import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

//Material UI
import { TextField, Button } from '@material-ui/core';
import useStyles from './styles';

const UpdateItem = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let {id} = useParams();

    useEffect(() => {
      dispatch({type: 'FETCH_MY_FURNITURE'})
    }, []);

    const furniture = useSelector(store => store.editItem);

    console.log(furniture);

    const classes = useStyles();

    const [picture_url, setPictureUrl] = useState(furniture.picture_url);
    const [cost, setCost] = useState(furniture.cost);
    const [location, setLocation] = useState(furniture.location);
    const [description, setDescription] = useState(furniture.description);
    const [email , setEmail] = useState(furniture.email);
    const [sold, setSold] = useState(false);

    const newUpdates = {
      picture_url: picture_url, 
          cost: cost, 
          location: location, 
          description: description, 
          email: email, 
          sold: sold
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log('Clicked submit form');
        dispatch({ type: 'UPDATE_FURNITURE', payload: {
          id: id,
          data: newUpdates} 
        });

        // setPictureUrl('');
        // setCost(0);
        // setLocation('');
        // setDescription('');
        // setEmail('');
        // setFurnitureType('');
        // setSold(false);
        // history.push('/browseFurnitureExpandable');
    };

    return(
      <div>
        <form onSubmit={(event) => submitForm(event)}>
            <div>
            <TextField id="outlined-basic" label="pictureUrl" variant="outlined" 
              onChange={(event) => setPictureUrl(event.target.value)}
                        type="text"
                        name="pictureUrl"
                        value={picture_url}
                        placeholder={furniture.picture_url}
                        required
            />
            </div>
            <div>
            <TextField id="outlined-basic" label="cost" variant="outlined" 
                onChange={(event) => setCost(event.target.value)}
                type="text"
                name="cost"
                value={cost}
                placeholder={furniture.cost}
                required
            />
          </div>
          <div>
            <TextField id="outlined-basic" label="location" variant="outlined"
              onChange={(event) => setLocation(event.target.value)}
                type="text"
                name="location"
                value={location}
                placeholder={furniture.location}
                required
            />
          </div>
          <div>
            <TextField id="outlined-basic" label="description" variant="outlined" 
              onChange={(event) => setDescription(event.target.value)}
                type="text"
                name="description"
                value={description}
                placeholder={furniture.description}
                required
            />
          </div>
         
          <div>
            <TextField id="outlined-basic" label="email" variant="outlined" 
              onChange={(event) => setEmail(event.target.value)}
                type="text"
                name="email"
                value={email}
                placeholder={furniture.email}
                required
            />
          </div>
          <div>
            <TextField id="outlined-basic" label="sold" variant="outlined" 
              onChange={(event) => setSold(event.target.value)}
                type="text"
                name="sold"
                value={sold}
                placeholder={'false'}
                required
            />
          </div>
          <Button size="small" color="primary" type="submit">Update Furniture Item</Button>
        </form>
      </div>
    );
};

export default UpdateItem;