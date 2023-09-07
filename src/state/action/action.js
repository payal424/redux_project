export  const increment = (amount) => {
    return (dispatch) => {
        dispatch({type : 'incre', payload : amount})
    }
}

export const decrement = (amount) => {
    return (dispatch) => {
        dispatch({type : 'dec', payload : amount})
    }
}

export const debite = (amount) => {
    return (dispatch) => {
        dispatch({type : 'debite', payload : amount})
    }
}

export const credite = (amount) => {
    return (dispatch) => {
        dispatch({type : 'credite', payload : amount})
    }
}
  