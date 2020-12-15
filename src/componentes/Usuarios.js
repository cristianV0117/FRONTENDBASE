import React, { Component } from 'react';
import { MDBDataTable, MDBContainer, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';
import Fetch from '../core/Fetch';
import { read_cookie } from 'sfcookies';
import { Redirect } from 'react-router-dom';

class Usuarios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: '',
			items: [],
			loaded: false,
			mensaje: '',
			status: '',
			error: false
		}
	}

	componentDidMount() {
		this.cargarDatos();
	}

	cargarDatos() {
		Fetch('https://maapi.api/api/v1/humans', null, 'GET', read_cookie('jwt')).then(consumible => {
			if (!consumible.error) {
				if (consumible.status === 200) {
					this.setState({
						loaded: true,
						status: consumible.status
					});
					this.dataTable(consumible);
				} else {
					this.setState({
						loaded: true,
						mensaje: consumible.info,
						status: consumible.status
					});
				}
			} else {
				this.setState({
					error: true,
					loaded: true
				})
			}
		});
	}

	dataTable(consumible) {
		let arreglo = [];
		for (let index = 0; index < consumible.message.length; index++) {
			arreglo.push({
				Usuario		   :consumible.message[index].usuario,
				Primer_Nombre  :consumible.message[index].primer_nombre,
				Primer_apellido:consumible.message[index].primer_apellido,
				Ciudad		   :consumible.message[index].ciudad,
				Email		   :consumible.message[index].email,
				Rol			   :consumible.message[index].rol
			});
		}
		this.setState({
			info:
			{
				columns: [
					{
						label: <strong>Usuario</strong>,
						field: 'Usuario',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Primer Nombre</strong>,
						field: 'Primer_Nombre',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Primer Apellido</strong>,
						field: 'Primer_apellido',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Ciudad</strong>,
						field: 'Ciudad',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Email</strong>,
						field: 'Email',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Rol</strong>,
						field: 'Rol',
						sort: 'asc',
						width: 150
					},
					{
						label: <strong>Acciones</strong>,
						field: 'Desplegable',
						sort: 'asc',
						width: 100
					}
				],
				rows:arreglo
			}
		})
	}

	render() {
		if (!this.state.error) {
			if (this.state.status === 200) {
				return (
					<MDBContainer className="mt-5 col-md-12" >
						<MDBCard>
							<MDBCardHeader style={{background:'#4285f4', color:'white'}} >Usuarios</MDBCardHeader>
							<MDBCardBody>
								<MDBDataTable
									responsive
									infoLabel={["Mostrar", "a", "de", "registros"]}
									searchLabel="Buscar"
									striped
									bordered
									hover
									entriesLabel="Mostrar registros"
									paginationLabel={["Anterior", "Siguiente"]}
									data={this.state.info}
								/>
								<hr />
							</MDBCardBody>
						</MDBCard>
						<hr />
					</MDBContainer>
				);
			} else if (this.state.status === '401') {
				return (
					<Redirect to="/seguridad" />
				);
			}  else {
				return <div></div>
			}
		} else {
			return (
				<Redirect to="/error" />
			);
		}
	}
}

export default Usuarios;