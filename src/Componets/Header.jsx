import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Header() {



  return (


    <div>
    
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand >
          <FontAwesomeIcon icon={faVideo} beat style={{color:'DodgerBlue',fontSize:'30px'}} />{' '}
          <span style={{color:'DodgerBlue',fontSize:'30px'}}> Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    
  )
}

export default Header