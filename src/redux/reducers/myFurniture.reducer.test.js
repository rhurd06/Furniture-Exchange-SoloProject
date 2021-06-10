import myFurniture from './myFurniture.reducer';

describe('Testing myFurniture reducer...', () => {
    test('Initial state should be an empty array', () => {
        let action = [];
        let state = undefined;
        let returnedState = myFurniture(state, action);
        expect( returnedState ).toEqual( [] );
    })
    test('Testing for returned items...', () => {
        let item = { user_id: 3, id: 22 };
        let action = { type: 'SET_MY_FURNITURE', payload: item };
        let state = [];
        let returnedState = myFurniture(state, action);
        expect( returnedState ).toEqual( item );
    })
})
