const myFurniture = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_FURNITURE':
            return action.payload;
        default:
            return state;
    }
};

export default myFurniture;