'use strict'
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')
//conection to our bbdd local

const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};
//conection
mongoose.connect(config.db, options).then(
    ()=>{console.log('conectado a MongoDB') },
    err =>{console.log(err)}
);


app.listen(config.port,() => {
    console.log('Escuchando el puerto:'+ config.port);
    });
