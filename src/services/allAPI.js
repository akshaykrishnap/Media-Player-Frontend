

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// api for uploading video
 
export const uploadVideoApi = async(reqBody)=> {
   return await commonAPI('POST',`${serverURL}/video`,reqBody)
}


// api to get uploaded api

export const getUploadedVideoApi = async()=>{
 return await commonAPI('GET',`${serverURL}/video`,"")
}



// API to delete a video

export const deleteAVideo = async(id)=>{
 return  await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

// API to add video into history

export const AddToHistory = async(reqBody)=>{
  return await commonAPI('POST',`${serverURL}/history`,reqBody) 
}

// API to get video from history

export const getAllVideoHistory = async()=>{
   return await commonAPI ('GET',`${serverURL}/history`,"")
}

// API to delete watch history 

export const deleteWatchHistoryApi =async(id)=>{
   return await commonAPI ('DELETE',`${serverURL}/history/${id}`,{})
}

// API to add category

export const addCategoryAPI = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/category`,reqBody) 
}

// API to get category 

export const getCategoryAPI = async()=>{
   return await commonAPI ('GET',`${serverURL}/category`,"")
}

// API to delete category

export const deleteCategoryAPI =async(id)=>{
   return await commonAPI ('DELETE',`${serverURL}/category/${id}`,{})
}

// API to get a single  video from videos

export const getVideoAPI = async(id)=>{
   return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

// API to upload data to category

export const updateCategory = async(id,reqbody)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,reqbody)
}