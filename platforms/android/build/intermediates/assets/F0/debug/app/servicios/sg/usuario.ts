//Importaciones de recursos que se usan en el código
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { ttctPersona } from "../../modelos/sg/usuario";
import { Router } from "@angular/router";
//importacion para mantener la sesion activa
import { SesionActiva } from "../../sesionActiva";

//Exportación de la clase usuario
@Injectable()
export class UserService {

  //constructor del http para los servicios REST
  constructor(private http: Http, private router: Router) { }

  /*Llamado al servicio REST "get"
  getQuote() {
    this.http.get("http://192.168.2.153:8810/Pruebas/rest/Evento/Post")
      .map(response => response.json())
      .subscribe(result => {
        console.log(JSON.stringify(result));
      }, error => {
        console.log("ERROR: ", error);
      });
  }*/

  //Llamado al servicio REST "post"  
  postQuote(usuario: ttctPersona): Promise<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    //guardamos el usuario en cada pantalla
    return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen",
      JSON.stringify({
        "request": {
          "ipcUsuario": usuario.cUsuario,
          "ipcContrasena": usuario.cContrasena
        }
      }),
      { headers: headers })
    );
  }
}
