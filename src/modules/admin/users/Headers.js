import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img alt=""
                     src="/logo.svg"
                     width="30"
                     height="30"
                     className="d-inline-block align-top" />
                     Mantenimiento Usuarios
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;