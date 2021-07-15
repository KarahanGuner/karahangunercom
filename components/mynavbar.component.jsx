import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/Navbar.module.css';

const MyNavbar = () => {
    return(
        <Navbar collapseOnSelect expand="sm" className={styles.navbar} variant="dark">
            <Container fluid="md">
            <Navbar.Brand href="/">Karahan Güner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;