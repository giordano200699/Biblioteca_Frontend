// Instalar el servidor express
const express = require ('express');
const app = express();
var bodyParser = require('body-parser');
const path = require ('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);


// Servir solo los archivos estáticos del directorio dist
app.use (express.static (__dirname + '/dist/fisilib'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get ('/prueba', function(req, res){
    res.sendFile (path.join(__dirname + '/dist/prueba.html'));
});

app.post ('/evento', function(req, res){
    io.emit(req.body.nombreEvento, req.body.contenidoEvento);
    res.sendFile (path.join(__dirname + '/dist/prueba.html'));
});


app.get ('/*', function(req, res){
    
res.sendFile (path.join(__dirname + '/dist/fisilib/index.html'));
});

io.on('connection', function(socket){
    console.log('Un usuario conectado');
    io.emit('some event', { for: 'Me he conectado' });

  });


// Inicie la aplicación escuchando en el puerto Heroku predeterminado
http.listen (process.env.PORT || 8080,function(){
    console.log('Escuchando en el puerto 8080');
});