const myFavorites = (state=[], action) => {
    switch (action.type) {
        case 'SET_MY_FAVORITES':
            return action.payload;
        default:
            return state;
    }
};

export default myFavorites;