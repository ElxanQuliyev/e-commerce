export const changeModeReducers = (state={},action)=>{
    switch (action.type) {
        case "COLOR_CHANGE":
            return {color:action.payload}
        default:
            return state;
    }
}