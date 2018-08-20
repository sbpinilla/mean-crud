const mongoose = require('mongoose');
const {Schema} = mongoose;


const EmpleadoSchema = new Schema({
    nombre: { type: String, require: true },
    puesto: { type: String, require: true },
    oficina: { type: String, required: true },
    salario: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado',EmpleadoSchema);



