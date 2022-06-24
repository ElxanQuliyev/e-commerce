import axios from "axios"
import { BASE_URL } from "./BaseConfig"

const ShopApi={
    getProducts:async function(){
        const {data}=await axios.get(`${BASE_URL}/products/AZ`)
        return data;
    },
    getProductSingle:async function(id){
        const {data}=await axios.get(`${BASE_URL}/products/detail/${id}/AZ`)
        return data;
    }

}

export default ShopApi