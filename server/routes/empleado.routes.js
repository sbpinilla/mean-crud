const express = require ('express');
const router =express.Router();
const empleadoController = require('../controllers/empleado.controlador');

router.get('/', empleadoController.getEmpleados);
router.post('/', empleadoController.crearEmpleado);
router.get('/:id', empleadoController.getEmpleado);
router.put('/:id', empleadoController.actualizarEmpleado);
router.delete('/:id', empleadoController.elimidarEmpleado); 

module.exports = router;