import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* deleteItem(action) {
    console.log(action.payload);
    try {
        //delete from Favorites
        yield axios.delete(`api/favorites/${action.payload}`);
        //delete from View My Items
        yield axios.delete(`/api/myItems/${action.payload}`);

        yield put({ type: 'FETCH_MY_FURNITURE' });
        
    }
    catch(error) {
        console.log('Error in deleteItem saga', error);
    }
};

export default deleteItem;