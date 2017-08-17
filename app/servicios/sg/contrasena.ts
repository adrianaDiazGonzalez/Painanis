//Importaciones de recursos que se usan en el código
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Password } from "../../modelos/sg/contrasena";
import { Router } from "@angular/router";
//Exportación de la clase usuario
@Injectable()
export class PasswordService {
  //Declaracion de variables 
  usuario1;

  //constructor del http para los servicios REST y el ruteo
  constructor(private http: Http, private router: Router) { }

  //Llamado al servicio REST "get"
  getQuote(usuario: Password) {
    let headers = new Headers();
    headers.append("ipcUsuario", usuario.cUsuario);
    headers.append("ipcTelefono", usuario.cTelefono);
    headers.append("ipcCorreo", usuario.cCorreo);

    console.log("headers", headers.values());
    console.log("usuario", usuario.cUsuario);
    console.log("telefono", usuario.cTelefono);
    console.log("correo", usuario.cCorreo);
    this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen",

      { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
        console.log(JSON.stringify(result.response.opcMensaje));
        if (result.response.opcMensaje != "") {
          alert("Datos incorrectos");
        }
        else {
          this.usuario1 = usuario.cUsuario;
          this.router.navigate(["sg/cambio"]);
        }
      }, error => {
        console.log("ERROR: ", error);
      });
  }
}