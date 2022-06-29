import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"

export const getUserInfo=(id)=>async(dispatch)=>{
    const {data}=await axios.get(`${BASE_URL}/products/detail/${id}/AZ`)
    dispatch({
        type:"ADD_USERNAME",
        payload:data
    })
}