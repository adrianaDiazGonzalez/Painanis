//importaciones de recursos a utilizar
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
  constructor( private router: Router, private userService: UserService) {
  this.usuario = new ttctPersona();
  }

  registro()
  {
    var relacion = ['Hola','HOLA'];
    console.log(relacion);
    this.router.navigate(["/registro"]);
  }

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
    console.log(this.usuario.iUsuario);
    console.log(this.usuario.cUsuario);

    if(this.usuario.iUsuario == null || this.usuario.iUsuario == ""){
      bandera = true;
      alert("Ingresa nombre de usuario por favor");
    }else{
      /*emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if(!emailRegex.test(this.usuario.email)){
        bandera = true;
        alert("Ingresa un nombre de usuario valido");
      }*/ 
    } 

    if (this.usuario.cUsuario == null || this.usuario.cUsuario == ""){
      bandera = true;
      alert("Ingresa una contraseña por favor");
    }
    return bandera;
  }
}
  