import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';
import { read_cookie } from 'sfcookies';
import Ext from '../core/Ext';

class RegistrarUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            estadoboton: true,
            usuario: '',
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            documento: '',
            ciudad: '',
            nacimiento: '',
            emai: '',
            ocupacion: '',
            contrasena: '',
            rol: '',
            id_compania_post: ''
        };
    }

    componentDidMount() {
        const jwt = require("jsonwebtoken");
        const token = read_cookie('jwt');
        const decode = jwt.decode(token);
        this.setState({ id_compania_post: decode.data.id_compania });
    }

    generarContrasena = () => {
        let random = Ext.generarContrasena();
        this.setState({ random:random, contenidoCon: true });
    }

    estadoBoton = () => {
        if (this.state.contenidoCon) {
            this.setState({ estadoboton: false });
        }
    }

    render() {
        return(
            <MDBContainer className="mt-5 col-md-11" >
                <MDBCard>
                    <MDBCardHeader style={{ background: '#34c3ff', color: 'white' }} ><h4>Registrar usuario</h4></MDBCardHeader>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Nombre Usuario"
                                            icon="users"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="usuario"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Primer Nombre"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="primerNombre"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Primer Apellido"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="primerApellido"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Documento"
                                            icon="id-badge"
                                            group
                                            type="number"
                                            range="5"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="documento"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Nacimiento"
                                            icon="birthday-cake"
                                            group
                                            type="date"
                                            range="5"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="nacimiento"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Ocupacion"
                                            icon="users-cog"
                                            group
                                            type="text"
                                            range="5"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="ocupacion"
                                            onChange={this.obtenerDatos}
                                        />
                                    </div>
                                </form>
                            </MDBCol>
                            <MDBCol md="6" >
                                <form>
                                    <div className="grey-text" >
                                        <MDBInput
                                            label="Segundo Nombre"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="segundoNombre"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Segundo Apellido"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="segundoApellido"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Ciudad"
                                            icon="city"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="ciudad"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Email"
                                            icon="users"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            name="email"
                                            onChange={this.obtenerDatos}
                                        />
                                        <MDBInput
                                            label="Contraseña"
                                            icon="lock"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            disabled
                                            value={this.state.random}
                                            name="contrasena"
                                        />
                                        <MDBBtn onClick={this.generarContrasena} outline color="info" >Generar contraseña</MDBBtn>
                                        <div className="custom-control custom-checkbox pl-3">
                                            <input 
                                                className="custom-control-input" 
                                                onClick={this.estadoBoton} 
                                                type="checkbox"
                                                value=""
                                                id="invalidCheck"
                                            />
                                            <label className="custom-control-label" htmlFor="invalidCheck">
                                                He copiado la contraseña generada
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                        <hr style={{ border: 'solid 0.2px #D6D6D6' }} />
                        <MDBContainer>
                            <select onChange={this.obtenerDatos} className="browser-default custom-select">
                                <option>--ROL--</option>
                                <option name="admin" value="admin">admin</option>
                                <option name="option2" value="option2">Option 2</option>
                                <option name="option3" value="option3">Option 3</option>
                            </select>
                        </MDBContainer>
                        <br />
                        <MDBContainer className="text-center" >
                            <MDBBtn onClick={this.prepararDatos} disabled={this.state.estadoboton} outline color="success">
                                Registrar usuario <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default RegistrarUsuario;