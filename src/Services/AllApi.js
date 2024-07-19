import { CommonApi } from "./CommonApi";

const base_Url = ""


export const getProducts = async()=>{

    return CommonApi("GET",base_Url," ")

}

