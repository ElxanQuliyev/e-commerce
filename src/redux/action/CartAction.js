import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"

export const addToCart=(id,qty)=> async (dispatch,getState)=>{
    const {data} = await axios.get(`${BASE_URL}/products/detail/${id}/AZ`)
    dispatch({
        type:"ADD_TO_CART",
        payload:{...data,qty}
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}