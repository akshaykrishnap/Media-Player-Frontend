import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
const navigate = useNavigate() // hook


  return (

    <>

      <Row className='d-flex justify-content-center align-items-center mt-5'>

        <Col lg={1}></Col>

        <Col lg={5}>
          <h3>Welcome to <span style={{ color: 'DodgerBlue' }}>Media Player</span></h3><br />
          <p className='mt-3' style={{ color: 'white' }}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus aliquam aliquid dolor! Praesentium sed natus exercitationem facere illo officiis sequi. Similique accusamus ad iste ducimus, natus odit obcaecati at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eum iste quasi earum ipsa vel minus fugit voluptatem architecto tempore, minima sunt hic beatae deserunt tempora ipsum commodi quae? Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem tempora ad natus odio incidunt a voluptates possimus, similique porro minima et quo eos doloribus. Eos ut fugit dolor dolorum!</p>
          <br />

          <button onClick={()=>navigate('/home')} className='rounded mt-5 btn btn-primary'>Get Started <i style={{ color: 'white' }} class="fa-solid fa-arrow-right"></i></button>
        </Col>

        <Col lg={1}></Col>

        <Col lg={5}>
          <img src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif" alt="" />
        </Col>

      </Row>

      <div className="container d-flex justify-content-center align-items-center mb-5 flex-column">
        <h3 style={{color:'DodgerBlue'}}>Features</h3>
        <div className="container d-flex justify-content-center align-items-center  ">

          <Card className='p-4 m-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{width:'100',height:'300px'}} src="https://64.media.tumblr.com/6bb79faf55461ee01a87d5bedb9081f1/tumblr_onn734q6Rv1ue08b9o1_540.gif" />
            <Card.Body>
              <Card.Title className='justify-content-center align-items-center text-align-center' style={{color:'white'}}>Managing Video</Card.Title>
            
              <Card.Text>
              
              </Card.Text>

            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{width:'100',height:'300px'}} src="https://i.gifer.com/embedded/download/7d20.gif" />
            <Card.Body>
              <Card.Title className='justify-content-center align-items-center text-align-center' style={{color:'white'}}>Categorized Video</Card.Title>
              <Card.Text>
              
              </Card.Text>

            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{width:'100',height:'300px'}} src="https://i.gifer.com/44zG.gif" />
            <Card.Body>
              <Card.Title className='justify-content-center align-items-center text-align-center' style={{color:'white'}}>Watch History</Card.Title>
              <Card.Text>
              
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>

<div className="container border d-flex justify-content-center align-items-center m-5 ">
<div >
<h2 style={{color:'DodgerBlue'}} >Simple fast and Powerfull</h2><br />
<span style={{fontSize:'25px',color:'white'}}>Play Everything : </span><p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus non voluptates distinctio tenetur consectetur ut, quia voluptate inventore accusantium perspiciatis! Fugit esse dolores corporis sequi iure minima et accusantium?</p><br />
<span style={{fontSize:'25px',color:'white'}}>Play Everything : </span><p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus non voluptates distinctio tenetur consectetur ut, quia voluptate inventore accusantium perspiciatis! Fugit esse dolores corporis sequi iure minima et accusantium?</p><br />
<span style={{fontSize:'25px',color:'white'}}>Play Everything : </span><p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus non voluptates distinctio tenetur consectetur ut, quia voluptate inventore accusantium perspiciatis! Fugit esse dolores corporis sequi iure minima et accusantium?</p><br />

</div>

<div>
<iframe width="714" height="500" src="https://www.youtube.com/embed/VU23OPQ1Pmc?list=RDVU23OPQ1Pmc" title="Sai Abhyankkar - Katchi Sera (Music Video) | Samyuktha | Ken Royson | Think Indie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>


    </>

  )
}

export default LandingPage