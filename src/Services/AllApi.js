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

