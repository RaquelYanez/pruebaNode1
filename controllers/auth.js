'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services')

function signUp(req, res){
    const user = new User({
     email = req.body.email,
     displayName = req.body.displayName,
    });
    user.save((err)=>{
        if(err) res.status(500).send({message: `error ${err}`})
                                        //aqui creamos un modulo nuevo que crea el user
         return res.status(200).send({token: service.createToken(user)})
    });
}

function signIn(req,res){}

module.exports ={signIn, signUp}