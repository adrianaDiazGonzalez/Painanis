import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
//Exportación de la clase usuario
@Injectable()
export class ValidaService {

  //constructor del http para los servicios REST
  constructor(private http: Http) {}
  
  //Llamado al servicio REST "get"
    getQuote(ipcCP: string) {
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
      this.http.get("192.168.2.153:8810/Painanis/rest/painanis/validacp", { headers: headers })
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result));
        }, error => {
             console.log("ERROR: ", error);
            });
    }
}
