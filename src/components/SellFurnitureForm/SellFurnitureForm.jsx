import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './SellFurnitureForm.css';

//Material UI
import { MenuItem, TextField, Button, AppBar,Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';

const SellFurnitureForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    const [picture_url, setPictureUrl] = useState('');
    const [cost, setCost] = useState(0);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [preferredContact , setPreferredContact] = useState('');
    const [user_id, setUsername] = useState();
    const [furnitureType, setFurnitureType] = useState();

    // const [itemInfo, setItemInfo] = useState([]);
    // const [infoPicUrl, setInfoPicUrl] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_FURNITURE_TYPE' })
    }, []);
    const furnitureTypeReducer = useSelector(store => store.furnitureTypeReducer);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('Clicked submit form');
        dispatch({ type: 'POST_FURNITURE', payload: {picture_url: picture_url, cost: cost, 
                location: location, description: description, furnitureType: furnitureType, 
                preferredContact: preferredContact, user_id: user_id} });
                
        setPictureUrl('');
        setCost(0);
        setLocation('');
        setDescription('');
        setPreferredContact('');
        setUsername('');
        setFurnitureType('');
        history.push('/browseFurniture');
    };

   const handleChange = (event) => {
        setFurnitureType(event.target.value);
    };

    // infoPicUrl = '/images/greySofa.png';

    // const setItemInfo = () => {
    //   setPictureUrl('/images/greySofa.png');
    //   setCost(70);
    //   setLocation('Minneapolis');
    //   setDescription('greySofa');
    //   setPreferredContact('lamar@gmail.com');
    //   // setFurnitureType ('1')
    //   console.log('clicked');
  //  };

    return(
      <div>
         <AppBar position="relative" 
        //  onClick={() => setItemInfo()}
         >
                {/* Banner across the top with sofa icon */}
                <Toolbar className="appBar">
                    <WeekendTwoToneIcon className={classes.icon} />
                    <Typography align="center" variant="h3"
                    >
                        Add an Item To Sell
                    </Typography>
                </Toolbar>
            </AppBar>
        {/* <h1 className="header">Add an Item To Sell</h1> */}
        <form className="form" onSubmit={submitForm}>
            <div>
            <TextField id="outlined-basic" label="pictureUrl" variant="outlined" 
              onChange={(event) => setPictureUrl(event.target.value)} value={picture_url}>
                Image URL:
                    <input
                        type="text"
                        name="pictureUrl"
                        required
                    />
            </TextField>
            </div>
            <div>
            <TextField id="outlined-basic" label="cost" variant="outlined" 
                onChange={(event) => setCost(event.target.value)} value={cost}>
              Cost:
              <input
                type="text"
                name="cost"
                required
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="location" variant="outlined"
              onChange={(event) => setLocation(event.target.value)} value={location}>
              Location:
              <input
                type="text"
                name="location"
                required
              />
            </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="description" variant="outlined" 
              onChange={(event) => setDescription(event.target.value)} value={description}>
              Description:
              <input
                type="text"
                name="description"
                required
              />
            </TextField>
          </div>
          <div className={classes.root}>
                <TextField id="outlined-select" select label="furnitureType"
                    value={furnitureType} onChange={handleChange} variant="outlined"
                >
                    {furnitureTypeReducer.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.type}
                        </MenuItem>
                    ))}       
                </TextField>
          </div>
          <div>
            <TextField id="outlined-basic" label="preferredContact" variant="outlined" 
              onChange={(event) => setPreferredContact(event.target.value)} value={preferredContact}>
              Preferred Contact Method:
              <input
                type="text"
                name="preferredContact"
                required
              />
            </TextField>
          </div>
          <Button size="small" color="primary" variant="contained" type="submit">Add Furniture Item</Button>
        </form>
      </div>
    );
};

export default SellFurnitureForm;