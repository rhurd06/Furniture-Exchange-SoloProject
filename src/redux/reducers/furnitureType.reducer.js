const furnitureTypeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FURNITURE_TYPE':
            console.log('reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default furnitureTypeReducer;