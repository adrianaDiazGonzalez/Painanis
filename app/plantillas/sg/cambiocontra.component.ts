//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { ChanceService } from "../../servicios/sg/cambiocontra";
import { Router } from "@angular/router";
import { Password } from "../../modelos/sg/contrasena";
import { PasswordService } from "../../servicios/sg/contrasena"
//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [ChanceService, PasswordService],
  templateUrl: "plantillas/sg/cambiocontra.html",
  styleUrls: ["plantillas/css/cambiocontrasena.css", "app.css"]
})
//Acciones y procesos de la ventana
export class ChanceComponent {
  //Declaracion de variables 
  usuario: Password;
  resultado;
  contrasena;
  contrasenar;
  //constructor 
  constructor(private page: Page, private router: Router, private chanceService: ChanceService, private passwordService: PasswordService) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
  }
  //Acciones o procesos
  cambiar() {
    if (this.contrasena == this.contrasenar) {
      this.chanceService.putQuete(this.contrasena);
    }
    else {
      alert("Las contraseñas no coinciden");
    }
  }
}