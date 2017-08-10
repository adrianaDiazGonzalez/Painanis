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
  styleUrls: ["plantillas/css/usuario.css"]
})

//Clase para las acciones de los botones
export class LoginComponent {
  usuario: ttctPersona; 
  constructor(private page: Page, private router: Router, private userService: UserService) {
    page.actionBarHidden = true;
  this.usuario = new ttctPersona();
  }
   /* var relacion = ['Hola','HOLA'];
    console.log(relacion);*/
  submit()
   {
    //alert("You’re using: " + this.email);
    if(this.validar())
      {
      return;
      }
     this.userService.postQuote(this.usuario);
    }

  validar(){
    var bandera = false;
    var emailRegex;
    console.log(this.usuario.cUsuario);
    console.log(this.usuario.cContrasena);

    if(this.usuario.cUsuario == null || this.usuario.cUsuario == ""){
      bandera = true;
      alert("Ingresa nombre de usuario por favor");
    }else{
      /*emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if(!emailRegex.test(this.usuario.email)){
        bandera = true;
        alert("Ingresa un nombre de usuario valido");
      }*/ 
    } 

    if (this.usuario.cContrasena == null || this.usuario.cContrasena == ""){
      bandera = true;
      alert("Ingresa una contraseña por favor");
    }
    return bandera;
  }
  
}
  