import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBIcon, MDBBadge, MDBCol, MDBRow, MDBModalHeader, ModalFooter }
from 'mdbreact';

class ModalPage extends Component {
state = {
  modal3: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(3)}>Launch MDBModal</MDBBtn>
        <MDBModal size="lg" className="modal-notify modal-danger text-white" side position="bottom-right" backdrop={false}
          isOpen={this.state.modal3} toggle={this.toggle(3)}>
          <MDBModalHeader tag="p" toggle={this.toggle(3)}>
            Discount offer: <strong>10% off</strong>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol size="3" className="d-flex justify-content-center align-items-center">
                <MDBIcon size="4x" icon="gift" className="ml-1" />
              </MDBCol>
              <MDBCol size="9">
                <p>Sharing is caring. Therefore, from time to time we like to give our visitors small gifts. Today is one of
                  those days.</p>
                <p><strong>Copy the following code and use it at the checkout. It's valid for <u>one day</u>.</strong></p>
                <h3>
                  <MDBBadge color="danger">v52gs1</MDBBadge>
                </h3>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <ModalFooter className="justify-content-center">
            <MDBBtn color="danger" onClick={this.toggle(3)}>Get it now
              <MDBIcon far icon="gem" className="ml-1 white-text" />
            </MDBBtn>
            <MDBBtn color="danger" outline onClick={this.toggle(3)}>No, thanks</MDBBtn>
          </ModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;