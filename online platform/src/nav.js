import React from 'react';
import{Link}from'react-router-dom':
import Container from'react-bootstrap/Container':
import Nav from 'react-bootstrap/Navbar';
function Menu(){
    const handleScroll=()=>{
        window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'};)
    };
    return(
        <Navbar bg="success"data-bs-theme="dark">
            <img src=""></img>
            <h3>Online Learning </h3>
            <container>
                <Navbar.toggle aria-controls="basic-navbar-nav"/>
                <Navbar.collapse id="basic navbar-nav">
                <Link to="/ "className="nav-link"onclick={handlescroll}>
                        <h4>Home</h4>
                    </Link>
                   
                <Link to="/ "className="nav-link"onclick={handlescroll}>
                        <h4>CoursesList</h4>
                    </Link>
                </Navbar.collapse>
            </container>
        </Navbar>
    )
}
export default Menu;