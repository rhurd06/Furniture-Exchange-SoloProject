import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchFurnitureType() {
    //get furniture types from Database via the server
    try {
        const response = yield axios.get('/api/furnitureType');
        yield put({ type: 'SET_FURNITURE_TYPE', payload: response.data });
    }
    catch(error) {
        console.log(`Error in fetchFurnitureType`, error);
    }
};

export default fetchFurnitureType;