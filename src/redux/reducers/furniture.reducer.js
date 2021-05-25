const furnitureReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FURNITURE':
            return action.payload;
        default:
            return state;
    }
};

export default furnitureReducer;