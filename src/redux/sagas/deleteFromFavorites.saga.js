import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* deleteFromFavorites(action) {
    try {
        console.log(action.payload);
        yield axios.delete(`/api/favorites/${action.payload}`);
        yield put({ type: 'FETCH_MY_FAVORITES' });
        
    }
    catch(error) {
        console.log('Error in deleteFromFavorites saga', error);
    }
};

export default deleteFromFavorites;