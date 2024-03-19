import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {


  return (

    <div className='w-100 justify-content-center align-items-center d-flex' >

      <div className="row " >
<div className=" website col-md-3  justify-content-center">

<FontAwesomeIcon icon={faVideo}  style={{color:'DodgerBlue',fontSize:'30px'}} />{' '}
          <span style={{color:'DodgerBlue',fontSize:'30px'}}>  Video Player</span><br /><br />
<span style={{color:'DodgerBlue',fontSize:'15px'}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vel pariatur est! Minus doloremque eum animi quo, aut harum deserunt tenetur error quibusdam magnam quisquam recusandae, ut veritatis! Unde, officia.</span>
</div>

<div className="links col-md-2">
  <h1 style={{color:'DodgerBlue',fontSize:'30px'}} >Links</h1>
  <div>
<a href=""  className='text-decoration-none'><Link style={{color:'DodgerBlue'}}  to={'/'} >Landing page</Link> </a><br />
    <a href=""    className='text-decoration-none'><Link style={{color:'DodgerBlue'}} to={'/home'}>Home Page</Link></a><br />
    <a href="" className='text-decoration-none'><Link style={{color:'DodgerBlue'}}    to={'/watchHistory'}>Watch History</Link></a><br />
</div>
</div>

<div className=" Guides col-md-2">
  <h1 style={{color:'DodgerBlue',fontSize:'30px'}} >Guides</h1>
 
<div>
<a href="" style={{color:'DodgerBlue'}}   className='text-decoration-none'>React</a><br />
    <a href="" style={{color:'DodgerBlue'}}   className='text-decoration-none'>React Bootstrap</a><br />
    <a href="" style={{color:'DodgerBlue'}}   className='text-decoration-none'>Bootswatch</a><br />
</div>
  

</div>

<div className="col-md-5 contact">
<h1 style={{color:'DodgerBlue',fontSize:'30px'}}>Contact Us</h1><br />
<div className='d-flex'>
<input className='rounded form-control w-50' type="text" /> 
<button className='rounded m-2 btn btn-primary'>Subscribe</button> <br />
</div>

<div>
<a href="" className='text-decoration-none'> <i  style={{color:'DodgerBlue'}} class="fa-brands fa-2x m-2 fa-instagram"></i> </a> 
<a href="" className='text-decoration-none'> <i style={{color:'DodgerBlue'}} class="fa-brands fa-2x m-2 fa-twitter"></i></a>
<a href="" className='text-decoration-none'> <i style={{color:'DodgerBlue'}} class="fa-brands fa-2x m-2 fa-linkedin"></i></a>
<a href="" className='text-decoration-none'> <i style={{color:'DodgerBlue'}} class="fa-brands fa-2x m-2 fa-facebook"></i> </a>
</div>
</div>

      </div>


    </div>
    
  )
}

export default Footer