export const userGetReducer=(state={},action)=>{
    switch (action.type) {
        case "ADD_USERNAME":
            return {product:action.payload}
        default:
            return state;
    }
}