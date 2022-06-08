import axios from "axios"
import { BASE_URL } from "./BaseConfig"

const ShopApi={
    getProducts:async function(){
        const {data}=await axios.get(`${BASE_URL}products`)
        return data;
    },
    getProductSingle:async function(id){
        const {data}=await axios.get(`${BASE_URL}products/${id}`)
        return data;
    }

}

export default ShopApi