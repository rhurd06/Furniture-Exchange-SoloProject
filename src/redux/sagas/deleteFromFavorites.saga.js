import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* deleteFromFavorites(action) {
    try {
        yield axios.delete(`/api/myFavorites/${action.payload}`);
        yield put({ type: 'FETCH_MY_FAVORITES' });
        console.log(action.payload);
        
    }
    catch(error) {
        console.log('Error in deleteFromFavorites saga', error);
    }
};

export default deleteFromFavorites;