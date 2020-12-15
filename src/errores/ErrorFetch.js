import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBNavLink } from 'mdbreact';

class ErrorFetch extends Component
{
	render()
	{
		return(
			<MDBContainer className="col-md-10 mt-3">
				<MDBCard>
					<MDBCardImage className="img-fluid w-100" src="https://static.vecteezy.com/system/resources/previews/000/263/176/non_2x/vector-deep-western-desert.jpg" zoom/>
					<MDBCardBody>
					<MDBCardTitle>
						UPS!
						Estamos trabajando en la plataforma :(
						<br />
						<br />
						<strong>Para mas informacion contacta al 018000125442.</strong>
					</MDBCardTitle>
					<MDBNavLink to="/" >
						<MDBBtn>
							Ir al Home
						</MDBBtn>
					</MDBNavLink>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
		);
	}
}

export default ErrorFetch;