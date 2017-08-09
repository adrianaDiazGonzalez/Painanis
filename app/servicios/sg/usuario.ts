//Importaciones de recursos que se usan en el código
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { ttctPersona } from "../../modelos/sg/usuario";
//Exportación de la clase usuario
@Injectable()
export class UserService {

  //constructor del http para los servicios REST
  constructor(private http: Http) {}
  
  //Llamado al servicio REST "get"
    getQuote() {
      this.http.get("http://192.168.2.153:8810/Pruebas/rest/Evento/Post")
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result));
        }, error => {
             console.log("ERROR: ", error);
            });
    }
    //Llamado al servicio REST "post"  
    postQuote(usuario: ttctPersona) {
       var ttctPersona = [usuario];
       var ttctRegistro  = [usuario];
       console.log(ttctPersona)
       

      console.log( JSON.stringify({ "request" : 
                          {"tt_ctPersona" :
                            {ttctPersona,ttctRegistro}
                          }
                        }))
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Pruebas/rest/Evento/Post", 
        JSON.stringify({ "request" : 
                          {"tt_ctPersona" :
                            {ttctPersona,ttctRegistro}
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
