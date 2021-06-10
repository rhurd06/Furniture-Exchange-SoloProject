import editItem from './editItem.reducer';

describe('Testing editItem reducer...', () => {
    test('Initial state should be an empty array', () => {
        let action = {};
        let state = undefined;
        let returnedState = editItem(state, action);
        expect( returnedState ).toEqual( {} );
    })
    test('Testing for returned furniture type...', () => {
        let item = { picture_url: '/images/twinOverFullBunk.png', id: 17 };
        let action = { type: 'SET_UPDATED_ITEM', payload: item };
        let state = {};
        let returnedState = editItem(state, action);
        expect( returnedState ).toEqual( item );
    })
})