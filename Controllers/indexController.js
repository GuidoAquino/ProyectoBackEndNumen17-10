const {Escuderias} = require('../models/escuderias')
const axios = require('axios')

const indexController = {
    async getEscuderia (req,res){
        const list = await Escuderias.find();
        res.status(200).json(list)
    },
    async postEscuderia (req,res){
       try {
         const newEscuderia = new Escuderias(req.body)
         await newEscuderia.save()
         res.status(201).json(newEscuderia)
       } catch (error) {
        res.status(400).json(error)
        
       }
    },

    async putEscuderia (req,res) {
      const {id} = req.params;

      const {nombre,paisOrigen,titulos,debut,estado,puntos,logo, ...resto} = req.body;
      

      const escuderia = await Escuderias.findByIdAndUpdate(id,{$set:{resto, nombre,paisOrigen,titulos,puntos,logo,debut, estado}})

      res.json({
        msg: "Escuderia actualizada correctamente.",
        escuderia
      })
    },

    async deleteEscuderia (req,res) {
      const {id} = req.params;

      const {estado, ...resto} = req.body;

      const escuderia = await Escuderias.findByIdAndUpdate(id,{estado : false})

      res.json({
        msg: "Escuderia borrada correctamente.",
        escuderia
        
      })
    },

    async circuitos (req,res){
      try {
        const {data} = await axios.get('https://ergast.com/api/f1/circuits.json')
        res.json(data)
      } catch (error) {
        res.status(404).json({data: error.response.circuitos})
        
      }
    }



    
}

module.exports = indexController