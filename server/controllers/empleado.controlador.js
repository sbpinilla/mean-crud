const EmpleadoModel = require('../models/empleado');

const empleadoControlador = {};

empleadoControlador.getEmpleados = async (req, res) => {
    const empleados = await EmpleadoModel.find();
    res.json(empleados);
};

empleadoControlador.getEmpleado = async (req, res) => {

    console.log(req.params);
    const empleado = await EmpleadoModel.findById(req.params.id);

    // const empleado = await EmpleadoModel.findById(req.params);
    res.json(empleado);
};

empleadoControlador.crearEmpleado = async (req, res) => {
    const nuevoEmpleado = new EmpleadoModel(req.body);
    console.log(nuevoEmpleado);
    await nuevoEmpleado.save();

    res.json({
        status: "Empleado Guardado"
    });
};

empleadoControlador.actualizarEmpleado = async (req, res) => {

    const { id } = req.params;

    const empleadoUpdate = {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        oficina: req.body.oficina,
        salario: req.body.salario,

    };

    await EmpleadoModel.findByIdAndUpdate(id, {$set:empleadoUpdate},{new: true});

    res.json({status:"Empleado Actualizado"});
};

empleadoControlador.elimidarEmpleado = async (req, res) => {

    const { id } = req.params;

    await EmpleadoModel.findByIdAndRemove(id); 
    
    res.json({status:"Empleado eliminado"});

};

module.exports = empleadoControlador;