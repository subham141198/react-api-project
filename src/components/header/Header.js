import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import "./header.css"

export class Header extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand className='nav-heading' href="#home">Knowledge Cafe</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login"><Image className="img-fluid imgSize"  src="https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" roundedCircle/></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header