import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import axois from 'axios';

function* fetchMyFavorites(action) {
    //get favorites from favorites table in database
    try{
        const myFavorites = yield axios.get(`/api/favorites/${action.payload}`);
        console.log('get all favorites', myFavorites.data);
        yield put({ type: 'SET_MY_FAVORITES', payload: myFavorites.data });
    }
    catch(error) {
        console.log('Error in get my favorites', error);
    }
};

export default fetchMyFavorites;