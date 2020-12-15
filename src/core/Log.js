class Log
{
	constructor()
	{
		this.statusSesion = '';
	}

	login(cb, consumible)
	{
		localStorage.setItem('s',true);
		cb()
	}

	logOut(cb)
	{
		localStorage.clear();
		cb()
	}

	siEstaLogeado()
	{
		return this.auth;
	}

}

export default new Log();