import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* addFurnitureItem (action) {
    //add furniture item to DB
    try {
        yield axios.post('/api/furniture', action.payload)
        yield put({ type: 'FETCH_FURNITURE'})
        console.log(action.payload);
    }
    catch(error) {
        alert(`Sorry I couldn't add that item`);
        console.log(`Error adding item`, error);
    }
};

export default addFurnitureItem;