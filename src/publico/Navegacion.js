import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavLink, MDBBtn,MDBNavItem } from "mdbreact";
import SideNav from '../componentes/Sidenav';
import { read_cookie } from 'sfcookies';
import Out from '../componentes/Out';

class Navegacion extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <MDBNavbar className="nav" dark expand="md">
                {
                    (read_cookie('jwt').length > 0) ? <SideNav /> : <div></div>
                }
                <MDBNavbarBrand>
                    <MDBNavLink to="/" >
                        <strong>H O M E</strong>
                    </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <MDBNavItem>
                        <MDBBtn href="https://empresa.zk.com.co/" color="info" outline >Informacion</MDBBtn>
                        <MDBBtn href="https://empresa.zk.com.co/" color="info" outline >Contacta al fabricante</MDBBtn>
                    </MDBNavItem>
                </MDBCollapse>
                {
                    (read_cookie('jwt').length > 0) ? <Out /> : <div></div>
                }
            </MDBNavbar>
        );
    }
}

export default Navegacion;