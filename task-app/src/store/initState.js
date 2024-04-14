export const initState = {
    auth: false
}

export const reducers = (state = initState, action)  =>  {
    switch (action.type) {
        case "LOGIN":
            return {...state, auth: action.payload}
        default  :
        return  state
    }
}