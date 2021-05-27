import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchMyFurniture(action) {
    try {
        const myFurniture = yield axios.get(`/api/furniture/${action.payload`)
        
    }
}