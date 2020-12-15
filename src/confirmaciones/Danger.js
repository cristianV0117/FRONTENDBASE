import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, ModalFooter }
from 'mdbreact';

class Danger extends Component {

state = {
	modal3:true
}

toggle = nr => () => {
	let modalNumber = 'modal' + nr
	this.setState({
	  [modalNumber]: !this.state[modalNumber]
	});
	ReactDOM.unmountComponentAtNode(document.getElementById('prueba'));
}

render() {
  return (
		<MDBContainer id="prueba" >
			<MDBModal size="lg" className="modal-notify modal-danger text-white" side position="bottom-right" backdrop={false} isOpen={this.state.modal3} toggle={this.toggle(3)}>
				<MDBModalHeader tag="p" toggle={this.toggle(3)}>
					Error en credenciales <strong>Usuario o contraseña</strong>
				</MDBModalHeader>
				<MDBModalBody>
					{this.props.mensaje}
				</MDBModalBody>
				<ModalFooter className="justify-content-center" >
					<MDBBtn onClick={this.toggle(3)} color="danger" outline  >Aceptar</MDBBtn>
				</ModalFooter>
			</MDBModal>
		</MDBContainer>
    );
  }
}

export default Danger;