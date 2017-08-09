import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';
//Exportación de la clase usuario

@Injectable()
export class ValidaService {

  //constructor del http para los servicios REST
  public constructor(private router: Router,private http: Http) {}
  
  //Llamado al servicio REST "get"
    
      //getQuote(ipcCP: string) :Promise <string>{
        getQuote(ipcCP: string) :Promise <{ipcCP:string}>{
      
        let retorno;
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen",
       { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
          console.log("json", JSON.stringify(result));
          retorno = result;
          console.log("retorno", retorno);
          
          }, error => {
             console.log("ERROR: ", error);
              retorno = error;
              
            });
         return Promise.resolve(retorno);
         
           
          }
} 
 