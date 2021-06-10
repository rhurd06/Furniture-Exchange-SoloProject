import myFavorites from './myFavorites.reducer';

describe('Testing myFavorites reducer...', () => {
    test('Initial state should be an empty array', () => {
        let action = [];
        let state = undefined;
        let returnedState = myFavorites(state, action);
        expect( returnedState ).toEqual( [] );
    })
    test('Testing for returned favorite items...', () => {
        let item = { user_id: 16, id: 61 };
        let action = { type: 'SET_MY_FAVORITES', payload: item };
        let state = [];
        let returnedState = myFavorites(state, action);
        expect( returnedState ).toEqual( item );
    })
})