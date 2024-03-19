import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import VideoCard from './VideoCard'
import { getCategoryAPI, getUploadedVideoApi, updateCategory } from '../services/allAPI'

function View({uploadVideoStatus,setVideoDragAndRemoveStatus}) {

/* to delete videocard */
const [deleteVideo, setDeleteVideoStatus] =useState(false)   // automatic delete refresh

const [video,setVideo]=useState([])



const getVideos = async()=>{
const response  = await getUploadedVideoApi()

/* console.log(response); */
const {data} = response
/* console.log(data); */
setVideo(data)
}
console.log(video);

const dragOver = (e)=>{
  e.preventDefault()
}

const videoDrop = async(e)=>{
  const {categoryId,videoid} =JSON.parse(e.dataTransfer.getData("dataShared"))
  console.log(categoryId,videoid);

  // get all category
  const {data} = await getCategoryAPI()

  // access the object with category id from all category
  let selectedCategory =data.find((item)=>item.id==categoryId)
 
  // filtering the category object by removing the video object from the allVideos
  let result = selectedCategory.allVideos.filter((item)=>item.id!==videoid)
  console.log(result);
  let newCategory = {
    category:selectedCategory.category,allVideos:result,id:categoryId
  }

  // updating the category
  await updateCategory(categoryId,newCategory)

  setVideoDragAndRemoveStatus(true)

}


useEffect(()=>{              // handle side effect
 getVideos()
 setDeleteVideoStatus(false)
},[uploadVideoStatus,deleteVideo])   // automatic delete refresh    /* dependency - [] - content will be fetched when the page loads */


  return (

    <>
        <Row className='w-100' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>

       {  video?.length>0?
          video?.map((item)=>(
<Col sm={12} md={6} lg={4} xl={3}>
         <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />
       </Col>

          )):<p style={{color:'DodgerBlue',fontSize:'15px'}} className=''> No Video   Uploaded</p> 

       }
    

        </Row>

    </>

  )
}

export default View