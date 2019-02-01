module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.post('/autenticador', function(req, res){
		application.app.controllers.index.autenticador(application, req, res);
	});

}