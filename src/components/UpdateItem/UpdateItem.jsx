import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

//Material UI
import { MenuItem, TextField } from '@material-ui/core';
import useStyles from './styles';

const UpdateItem = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    const [picture_url, setPictureUrl] = useState('');
    const [cost, setCost] = useState(0);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [email , setEmail] = useState('');
    const [furnitureType, setFurnitureType] = useState();
    const [sold, setSold] = useState(false);

    useEffect(() => {
        dispatch({ type: 'FETCH_FURNITURE_TYPE' })
    }, []);
    const furnitureTypeReducer = useSelector(store => store.furnitureTypeReducer);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('Clicked submit form');
        dispatch({ type: 'SET_UPDATED_FURNITURE', payload: {picture_url: picture_url, cost: cost, 
                location: location, description: description, 
                email: email, sold: sold} });


        // history.push('/itemView');
        // setPictureUrl('');
        // setCost(0);
        // setLocation('');
        // setDescription('');
        // setEmail('');
        // setFurnitureType('');
        // setSold(false);
        // history.push('/browseFurnitureExpandable');
    };

    const handleChange = (event) => {
        setFurnitureType(event.target.value);
    };

    function deleteItem(id) {
      dispatch({ type: 'DELETE_ITEM', payload: id });
    };

    const click = ()=> {
      history.push('/myItems');
    };

    return(
      <div>
        <form onSubmit={(event) => submitForm(event)}>
            <div>
            <TextField id="outlined-basic" label="pictureUrl" variant="outlined" 
              onChange={(event) => setPictureUrl(event.target.value)}>
                Image URL:
                    <input
                        type="text"
                        name="pictureUrl"
                        value={picture_url}
                        required
                    />
            </TextField>
            </div>
            <div>
            <TextField id="outlined-basic" label="cost" variant="outlined" 
                onChange={(event) => setCost(event.target.value)}>
              Cost:
              <input
                type="text"
                name="cost"
                value={cost}
                required
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="location" variant="outlined"
              onChange={(event) => setLocation(event.target.value)}>
              Location:
              <input
                type="text"
                name="location"
                value={location}
                required
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="description" variant="outlined" 
              onChange={(event) => setDescription(event.target.value)}>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                required
              />
            </TextField>
          </div>
          {/* <div className={classes.root}>
                <TextField id="outlined-select" select label="furnitureType"
                    value={furnitureType} onChange={handleChange} variant="outlined"
                >
                    {furnitureTypeReducer.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.type}
                        </MenuItem>
                    ))}       
                </TextField>
          </div> */}
          <div>
            <TextField id="outlined-basic" label="email" variant="outlined" 
              onChange={(event) => setEmail(event.target.value)}>
               Email:
              <input
                type="text"
                name="email"
                value={email}
                required
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="sold" variant="outlined" 
              onChange={(event) => setSold(event.target.value)}>
              Item Sold:
              <input
                type="text"
                name="sold"
                value={sold}
                required
              />
            </TextField>
          </div>
          <button type="submit">Update Furniture Item</button>
        </form>
        <button onClick={click}>Delete Item</button>
      </div>
    );
};

export default UpdateItem;