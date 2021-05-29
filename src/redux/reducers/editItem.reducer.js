const editItem = (state={}, action) => {
    if(action.type === 'SET_UPDATED_ITEM'){
        return action.payload;
    }
    return state;
}

export default editItem;