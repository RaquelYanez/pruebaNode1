'use strict'

const jwt = require('jwt-simple');
const moment = require('moment')
const config = require('../config')

//FUNCION QUE CREA TOKEN + FUN DECOFICICA

function createToken(user){
    const playload = {
        sub: user._id,
        //cuando es creada la fecha y cuando expira
        iat: moment().unix(),
        exp:moment().add(14, 'days').unix(),
    }
    return jwt.encode(playload, config.SECRET_TOKEN)
}
function decodeToken (token) {
    //creamos una promesa si se cumple tenemos el token decodificado y sino err, al final la fun decodeToken nos devuelve la promesa
    const decoded = new Promise((resolve, reject) => {
        try {
             //Toma el token y decodifica
            const payload = jwt.decode(token, config.SECRET_TOKEN)
            //compruebba que el payload no haya caducado
            if (playload.exp <= moment().unix()){
                reject({
                    status:401, 
                    message:'Token expired'
                })
            }
            //ahora en el objeto user del req me guardo el id (asi se cual es el user), autorizacion+WhoHeIs
            resolve(playload.sub)
        } catch (error) {
            reject({
                status:500, message:'Invalid token'
            })
            return decoded
        }
    })
}
   


module.exports = {createToken, decodeToken}