const accountReducer = (state=0, action) => {
    if (action.type === 'credite') {
        state = state + action.payload
    }

    if (action.type === 'debite') {
        state = state - action.payload
    }
    return state
}

export default accountReducer;

