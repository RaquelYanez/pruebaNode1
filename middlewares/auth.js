'use strict'


const services = require('../services');

function isAuth (req, res, next){
    //comrpueba que exista authorization
    if(!req.headers.authorization){
        return res.status(403).send({msg: 'sin autorizacion'})
    }
   
    //split convierte el header en tantos elementos como espacios y queremos el segundo elemento que es el token
    const token = req.headers.authorization.split(" ")[1]
    //services con la promesa de authorization token le pasamos el ^token^
    services.decodeToken(token)
        .then(response =>{
            req.user =response
            next()
        })
        .catch(response =>{
            res.status(response.status)
        })

    next(); //para pasar al siguiente middleware-> o funcion en este caso
    
}

module.exports = isAuth; 
//ahora para anadir esto solo si el user esta authenticated en routes importaria esta funcion + la del controller