import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import Log from '../core/Log';
import Fetch from '../core/Fetch';
import { delete_cookie } from 'sfcookies';
import { Redirect } from 'react-router-dom';

class Out extends Component {
    
    constructor(props)
    {
        super(props)
        this.state = {
            out:false
        };
    }

    out = (props) =>
    {
        Fetch('https://intranet.api/out',null,'GET').then(consumible => {
			if (consumible !== 'error') {
                delete_cookie('jwt');
                Log.logOut(() => {
                    this.setState({ out:true })
                    window.location.reload();
                });
			} else {
				console.log(consumible);
            }
		})
    }

    render() {
        if (this.state.out) {
            return(
                <Redirect to="/" />
            );
        } else {
            return (
                <div>
                    <MDBBtn onClick={this.out} outline color="danger" >Cerrar sesion</MDBBtn>
                </div>
            );
        }
       
    }
}

export default Out;