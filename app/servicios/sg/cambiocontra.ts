//importaciones de recursos a utilizar
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import { Chance } from "../../modelos/sg/cambiocontrasena";

//Exportación de la clase usuario
@Injectable()
export class ChanceService {
  resultado;
  //constructor del http para los servicios REST y del ruteo
  constructor(private http: Http, private router: Router) { }

  //Llamado al servicio REST "post"  
  postQuote(usuario: Chance) {
    console.log(JSON.stringify({
      "request":
      { "ipcContrasena": usuario.cContrasena }
    }))
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen",
      JSON.stringify({
        "request":
        { "ipcContrasena": usuario.cContrasena }
      }),
      { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
        console.log(JSON.stringify(result));
        console.log(result.response.oplResultado);
        console.log(result.response.opcMensaje);
        if (result.response.opcMensaje != "") {
          alert("Las contraseñas no coinciden");
          return;
        }
        else {
          this.router.navigate(["ope/categoria"]);
        }
      }, error => {
        console.log("ERROR: ", error);
      });
  }
  //Llamado al servicio REST "put"  
  putQuete(ipcContrasena: string) {
    console.log(JSON.stringify({
      "request":
      { "ipcContrasena": ipcContrasena }
    }))
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    this.http.put("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen",
      JSON.stringify({
        "request":
        { "ipcContrasena": ipcContrasena }
      }),
      { headers: headers })
      .map(response => response.json())
      .subscribe(result => {

        console.log(JSON.stringify(result));
        console.log(result.response.oplResultado);
        console.log(result.response.opcMensaje);

        this.router.navigate(["sg/usuario"]);
      }, error => {
        console.log("ERROR:", error);
      });
  }

}