//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { UserService } from "../../servicios/sg/usuario";
import { Router } from "@angular/router";
import { ttctPersona } from "../../modelos/sg/usuario";

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl:"plantillas/sg/usuario.html",
  styleUrls: ["plantillas/css/usuario.css", "app.css"]
})

//Clase para las acciones y procesos
export class LoginComponent {
  usuario: ttctPersona; 
  //Constructor
  constructor(private page: Page, private router: Router, private userService: UserService) {
    page.actionBarHidden = true;
  this.usuario = new ttctPersona();
  }
  
  //Acciones y Procesos
  submit()
  {
    if(this.usuario.cUsuario == null || this.usuario.cUsuario == ""){
      alert("Ingresa nombre de usuario por favor");
      return;
    }
    if (this.usuario.cContrasena == null || this.usuario.cContrasena == ""){
       alert("Ingresa una contraseña por favor");
      return;
    }
    this.userService.postQuote(this.usuario);
  }
  contrasena(){
    this.router.navigate(["sg/contrasena"]);
  }  
}
  