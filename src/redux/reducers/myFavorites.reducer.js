const myFavorites = (state=[], action) => {
    switch (action.type) {
        case 'SET_MY_FAVORITES':
            console.log('myFavorites:', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default myFavorites;