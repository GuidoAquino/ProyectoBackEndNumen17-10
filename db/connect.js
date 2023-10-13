const moongoose = require('mongoose')
moongoose.set('strictQuery', false);
require('dotenv').config()



const connect = async () => {
    try{
        await moongoose.connect(process.env.CONNECT_BDBF)
        console.log('Conectado a la base de Datos')
    } catch{
        console.log('EEROR al conectarse a la basde de datos')

    }
}

module.exports = {connect}