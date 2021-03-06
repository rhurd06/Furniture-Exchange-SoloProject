import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchFurnitureType from './fetchFurnitureType.saga';
import fetchFurniture from './fetchFurniture.saga';
import addFurnitureItem from './addFurnitureItem.saga';
import updateFurnitureItem from './updateFurnitureItem.saga';
import deleteItem from './deleteItem.saga';
import fetchMyFurniture from './fetchMyFurniture.saga';
import addToFavorites from './addToFavorites.saga';
import fetchMyFavorites from './fetchMyFavorites.saga';
import deleteFromFavorites from './deleteFromFavorites.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery ('FETCH_FURNITURE_TYPE', fetchFurnitureType),
  yield takeEvery ('FETCH_FURNITURE', fetchFurniture);
  yield takeEvery ('POST_FURNITURE', addFurnitureItem);
  yield takeEvery ('UPDATE_FURNITURE', updateFurnitureItem);
  yield takeEvery ('DELETE_ITEM', deleteItem);
  yield takeEvery ('FETCH_MY_FURNITURE', fetchMyFurniture);
  yield takeEvery ('POST_TO_FAVORITES', addToFavorites);
  yield takeEvery ('FETCH_MY_FAVORITES', fetchMyFavorites);
  yield takeEvery ('DELETE_FROM_FAVORITES', deleteFromFavorites);
  
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
