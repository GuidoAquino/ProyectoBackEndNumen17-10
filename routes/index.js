const express = require('express');
const router = express.Router();
const indexController  = require('../Controllers/indexController')
const {check} = require('express-validator');
const { escuderiaExiste, validarEscuderia } = require('../middlewares/validation');


router.get('/listado' , indexController.getEscuderia)

router.post('/crear' ,
[ 
    check("nombre", "El nombre de escuderia es ogligatorio").notEmpty(),
    check("logo", "Debe ser una URL").isURL(),
    check("nombre").custom(escuderiaExiste),
    validarEscuderia,

 
]
, indexController.postEscuderia)

router.put('/editar/:id/' ,
[

    check("id", "El ID no es válido").isMongoId()

],

indexController.putEscuderia)



router.delete('/borrar/:id/' ,indexController.deleteEscuderia)
router.get('/circuitos', indexController.circuitos)

module.exports = router   
