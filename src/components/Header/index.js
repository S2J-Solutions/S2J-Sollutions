import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap'

import './index.css'

class Header extends Component{
    render(){
        return(
            <Navbar  bg="dark" variant="dark" expand="lg" className="bg-primary-color font-style__Maven-Pro">
                <Container className='navbar-main'> 
                    <Navbar.Brand style={{fontWeight:700}} href="/">S2J Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" ><i style={{color:'#fff'}}class="bi-list"></i></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-main1">
                        <Nav.Link as={Link} to="/" style={{color:'#fff'}} >Home</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:'#fff'}}>It Staffing</Nav.Link>
                        <Nav.Link as={Link} to="/"  style={{color:'#fff'}}>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:'#fff'}}>Carrer</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:'#fff'}}>Training</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:'#fff'}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header