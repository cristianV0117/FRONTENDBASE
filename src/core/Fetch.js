const Fetch = (url, datos, tipo, auth) => {
	if (tipo === 'GET')
		return fetch(url,{
			'headers'    :{
				'Authorization': '6328f7bce36de4abe24ac1b984849a37',
				'JwtAuthorization' : auth
			}
		}).then(datos => {
			return datos.json();
		}).catch(error => {
			return 'error';	
		});
	else
		return fetch(url,{
			'method' 	 :'POST',
			'headers'    :{
				'Content-Type' : 'application/json',
				'Authorization': '6328f7bce36de4abe24ac1b984849a37'
			},
			'body'       :JSON.stringify(datos),
		}).then(datos => {
			return datos.json();
		}).catch(error => {
			return error;
		});
}

export default Fetch;