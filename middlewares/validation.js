const {validationResult} = require('express-validator');
const { Escuderias } = require('../models/escuderias');

const validarEscuderia = (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errores:errors.array()})
    }

    next();
};

const escuderiaExiste = async(nombre) =>{
    const escuderia = await Escuderias.findOne({nombre});

    if(escuderia){
        throw new Error("La escuderia ya está registrada")
    }
}

module.exports = {
    validarEscuderia,
    escuderiaExiste
}

 

