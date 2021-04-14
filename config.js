module.exports ={
    port:process.env.PORT ||3000,
    db: process.env.MONGO_DB ||'mongodb://localhost:27017/tienda',
    SECRET_TOKEN :'miclavedetokens'
}