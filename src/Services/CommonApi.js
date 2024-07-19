import axios from "axios";


export const CommonApi = async (reqmethod, apiurl, reqbody) => {


    const config = {

        method: reqmethod,
        url: apiurl,
        data: reqbody,
        header: { 'Content-Type': 'application/json' }

    }


    return await axios(config).then((res) => { return res }).catch((err) => { return err })


    
}