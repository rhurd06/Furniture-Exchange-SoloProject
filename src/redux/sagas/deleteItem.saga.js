import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/myItems/${action.payload.id}`);
        yield put({ type: 'FETCH_MY_FURNITURE' });
        console.log(action.payload.id);
        
    }
    catch(error) {
        console.log('Error in deleteItem saga', error);
    }
};

export default deleteItem;