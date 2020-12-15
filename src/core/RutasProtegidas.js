import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const RutasProtegidas = ({ component: Component, ...rest  }) => {
	return (
		<Route {...rest} render={
			(props) => {
				if (localStorage.getItem('s')) {
					return <Component {...props}/>
				} else {
					return <Redirect to={{
							pathname: "/",
							state: {
								from: props.location
							}
						}}
					/>
				}
		
			}}
		/>
	);
};