import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchFurniture() {
    try {
        const furniture = yield axios.get('/furniture');
        console.log('get all', furniture.data);
        yield put({ type: 'SET_FURNITURE', payload: furniture.data });
    }
    catch {
        console.log('get furniture error');
    }
};

export default fetchFurniture;