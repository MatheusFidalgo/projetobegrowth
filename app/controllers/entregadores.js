module.exports.entregadores = function(application, req, res){
	

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.recuperarDados(res);


}