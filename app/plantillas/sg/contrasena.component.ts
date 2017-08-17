//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { PasswordService } from "../../servicios/sg/contrasena";
import { Router } from "@angular/router";
import { Password } from "../../modelos/sg/contrasena";

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [PasswordService],
  templateUrl:"plantillas/sg/contrasena.html",
  styleUrls: ["plantillas/css/contrasena.css"]
})

//Clase para las acciones de los botones
export class PasswordComponent {
  usuario: Password; 
  constructor(private page: Page, private router: Router, private passwordService: PasswordService) {
    page.actionBarHidden = true;
  this.usuario = new Password();
  }

  submit(){
    //validaciones de campos obligatorios
    if(this.usuario.cUsuario == null || this.usuario.cUsuario == "")
    {
      alert("Ingresa un usuario por favor");
      return;
    }
    if(this.usuario.cTelefono == null || this.usuario.cTelefono == "")
      {
        alert("Ingrese un telefono por favor");
        return;
      }
    //validación de correo si existe
     var emailRegex
     
     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     if(this.usuario.cCorreo != "" )
      {
        if(!emailRegex.test(this.usuario.cCorreo)){ 
          alert("Ingrese correo valido");
          return;
        }
      }
      this.passwordService.getQuote(this.usuario);
    }
  }