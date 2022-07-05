export const CartReducers=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload
            //eyni mehsullun olması
                const existItem=state.cartItems.find(c=>c.id===item.id)
                if(existItem){
                    return{
                        ...state,
                        cartItems:state.cartItems.map(x=>x.id===existItem.id?item:x)
                    }
                }else{
                    return {
                        ...state,
                        cartItems:[...state.cartItems,item]
                    }
                }
        default:
            return state;
    }
}