import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {

  // datos: Empleado;

  empleados: Empleado[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  agregarEmpleado(form: NgForm) {

    if (form.value._id) {

      this.empleadoService.actualizarEmpleado(form.value).subscribe(res => {
        console.log(res);
        this.limpiarForm(form);
        M.toast({ html: 'Empleado Actualizado ' });
        this.getEmpleados();

      });

    } else {

      this.empleadoService.crearEmpleado(form.value).subscribe(res => {
        this.limpiarForm(form);
        M.toast({ html: 'Empleado guardado ' });
        this.getEmpleados();
      });
    }
  }

  getEmpleados() {

    this.empleadoService.getEmpleados().subscribe(res => {

      this.empleadoService.empleados = res as Empleado[];
      console.log(res);

    });
  }

  editarEmpleado(empleado: Empleado) {

    this.empleadoService.empleadoSeleccionado = empleado;

    this.empleadoService.actualizarEmpleado(empleado).subscribe(res => {

      console.log(res);

    });

  }

  eliminarEmpleado(empleado: Empleado) {

    if (confirm('Relamente deseas eliminar a ' + empleado.nombre)) {

      this.empleadoService.eliminarEmpleado(empleado._id).subscribe(res => {
        console.log(res);
        M.toast({ html: 'Empleado Eliminado ' });
        this.getEmpleados();

      });
    }
  }

  limpiarForm(form?: NgForm) {

    if (form) {
      form.reset();
      this.empleadoService.empleadoSeleccionado = new Empleado();
    }
  }

}
