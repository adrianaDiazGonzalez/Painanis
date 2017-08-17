//Importaciones de recursos que se usan en el código
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Password} from "../../modelos/sg/contrasena";
//Exportación de la clase usuario
@Injectable()
export class PasswordService {

  //constructor del http para los servicios REST
  constructor(private http: Http) {}
  
  //Llamado al servicio REST "get"
    getQuote(usuario: Password) {
       let headers = new Headers();
          headers.append("ipcUsuario",  usuario.cUsuario);
          headers.append("ipcTelefono", usuario.cTelefono);
          headers.append("ipcCorreo",   usuario.cCorreo);

          console.log("headers", headers.values());

      console.log("usuario", usuario.cUsuario);
      console.log("telefono", usuario.cTelefono);
      console.log("correo", usuario.cCorreo);
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen",
    { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result.response.opcMensaje));
          if(result.response.opcMensaje != "")
            {
              alert("Datos incorrectos");
            } 
            else{
              
            }
          }, error => {
             console.log("ERROR: ", error);
            });
    }
}