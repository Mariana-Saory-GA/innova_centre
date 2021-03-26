var  mysql = require('mysql');

var conexion = mysql.CreateConnecton({
    host: 'localhost',
    database: 'u800472120_BinnovaD',
    user: 'u800472120_centreBD',
    password: '7jaulRZH^L'
});

conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('Conexión realizada correctamente');
    }
});