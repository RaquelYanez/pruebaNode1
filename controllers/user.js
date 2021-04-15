'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services')

function signUp(req, res){
    const user = new User({
        email: req.body.email,
        displayName:req.body.displayName,
        password: req.body.passwordavatar
    });
    user.save((err)=>{
        if(err) res.status(500).send({message: `error ${err}`})
                                        //aqui creamos un modulo nuevo que crea el user=token
         return res.status(200).send({token: service.createToken(user)})
         
    })

}

function signIn(req,res){
    //como en Spring busca por email en el cuerpo peticion, +peticion callback para comprobar
    User.find({email:req.body.email}, (err,user) => {
        if(err) return res.status(500).send({message: `error ${err}`})
        if(!user) return res.status(404).send({message:'No existe el user'})
        //si existe guardo user +200
        req.user = user;
        res.status(200).send({
            message:'logged in',
            token: service.createToken(user)
        })
    })
}

module.exports ={signIn, signUp}