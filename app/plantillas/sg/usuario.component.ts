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
  