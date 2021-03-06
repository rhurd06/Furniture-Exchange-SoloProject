import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* updateFurnitureItem(action) {
    //update item in the DB
    try {
        yield axios.put(`/api/myItems/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_MY_FURNITURE', payload: action.payload.user_id })
        console.log('updateFurnitureItem', action.payload);
    }
    catch(error) {
        alert(`Sorry I couldn't update that item`);
        console.log(`Error updating item`, error);
    }
};

export default updateFurnitureItem;