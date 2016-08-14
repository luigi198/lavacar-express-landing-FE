import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
    render() {
        return <Nav bsStyle='tabs'>
            <LinkContainer to="/home">
                <NavItem eventKey={1} className="nav-item">Inicio</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
                <NavItem eventKey={2} className="nav-item">Contáctenos</NavItem>
            </LinkContainer>
            <LinkContainer to="/aboutUs">
                <NavItem eventKey={3} className="nav-item">Sobre Nosotros</NavItem>
            </LinkContainer>
        </Nav>
    }
})
