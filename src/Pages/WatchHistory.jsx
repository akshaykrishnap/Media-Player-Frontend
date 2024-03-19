import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteWatchHistoryApi, getAllVideoHistory} from '../services/allAPI'
import { toast } from 'react-toastify'



function WatchHistory() {


  /* // to access watch history // */

const [historyVideos,setHistoryVideos]= useState([])
const [deleteVideoStatus, setDeleteVideoStatus ]= useState(false)   // automatic delete refresh
  const getHistory = async()=>{
    const response = await getAllVideoHistory()
 /*    console.log(response); */
 setHistoryVideos(response.data)
  }
/* console.log(historyVideos); */


/* // funtion to delete video history //  */

const handleDelete = async(id)=>{
  const response = await deleteWatchHistoryApi(id)
  console.log(response);   

  if (response.status>=200 && response.status<300) {
    setDeleteVideoStatus(true)  // automatic delete refresh
  }
  else{
    toast.error('Something went wrong')
  }

}

// automatic watch history table update and auto delete update

  useEffect(()=>{
getHistory()
setDeleteVideoStatus(false)  // automatic delete refresh
  },[deleteVideoStatus])

  return (

     <>
      <div className=' d-flex justify-content-between align-items-center m-5 p-5'>
     <h3>Watch History</h3> 
     <Link style={{color:'red'}} to={'/home'}><i style={{color:'red'}} class="fa-solid fa-arrow-left"></i>Back to Home</Link>  
      </div>


<div className='d-flex justify-content-between align-items-center mx-5 p-4'>

{historyVideos?.length>0?
 <table className='table'>

<thead>
  <tr>
    <th>#</th>
    <th>Caption</th>
    <th>URL</th>
    <th>Time Stamp</th>
    <th>Action</th>

  </tr>
</thead>
<tbody>
 
{historyVideos?.map((item,index)=>( <tr>
    <td>{index+1}</td>
    <td>{item.caption}</td>
    <td><a href={item.url}>{item.url}</a></td>
    <td>{item.timeStamp}</td>
    <td>
      <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><i style={{color:'white'}} class="fa-solid fa-trash-can"></i></button>
    </td>
  </tr>))
}

</tbody>

      </table>:<p className='text-danger fs-4'>No Watch History</p>

}

</div>

    </>


  )
}

export default WatchHistory