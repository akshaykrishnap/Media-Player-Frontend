import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { AddToHistory, deleteAVideo } from '../services/allAPI';
import { toast } from 'react-toastify';

function VideoCard({displayVideo,setDeleteVideoStatus, isPresent}){
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  /* function watch-history */
  const handleShow = async() => {
    setShow (true);
    let caption = displayVideo.caption
    let url = displayVideo.embedLink
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
 
let reqBody = {
  caption,url,timeStamp
}
const response = await AddToHistory(reqBody)
console.log(response);

  }



  /* function to delete videocard */
  const handelDelete = async(id)=>{
    const response = await deleteAVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)   // automatic delete refresh
    toast.error('Deleted Video')
  }


  /* function to drag */
const videoDrag = (e, id)=>{
  console.log(`Card has been dragged by the id ${id}`);
  e.dataTransfer.setData("VideoID",id)
}



  return (

    <>

           <Card onClick={handleShow} className='mt-4' style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
     
    
   {!isPresent &&<Card.Img  variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'300px'} />}
     
      <Card.Body className='d-flex'>
        
        <Card.Text>
         {displayVideo?.caption}
        </Card.Text>
        
       {!isPresent && <Button onClick={()=>handelDelete(displayVideo?.id)} className='btn btn-danger ms-auto'><i style={{color:'white'}} class="fa-solid fa-trash-can"></i></Button>}
     
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'dodgerblue' }}></Modal.Title>
        </Modal.Header>
       <Modal.Body><iframe width="100%" height="514" src={`${displayVideo?.embedLink}?autoplay=1`} title="Mini Maharani Video Song  | Premalu | Naslen | Mamitha | Girish AD | Vishnu Vijay | Suhail Koya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      
      </Modal>

    </>

  )
}

export default VideoCard