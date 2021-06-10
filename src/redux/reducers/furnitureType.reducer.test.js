import furnitureTypeReducer from './furnitureType.reducer';

describe('Testing furnitureType reducer...', () => {
    test('Initial state should be an empty array', () => {
        let action = [];
        let state = undefined;
        let returnedState = furnitureTypeReducer(state, action);
        expect( returnedState ).toEqual( [] );
    })
    test('Testing for returned furniture type...', () => {
        let item = { type: 'sofa', id: 1 };
        let action = { type: 'SET_FURNITURE_TYPE', payload: item };
        let state = [];
        let returnedState = furnitureTypeReducer(state, action);
        expect( returnedState ).toEqual( item );
    })
})