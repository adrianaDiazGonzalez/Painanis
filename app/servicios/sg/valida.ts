import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
//Exportación de la clase usuario
@Injectable()
export class ValidaService {

  //constructor del http para los servicios REST
  public constructor(private http: Http) {}
  
  //Llamado al servicio REST "get"
    getQuote(ipcCP: string) :Promise <string>{
      console.log("parametro:", ipcCP);
      let retorno;
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result));
          /*if(result.response.opcMensaje)
            {
              alert(result.response.opcMensaje)
            }*/
          
            retorno = result;
            console.log(retorno);
          
          }, error => {
             console.log("ERROR: ", error);
              retorno = error;
            });
          return retorno;

    }
}
 