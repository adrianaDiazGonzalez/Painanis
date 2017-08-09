import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';
//Exportación de la clase usuario

@Injectable()
export class ValidaService
 {

  //constructor del http para los servicios REST, y el rouer para poder pasar a otras pantallas
  public constructor(private router: Router,private http: Http) {}
  
  //Llamado al servicio REST "get"
        getQuote(ipcCP: string) {
          let retorno;
          let headers = new Headers();
          headers.append("ipcCP", ipcCP);
          //llama al servicio REST
          this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen",
          { headers: headers })
          .map(response => response.json())
          .subscribe(result => {
            //Condicion del resultado de la busqueda de los codigos postales
             if(result.response.opcMensaje != "")
              {
                alert(result.response.opcMensaje)
              }
               else{
                  this.router.navigate(["sg/registro"]);
                }
              }, error => {
                console.log("ERROR: ", error);
                retorno = error;
              });
            }         
} 
 