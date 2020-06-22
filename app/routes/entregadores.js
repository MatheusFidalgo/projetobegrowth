module.exports = function(application){

	application.get('/entregadores', function(req, res){
		
		application.app.controllers.entregadores.entregadores(application, req, res);

	});

}