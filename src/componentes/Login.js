import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bake_cookie } from 'sfcookies';
import { MDBContainer,MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
//
import Danger from '../confirmaciones/Danger';
import Log from '../core/Log';
import Fetch from '../core/Fetch';

class Login extends Component
{
    constructor(props)
	{
		super(props);
		this.state = {
			usuario: '',
			pass   : '',
			mensaje: '',
			status : '',
			loaded : '',
			error  : '',
            errorFetch : false,
            errorLogin: false
		};
	}
    
    obtenerDatos = (evento) => {
		this.setState({
			[evento.target.name]: evento.target.value
        });
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        event.target.className += " was-validated";
        const data = {
			'username' : this.state.usuario,
			'password' : this.state.pass
        };
        Fetch('https://maapi.api/api/v1/login',data,'POST').then(consumible => {
			if (consumible !== 'error') {
				if (consumible.status === 200) {
					this.cookie(consumible.jwt);
					Log.login(() => {
                        this.props.history.push('/dashboard');
                        window.location.reload();
					}, consumible);
				} else {
                    const element = <Danger mensaje={consumible.message} />
                    ReactDOM.render(
                        element,
                        document.getElementById('prueba')

                    );
				}
			} else {
				this.setState({
					errorFetch :true,
					loaded:true
				})
			}
			
		})
    }

    cookie(jwt)
	{
		bake_cookie('jwt', jwt);
	}
    
    render()
    {
        if(!this.state.errorFetch) {
            return(
                <MDBContainer  className="mt-5 col-md-6">
                    <MDBCard>
                        <MDBCardBody>
                            <form onSubmit={this.handleSubmit} >
                                <p className="h4 text-center py-4">Ingresa a la plataforma</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Nombre de usuario..."
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="usuario"
                                        onChange={this.obtenerDatos}
                                        value={this.state.usuario}
                                        required
                                    />
                                    <MDBInput
                                        label="Contraseña..."
                                        icon="eye"
                                        group
                                        type="password"
                                        validate
                                        name="pass"
                                        onChange={this.obtenerDatos}
                                        value={this.state.pass}
                                        required
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn 
                                        color="cyan"
                                        type="submit"
                                    
                                    >
                                        Ingresar
                                    </MDBBtn>
                                </div>
                                <div id="prueba"></div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            );
        } else {
            return <Redirect to="/error" />
        }
    }
}

export default Login;