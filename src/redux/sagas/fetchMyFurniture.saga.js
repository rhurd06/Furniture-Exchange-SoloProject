import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchMyFurniture(action) {
    try {
        const myFurniture = yield axios.get(`/api/furniture/${action.payload}`);
        console.log('get my furniture', myFurniture.data);
        yield put({ type: 'SET_MY_FURNITURE', payload: myFurniture.data });
    }
    catch(error) {
        console.log('get myFurniture error', error);
    }
};

export default fetchMyFurniture;