import React, { useState } from 'react'
import Add from '../Componets/Add'
import { Link } from 'react-router-dom'
import View from '../Componets/View'
import Category from '../Componets/Category'
import './Home.css'

function Home() {

const[uploadVideoStatus, setUploadVideoStatus] =useState({})
const [videoDragAndRemoveStatus, setVideoDragAndRemoveStatus] =useState(false)
  return (


    <>

      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Add uploadVideoStatus ={setUploadVideoStatus} />
        <Link id='link'>Watch History</Link>
      </div>

      <div className="row d-flex justify-content-center align-items-center w-100">

<div className="col-md-9">
  <h3>All Videos</h3>
  <View uploadVideoStatus={uploadVideoStatus}  setVideoDragAndRemoveStatus={setVideoDragAndRemoveStatus}/>
</div>

<div className="col-md-3">
<Category setVideoDragAndRemoveStatus ={setVideoDragAndRemoveStatus}
videoDragAndRemoveStatus={videoDragAndRemoveStatus} />
</div>

      </div>

    </>
  )
}

export default Home