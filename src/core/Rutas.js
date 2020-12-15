import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {RutasProtegidas} from './RutasProtegidas';
//
//
import Home  from      '../componentes/Home';
import Login from 	   '../componentes/Login';
import Dashboard from  '../componentes/Dashboard';
import ErrorFetch from '../errores/ErrorFetch';
import ErrorSeguridad from '../errores/ErrorSeguridad';
//
import Usuarios from '../componentes/Usuarios';
import RegistrarUsuarios from '../componentes/RegistrarUsuario';

class Rutas extends Component
{
	render()
	{
		return(
			<Switch>
					<Route exact path='/'   component={Home} 	   />
					<Route path='/Login'    component={Login}      />
					<Route path='/error'    component={ErrorFetch}   />
					<Route path="/seguridad"    component={ErrorSeguridad} /> 
					<RutasProtegidas path='/dashboard' component={Dashboard} />
					<RutasProtegidas exact path='/usuarios'  component={Usuarios}  />
					<RutasProtegidas path='/usuarios/registrar' component={RegistrarUsuarios} />
					<Route path="*"         component={() => " No se encuentra lo que estas buscando :( "} /> 	
			</Switch>		
		);	
	}
}
export default Rutas;