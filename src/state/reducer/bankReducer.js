

const bankReducer = (state=0, action) => {
    if (action.type === 'incre') {
        state = state + action.payload
    }

    if (action.type === 'dec') {
        state = state - action.payload
    }
    return state
}

export default bankReducer;

