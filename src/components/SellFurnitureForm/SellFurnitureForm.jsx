import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

//Material UI
import { TextField } from '@material-ui/core';

const SellFurnitureForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [imageUrl, setImageUrl] = useState('');
    const [cost, setCost] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [preferredContact , setPreferredContact] = useState('');
    const [username, setUsername] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        console.log('Clicked submit form');
        dispatch({ type: 'POST_BROWSE_FURNITURE', imageUrl: imageUrl, cost: cost});
        dispatch({ type: 'POST_FURNITURE', imageUrl: imageUrl, cost: cost, 
                location: location, description: description, 
                preferredContact: preferredContact, username: username });
        history.push('/browseFurniture');
        // history.push('/itemView');
    }

    return(
        <form onSubmit={submitForm}>
            <div>
            <TextField id="outlined-basic" label="imageUrl" variant="outlined" >
                Image URL:
                    <input
                        type="text"
                        name="imageUrl"
                        value={imageUrl}
                        required
                        onChange={(event) => setImageUrl(event.target.value)}
                    />
            </TextField>
            </div>
            <div>
            <TextField id="outlined-basic" label="cost" variant="outlined" >
              Cost:
              <input
                type="text"
                name="cost"
                value={cost}
                required
                onChange={(event) => setCost(event.target.value)}
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="location" variant="outlined" >
              Location:
              <input
                type="text"
                name="location"
                value={location}
                required
                onChange={(event) => setLocation(event.target.value)}
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="description" variant="outlined" >
              Description:
              <input
                type="text"
                name="description"
                value={description}
                required
                onChange={(event) => setDescription(event.target.value)}
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="preferredContact" variant="outlined" >
              Preferred Contact Method:
              <input
                type="text"
                name="preferredContact"
                value={preferredContact}
                required
                onChange={(event) => setPreferredContact(event.target.value)}
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="username" variant="outlined" >
              Username:
              <input
                type="text"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </TextField>
          </div>
          <button type="submit">Add Furniture Item</button>
        </form>
    );
};

export default SellFurnitureForm;