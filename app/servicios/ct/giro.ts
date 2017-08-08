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
    getQuote() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen")
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result));
        }, error => {
             console.log("ERROR: ", error);
            });
    }

    //Llamado al servicio REST "post"
    postQuote(giro: Giro) {
       var tt_ctGiro = [giro];
       var ttctRegistro  = [giro];
       console.log(tt_ctGiro)
       

      console.log( JSON.stringify({ "request" : 
                          {"dtGiro" :
                            {tt_ctGiro}
                          }
                          
                        }));
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen", 
        JSON.stringify({ "request" : 
                          {"dtGiro" :
                            {tt_ctGiro}
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
}