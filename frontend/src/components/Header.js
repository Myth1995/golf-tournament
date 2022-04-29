import * as React from 'react';

import { Button } from '@mui/material';
import Logo from '../assets/img/logo/logo.png';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (    
        <section className='header' id='header'>
            <div className='container'>
                <div className='header'>
                    <Navbar expand="lg" className='justify-content-left'>
                        <div className='w-100'>
                            <div className='d-flex flex-row align-items-center'>
                                <Navbar.Brand href="/" className='mt-3'><img className='logo-img' src={Logo} height={80} alt='logo'/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler bg-light ms-auto' />
                            </div>
                            <Navbar.Collapse color='white' id="basic-navbar-nav" className='mt-3 align-self-end justify-content-start'>
                                <Nav className="m-nav align-items-center">
                                    <Nav.Link className='n-link' href="/">HOME</Nav.Link>
                                    <Nav.Link className='n-link' href="/register">REGISTER</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
            </div>
        </section>
    )
}

export default Header;