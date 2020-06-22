function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);   
        });
        mongoclient.close();
    });
}

UsuariosDAO.prototype.recuperarDados = function(res){
    this._connection.open( function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            var ordem = {data: 1}
            dadosprodutos = collection.find().sort(ordem).toArray(function (err, result){
                console.log(result);
                res.status(200).render('entregadores', {infos: result});
                
            });
        });
        mongoclient.close();
    });
}


module.exports = function(){
    return UsuariosDAO;
}