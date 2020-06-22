module.exports = function(application){

	application.get('/supermercados', function(req, res){
		
		application.app.controllers.supermercados.supermercados(application, req, res);

	});

	application.post('/cadastrar', function(req, res){
		
		application.app.controllers.supermercados.cadastrar(application, req, res);

	});


}