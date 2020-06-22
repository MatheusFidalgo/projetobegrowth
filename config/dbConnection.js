/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Database foi utilizado');
    var db = new mongo.Db(
        'rappi',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017,  //porta da conexão
            {}
        ),
        {}
    )
    return db;
}

module.exports = function(){
    return connMongoDB;
}
