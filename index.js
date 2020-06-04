  
//importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');


//Sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta que vamos a usar
app.use('/', pintoresRouter);

//Conexión con mongo db

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Toledo:12345@carrillojocelyn-30xm9.mongodb.net/examen final?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexión lista :D');
})
    .catch(err=> console.log(err));


//Arrancar el servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});



