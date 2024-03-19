import React, { useEffect } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import VideoCard from '../Componets/VideoCard'
import { toast } from 'react-toastify';
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getVideoAPI, updateCategory } from '../services/allAPI';


function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) {

  // State to store category

  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addcategory, setAddCategotyStatus] = useState(false)         // automatic add refresh
  const [categoryDelete, setDeleteCategoryStatus] = useState(false)    // automatic delete refresh

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handelCategoryAdd = async () => {

    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []
      }

      const response = await addCategoryAPI(reqBody)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Category added Successfully')
        setAddCategotyStatus(true)
        handleClose()
      }
      else {
        toast.error('Oops.. Something went wrong')
      }
    }

    else {
      toast.error('Oops Please Enter Category')

    }

  }


  // function to get category

  const getAllCategory = async () => {
    const response = await getCategoryAPI()
    /* console.log(response.data); */
    setAllCategory(response.data)    // automatic add refresh
  }

  console.log(allCategory);


  // function to delete category

  const handleDeleteCategory = async (id) => {
    await deleteCategoryAPI(id)
    setDeleteCategoryStatus(true)     // automatic delete refresh
    toast.error('Deleted Category')
  }


  // function to prevent the data lose during drag

const dragOver =(e)=>{
  e.preventDefault()
}



// function to drop data
const videoDrop = async(e,categoryId)=>{
  console.log(`Category id is ${categoryId}`);

  // GET the videoid send from the videocard component
  const videoid =e.dataTransfer.getData("VideoID")
  console.log(`Video is ${videoid}`);

  // to store data into categotry in json server that is been dragged
       const {data}= await getVideoAPI(videoid)
       console.log(data);


  // selected category
  const selectedCategory = allCategory.find((item)=>item.id==categoryId)
  console.log(selectedCategory);

  if (selectedCategory.allVideos.find(item=>item.id==videoid)) {
    toast.warning('Opps Video Already Exist')
  }
  else{
    selectedCategory.allVideos.push(data)
  }

  
  // function to update category
  await updateCategory(categoryId,selectedCategory)
  getAllCategory()

}

// function to delete cards from category
const dragStart =(e,categoryId,videoid)=>{
  console.log(`Category id is ${categoryId} `);
  console.log(`Video id is ${videoid} `);

let dataShared = {
  categoryId,videoid
}
e.dataTransfer.setData("dataShared", JSON.stringify(dataShared))

}

  
  useEffect(() => {
    getAllCategory()
    setAddCategotyStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
  }, [addcategory, categoryDelete,videoDragAndRemoveStatus])  // automatic add & delete refresh



  return (

    <>
      <div className='d-flex justify-content-center align-items-centre'>
        <button onClick={handleShow} className='btn btn-primary'>Add New Category </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'dodgerblue' }}><i style={{ color: 'white' }} class="fa-solid fa-pencil"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'white' }}>
          <p>Category Name  </p>
          <Form.Group className='mb-3' >
            <Form.Control type="text" onChange={(e) => setCategoryName(e.target.value)} placeholder=" Enter The Video Category" />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <button className='btn rounded btn-danger ' onChange={handleClose}>
            Cancel
          </button>
          <button className='btn rounded btn-primary' onClick={handelCategoryAdd} >Add</button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ?

        allCategory?.map((item) => (
          <div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
          <div className='d-flex justify-contnet-center align-items-center '>
            <p>{item.category}</p>
            <button onClick={() => handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><i style={{ color: 'white' }} class="fa-solid fa-trash-can"></i></button>
          </div>

          <Row>
           {item.allVideos.length>0?
           item.allVideos.map((card)=>( <Col sm={12} draggable onDragStart={(e)=> dragStart(e, item.id, card.id)} >

           <VideoCard displayVideo={card} isPresent={true}/>  
          </Col>))
           
            :null}
          </Row>


        </div>))

        : <p className='text-danger mt-5'>No Category Added Yet</p>
      }
    </>

  )
}

export default Category