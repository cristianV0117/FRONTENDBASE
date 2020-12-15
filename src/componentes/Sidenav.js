import React, { Component } from 'react';
import { MDBAnimation, MDBIcon, MDBNavLink } from 'mdbreact';

class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'none',
            zIndex: '20',
            height: '0%',
            width: '0%',
            animation: 'none',
            colorSelected: '#838282',
            itemnavvisibility: 'none',
            menuop: false

        };
    }

    nav = () => {
        this.setState({
            visibility: 'block',
            height: '100%',
            width: '100%',
            animation: 'zoomInLeft'
        });
    }

    noNav = () => {
        this.setState({
            animation: 'zoomOut',
            height: '0',
            width: '0'
        });
        setTimeout(
            function () {
                this.setState({ visibility: 'none' });
            }
                .bind(this),
            700
        );
    }

    selected = () => {
        this.setState({ colorSelected: '#4285f4', itemnavvisibility: 'block' });
    }

    render() {
        return (
            <div>
                <div>
                    <MDBIcon style={{ cursor: 'pointer' }} onClick={this.nav} icon="bars" size="2x" className="ml-3 mt-2" ></MDBIcon>
                </div>
                <MDBAnimation type={this.state.animation} className="sidebar" style={{ display: this.state.visibility }}>
                    <div>
                        <div className="text-center mt-2" >
                            <img className="img-fluid" src="https://mdbootstrap.com/img/logo/mdb-transparent.png" />
                        </div>
                        <hr className="hr" />
                        <li className="item" >
                            <MDBIcon icon="user" className="col-md-12 iconmenu" >
                                <span onClick={this.selected} style={{ color: this.state.colorSelected }} className="itemmenu" >Usuarios</span>
                            </MDBIcon>
                        </li>
                        <MDBAnimation type="zoomInLeft" >
                            <MDBNavLink to="/usuarios" className="itemnav" style={{ display: this.state.itemnavvisibility, transition: '1s' }} >
                                <li className="item-son" >Todos Usuarios</li>
                            </MDBNavLink>
                            <MDBNavLink to="/usuarios/registrar" className='itemnav' style={{ display: this.state.itemnavvisibility, transition: '1s' }} >
                                <li className="item-son" >Registrar Usuarios</li>
                            </MDBNavLink>
                        </MDBAnimation>
                        <li className="item" >
                            <MDBIcon icon="user" className="col-md-12 iconmenu" >
                                <span onClick={this.selected} style={{ color: this.state.colorSelected }} className="itemmenu" >Item del menu</span>
                            </MDBIcon>
                        </li>
                        <li className="item" ><MDBIcon icon="user" className="col-md-12 iconmenu" ><span onClick={this.selected} style={{ color: this.state.colorSelected }} className="itemmenu" >Item del menu</span></MDBIcon></li>
                        <li className="item" ><MDBIcon icon="user" className="col-md-12 iconmenu" ><span onClick={this.selected} style={{ color: this.state.colorSelected }} className="itemmenu" >Item del menu</span></MDBIcon></li>
                        <li className="item" ><MDBIcon icon="user" className="col-md-12 iconmenu" ><span onClick={this.selected} style={{ color: this.state.colorSelected }} className="itemmenu" >Item del menu</span></MDBIcon></li>
                    </div>
                </MDBAnimation>
                <div onClick={this.noNav} className="all" style={{ zIndex: this.state.zIndex, height: this.state.height, width: this.state.width }}>
                </div>
            </div>
        );
    }
}

export default Sidenav;