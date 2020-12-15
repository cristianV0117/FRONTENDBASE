import React, { Component } from 'react';
import { MDBAnimation, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdbreact';

class EdgeList extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            load: false,
            duration:'3s',
            type:'rollIn'
        }
        this.ventana = this.ventana.bind(this);
    }

    componentDidMount()
    {
        this.ventana();
    }

    ventana()
    {
        setTimeout(
            function() {
                this.setState({type: 'pulse', duration:'2s'});
            }
            .bind(this),
            3000
        );
    }

    cambio()
    {
        
    }
    
    render() {
        return (
            <MDBAnimation type={this.state.type} duration={this.state.duration} infinite>
                <MDBContainer className="mt-5 text-white" >
                    <MDBRow>
                        <MDBCol className="col-md-3" >
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-md-3" >
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-md-3" >
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-md-3" >
                            <MDBCard>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
        );
    }
}

export default EdgeList;