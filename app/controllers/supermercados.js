module.exports.supermercados = function(application, req, res){
	res.status(200).render('supermercados', {validacao : {}, dadosForm:{}});
}


module.exports.cadastrar = function(application, req, res){
	
	var dadosForm = req.body;

	req.assert('produto', 'Produto não pode ser vazio.').notEmpty();
	req.assert('data', 'Data não pode ser vazio.').notEmpty();
	req.assert('local', 'Local não pode ser vazio.').notEmpty();
	
	var erros = req.validationErrors();

	if(erros){
		res.render('supermercados', {validacao: erros, dadosForm: dadosForm});
		return;
	}
	
	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	
	UsuariosDAO.inserirUsuario(dadosForm);
	
	res.send('<img src="/images/produtocadastrado.png"></img>');

}
