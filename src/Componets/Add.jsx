import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ uploadVideoStatus }) {

  const [show, setShow] = useState(false);   // automatic add refresh
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    imageUrl: "",
    embedLink: ""

  })

  const getEmbedLink = (e) => {
    /* console.log(e.target.value); */
    const text = e.target.value
    if (text.endsWith('?feature=shared')) {
      console.log(text.slice(-26, -15));
      const link = `https://www.youtube.com/embed/${text.slice(-26, -15)}`;
      setVideo({ ...video, embedLink: link })
    }
    else {
      console.log(text.slice(-11));
      const link = `https://www.youtube.com/embed/${text.slice(-11)}`;
      setVideo({ ...video, embedLink: link })
    }
  }
  console.log(video);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleUpload = async () => {
    const { id, caption, imageUrl, embedLink } = video
    console.log(id, caption, imageUrl, embedLink);
    if (!id || !caption || !imageUrl || !embedLink) {
      toast.warning('Please fill the data completly')
    }
    else {
      const response = await uploadVideoApi(video)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        toast.success('Video Upload Successfully')
        uploadVideoStatus(response.data)
        setVideo({
          id: "",
          caption: "",
          imageUrl: "",
          embedLink: ""

        })
        handleClose()
      }
      else {
        console.log(response);
        toast.error('Something went wrong')
      }
    }
  }





  return (

    <>

      <div className='d-flex align-items-center'>
        <h5 className='me-3 mt-3'>Upload New Videos</h5>
        <button onClick={handleShow} className='btn'> <i style={{ color: 'dodgerblue' }} class="fa-solid mt-3 fa-2x fa-cloud-arrow-up"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'dodgerblue' }}>Upload Videos <i style={{ color: 'white' }} class="fa-solid fa-film"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'white' }}>
          <p>Please fIll the Form  </p>
          <Form className='rounded p-3 border border-dark' style={{}}>

            <Form.Group className='mb-3' >
              <Form.Control type="text" placeholder=" Enter The Video ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-3' >
              <Form.Control type="text" placeholder=" Enter The Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-3' >
              <Form.Control type="text" placeholder=" Enter The Video Image URL" onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })} />
            </Form.Group>
            <Form.Group className='mb-3' >
              <Form.Control type="text" placeholder=" Enter The YouTube Video Link" onChange={(e) => getEmbedLink(e)} />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <button className='btn rounded btn-danger ' onClick={handleClose}>
            Cancel
          </button>
          <button onClick={handleUpload} className='btn rounded btn-primary' >Upload</button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>

  )
}
/* <iframe width="714" height="402" src="https://www.youtube.com/embed/-wsUda-cngw" title="RCB Insider Show with Mr. Nags ft. Shreyanka Patil | WPL 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
export default Add