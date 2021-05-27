import { put } from '@redux-saga/core/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';

// const user = useSelector(store => store.user);

function* fetchMyFurniture(action) {
    try {
        const myFurniture = yield axios.get(`/api/myItems/${action.payload}`);
        console.log('get my furniture', myFurniture.data);
        yield put({ type: 'SET_MY_FURNITURE', payload: myFurniture.data });
    }
    catch(error) {
        console.log('get myFurniture error', error);
    }
};

export default fetchMyFurniture;