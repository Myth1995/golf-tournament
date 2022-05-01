import * as React from 'react';

import Logo from '../assets/img/logo/logo.png';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    const [showFlag, setShowFlag] = React.useState(false);
    React.useEffect(()=>{
        const session = window.localStorage.user_name;
        if(session === "" || session === null) {
            setShowFlag(false);
        }
        else {
            setShowFlag(true);
        }
    }, []);

    const onLogout = () => {
        window.localStorage.user_name = "";
        window.localStorage.email = "";
        window.localStorage.hp_num = "";
        window.location.href = "/";
    }

    return (    
        <section className='header' id='header'>
            <div className='container'>
                <div className='header'>
                    <Navbar expand="lg" className='justify-content-left'>
                        <div className='w-100'>
                            <div className='d-flex flex-row align-items-center'>
                                <Navbar.Brand href="/"><img className='logo-img' src={Logo} height={80} alt='logo'/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler bg-light ms-auto' />
                            </div>
                            <Navbar.Collapse color='white' id="basic-navbar-nav" className='mt-3 align-self-end justify-content-start'>
                                <Nav className="m-nav align-items-center">
                                    {
                                        showFlag ?
                                            <Nav.Link className='n-link' href="/admin">ADMIN</Nav.Link>
                                        :
                                            <Nav.Link className='n-link' href="/">HOME</Nav.Link>
                                    }
                                    <Nav.Link className='n-link' href="/signup">SIGNUP</Nav.Link>
                                    {showFlag && <Nav.Link className='n-link' href="/profile">PROFILE</Nav.Link>}
                                    {showFlag && <Nav.Link className='n-link' href="/register">REGISTER</Nav.Link>}
                                    {showFlag && <Nav.Link className='n-link logout' onClick={()=>{ onLogout(); }}>LOGOUT</Nav.Link>}
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