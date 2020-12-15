import React, { Component } from 'react';

class ErrorSeguridad extends Component
{
	render()
	{
		return(
			<div className="card text-white bg-danger mb-3" >
				<div className="card-header" >Alerta!</div>
				<div className="card-body" >
					<p className="card-title">{ this.props.mensaje }</p>
				</div>
			</div>
		);
	}
}

export default ErrorSeguridad;