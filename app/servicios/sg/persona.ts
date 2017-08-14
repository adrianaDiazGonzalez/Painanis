import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Persona } from "../../modelos/sg/persona";

@Injectable()
export class PersonaService {
    constructor(private http: Http) {}
    postQuote(persona: Persona) {
        var tt_ctPersona = [persona];
        
        console.log( JSON.stringify({ "request" : 
         {"dsPersona" :
          {tt_ctPersona}
         }}));
        
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen", 
        JSON.stringify({ "request" :{"dsPersona" :{tt_ctPersona}}}), 
              { headers: headers })
              .map(response => response.json())
              .subscribe(result => {
                  console.log(JSON.stringify(result));
                  console.log(result.response.oplResultado);
                  console.log(result.response.opcMensaje);

                  if (result.response.opcMensaje != "")
                    {
                        alert("El usuario ya existe")
                    }
                    

                    
                }, error => {
                     console.log("ERROR: ", error);
                     });       
    }

  
}
