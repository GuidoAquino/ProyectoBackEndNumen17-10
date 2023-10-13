const { Schema, model } = require("mongoose")

const schema = new Schema({
    nombre: {
        type: String,
        required: true
      },
      paisOrigen: {
        type: String,
        required: true
      },
      titulos: {
        type: Number,
        required: true
      },
      debut: {
        type: Number,
        required: true
      },
      puntos: {
        type: Number,
        required: true
      },
      logo: {
        type: String,
        
      },
      estado:{
        type : Boolean,
        require: true,
      }
});

const Escuderias = model("Escuderia", schema);
module.exports = { Escuderias };
