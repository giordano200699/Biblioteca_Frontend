// Instalar el servidor express
const express = require ('express');
const path = require ('path');

const app = express ();

// Servir solo los archivos estáticos del directorio dist
app.use (express.static (__dirname + '/dist/fisilib'));

app.get ('/*', function(req, res){
    
res.sendFile (path.join(__dirname + '/dist/fisilib/index.html'));
});

// Inicie la aplicación escuchando en el puerto Heroku predeterminado
app.listen (process.env.PORT || 8080);