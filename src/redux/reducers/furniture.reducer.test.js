import furnitureReducer from './furniture.reducer';

describe('Testing furnitureReducer...', () => {
    test('Initial state should be an empty array', () => {
        let action = [];
        let state = undefined;
        let returnedState = furnitureReducer(state, action);
        expect( returnedState ).toEqual( [] );
    })
    test('Testing for returned furniture...', () => {
        let item = { picture_url: '/images/twinOverFullBunk.png', id: 17 };
        let action = { type: 'SET_FURNITURE', payload: item };
        let state = [];
        let returnedState = furnitureReducer(state, action);
        expect( returnedState ).toEqual( item );
    })
})