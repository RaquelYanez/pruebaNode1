'use strict'

const jwt = require('jwt')
const moment = require('moment')
const config = require('../config')

function isAuth (req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({msg: 'sin autorizacion'})
    }
    //split convierte el header en tantos elementos como espacios y queremos el segundo elemento que es el token
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN)

    if (playload.exp <= moment().unix()){
        return res.status(403).send({msg: 'exp (tiempo ejecucion) ha caducado'})
    }
}