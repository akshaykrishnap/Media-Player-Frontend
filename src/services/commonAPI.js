import axios from "axios";


/* nothing inside reqConfig cant be changed suchsa method ,url,data,Header except inside aync() */
 export const commonAPI = async(httpmethod,url,reqBody)=>{
    let reqConfig = {
        method:httpmethod,
        url,
        data:reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })



}