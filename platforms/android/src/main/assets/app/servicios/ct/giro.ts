import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Giro }from "../../modelos/ct/giro";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
//Exportación de la clase usuario
@Injectable()
export class GiroService {

  //constructor del http para los servicios REST
  constructor(private http: Http) {}

  
  //Llamado al servicio REST "get"
  getGiros(): Promise<any> {
   // let headers = new Headers();
    //headers.append("Content-Type", "application/json");
    return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen"));
  }

  //Llamado al servicio REST "post"
  postQuote(giro: Giro) {
    var tt_ctGiro = [giro];
    console.log(JSON.stringify({
      "request":
      {
        "dtGiro":
        { tt_ctGiro }
      }

    }));
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen",
      JSON.stringify({
        "request":
        {
          "dtGiro":
          { tt_ctGiro }
        }
      }),
      { headers: headers })

      .map(response => response.json())
      .subscribe(result => {
        console.log(JSON.stringify(result));
        console.log(result.response.oplResultado);
        console.log(result.response.opcMensaje);
      }, error => {
        console.log("ERROR: ", error);
      });
  }

  //Llamado al servicio REST "delete"
  deleteQuote(ipiGiro: string){
    console.log(ipiGiro);
    let headers = new Headers();
    headers.append("ipiGiro", ipiGiro);
    this.http.delete("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen",      
      "ipiGiro = " + ipiGiro)
      .map(response => response.json())
      .subscribe(result => {
        console.log(JSON.stringify(result));
        console.log(result.response.oplResultado);
        console.log(result.response.opcMensaje);
      }, error => {
        console.log("ERROR: ", error);
      });    
  }

}