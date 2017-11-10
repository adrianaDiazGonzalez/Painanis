//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../servicios/sg/usuario";
import { Router } from "@angular/router";
import { ttctPersona } from "../../modelos/sg/usuario";
import { EventData } from "data/observable";
import { Switch } from "ui/switch";
//importacion para mantener la sesion activa
import { SesionActiva } from "../../sesionActiva";

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "vistas/sg/usuario.html",
  styleUrls: ["vistas/css/usuario.css", "app.css"]
})

//Clase para las acciones y procesos
export class LoginComponent {
  //Declaracion e variables:
  //variables para el radio button de recordar datos
  public firstSwitchState = false;
  public secondSwitchState = true;
  //varible que guarda la tabla temporal
  usuario: ttctPersona;
  //Variable que sirve para saber si el usuario desea guardar sus datos o no
  public lrecordar = false;

  //Constructor
  constructor(private page: Page, private router: Router, private userService: UserService) {
    page.actionBarHidden = true; //Oculta la barra superior en la pantalla
    this.usuario = new ttctPersona(); //Instancea el objeto de usuario a la tabla temporal
    //Comprueba se existen datos guardados los muestra al inicio de la sesion
    if (SesionActiva.sesion.cUsuario != "") {
      this.usuario.cUsuario = SesionActiva.sesion.cUsuario;
      this.usuario.cContrasena = SesionActiva.sesion.cContrasena;
    }
  }

  //Acciones y Procesos que realizan cuando se presioan el boton de ingresar
  submit() {
    if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
      alert("Ingresa nombre de usuario por favor");
      return;
    }
    if (this.usuario.cContrasena == null || this.usuario.cContrasena == "") {
      alert("Ingresa una contraseña por favor");
      return;
    }
    

    //si todas las validaciones son correctas va a el servicio REST post
    this.userService.postQuote(this.usuario).
      then((resolve) => {
        resolve
          .map(response => response.json())
          .subscribe(result => {
            if (result.response.opcMensaje != "") {
              alert("Usuario y/o contraseña incorrectos");
            }
            else {
              if (this.lrecordar == true) {
                SesionActiva.sesion = this.usuario;
              }
              this.router.navigate(["ope/categoria"]);
            }
          });
      })
  }

  contrasena() {

    //this.router.navigate(["sg/contrasena"]);
    this.router.navigate(["ope/carrito"]);
  }

  //Metodo para el campo de recordar datos 
  public onFirstChecked(args) {
    let firstSwitch = <Switch>args.object;
    if (firstSwitch.checked) {
      this.firstSwitchState = false;
    } else {
      this.secondSwitchState = true;
    }
  }
}

