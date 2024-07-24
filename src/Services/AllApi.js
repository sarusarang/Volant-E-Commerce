import { CommonApi } from "./CommonApi";

const base_Url = "http://localhost:3000"


// User Register
export const UserRegister = async(data)=>{

    return CommonApi("POST",`${base_Url}/register`,data)

}


// User Login
export const UserLogin = async(data)=>{

    return CommonApi("POST",`${base_Url}/login`,data)

}


// Add Products
export const addproducts = async(data,headers)=>{

    return CommonApi("POST",`${base_Url}/addproduct`,data,headers)

}

// Show Products
export const showproducts = async()=>{

    return CommonApi("GET",`${base_Url}/showproduct`)

}


// Show Products
export const Deleteproducts = async(id)=>{

    return CommonApi("DELETE",`${base_Url}/deleteproduct/${id}`)

}