import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* updateFurnitureItem(action) {
    //update item in the DB
    try {
        yield axios.put('/api/furniture', action.payload);
        yield put({ type: 'UPDATE_FURNITURE'})
        console.log('updateFurnitureItem', action.payload);
    }
    catch(error) {
        alert(`Sorry I couldn't update that item`);
        console.log(`Error updating item`, error);
    }
};

export default updateFurnitureItem;