import React, { Component } from "react";
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBContainer, MDBEdgeHeader, MDBCardImage, MDBCardText, MDBBtn, MDBNavLink, MDBAnimation } from
    "mdbreact";
//
import EdgeList from './EdgeList';

class Edege extends Component {
    render() {
        return (
            <div>
                <MDBEdgeHeader color="blue-gradient"></MDBEdgeHeader>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol md="12" lg="12" className="mx-auto float-none white z-depth-1 py-1 px-1">
                            <MDBCardBody>
                                <MDBCardTitle></MDBCardTitle>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBAnimation type="bounceInLeft" duration="2s" >
                                            <MDBCol id="id" >
                                                <MDBCardImage
                                                    src="https://image.freepik.com/vector-gratis/empresario-joven-dibujos-animados-que-presenta-puntero_29190-4757.jpg"
                                                    waves
                                                    zoom
                                                    id="imgcard"
                                                />
                                            </MDBCol>
                                        </MDBAnimation>
                                        <MDBCol>
                                            <MDBAnimation type="bounceInUp" duration="2s" >
                                                <MDBCardText className="text-justify" tag="h5">
                                                    <strong>
                                                        Bienvenido a nuestra plataforma!
                                                        Profavor lee las condiciones de uso de este sistema
                                                        antes de continuar!
                                                    </strong>
                                                    <br />
                                                    <MDBBtn className="mt-3 w-100" outline color="info">Condiciones de uso</MDBBtn>
                                                    <MDBNavLink to="/login" >
                                                        <MDBBtn className="mt-3 w-100" outline color="success">Iniciar sesion</MDBBtn>
                                                    </MDBNavLink>
                                                </MDBCardText>
                                            </MDBAnimation>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                                <hr />
                                < EdgeList />
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
            </div>
        );
    }
}

export default Edege;