export class Empleado {
    _id: string;
    nombre: string;
    puesto: string;
    oficina: string;
    salario: Number;

    constructor(_id= '', nombre= '', puesto= '', oficina= '', salario= 0 ) {

        this._id = _id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.oficina = oficina;
        this.salario = salario;

    }
}
