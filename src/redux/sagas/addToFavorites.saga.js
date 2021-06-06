import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* addToFavorites(action){
    //add item to favorites table in the database
    try {
        yield axios.post('/api/favorites', action.payload)
        yield put({ type: 'FETCH_FURNITURE'})
        console.log('adding to favorites:', action.payload);
    }
    catch(error) {
        alert(`Sorry I couldn't add that to your favorites`);
        console.log('Error adding to favorites', error);
    }
};

export default addToFavorites;