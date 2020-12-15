import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <br />
        <br />
        <MDBFooter style={{ background:'#34c3ff', color:"white" }} className="font-small darken-3 pt-0 navbar-fixed-bottom">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <div> ZK SAS </div>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Footer;