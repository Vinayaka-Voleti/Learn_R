const initialState = {count : 0};

const UserReducer=(state, action) =>{
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return { count : state.count -1}
        case "addByValue":
            return {count : state.count + action.payload}
        case "subByValue":
            return { count : state.count - action.payload}
    
        default:
            return state;
    }
}
export { UserReducer,initialState }