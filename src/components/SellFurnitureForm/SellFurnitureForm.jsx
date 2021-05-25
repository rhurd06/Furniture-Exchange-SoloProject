import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

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
        // history.push('/itemView');
    }

    return(

    );
};

export default SellFurnitureForm;