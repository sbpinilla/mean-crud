import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoSeleccionado: Empleado;
  empleados: Empleado[];

  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private httpClient: HttpClient) {

    this.empleadoSeleccionado = new Empleado();

  }

  getEmpleados() {

    return this.httpClient.get(this.URL_API);
  }

  crearEmpleado(empleado: Empleado) {

    const empleadoBody = {
      'nombre': empleado.nombre,
      'puesto': empleado.puesto,
      'oficina': empleado.oficina,
      'salario': empleado.salario
    };

    return this.httpClient.post(this.URL_API, empleadoBody);
  }

  actualizarEmpleado(empleado: Empleado) {

    const empleadoBody = {
      'nombre': empleado.nombre,
      'puesto': empleado.puesto,
      'oficina': empleado.oficina,
      'salario': empleado.salario
    };

    return this.httpClient.put(this.URL_API + `/${empleado._id}`, empleadoBody);
  }

  eliminarEmpleado(_id: string) {

    return this.httpClient.delete(this.URL_API + `/${_id}`);
  }

}
