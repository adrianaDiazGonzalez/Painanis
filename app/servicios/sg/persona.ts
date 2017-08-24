//importaciones de recursos a utilizar
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { Persona } from "../../modelos/sg/persona";
import { Router } from "@angular/router";
import { SesionActiva} from "../../sesionActiva";

@Injectable()
export class PersonaService {
      
    //constructor del http para los servicios REST y del ruteo
    constructor(private http: Http, private router: Router) { }
    
    //Llamado al servicio REST "post"
    postQuote(persona: Persona) : Promise <any> {
        var tt_ctPersona = [persona]; 
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        //guardamos el usuario en cada pantalla
        return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen",
            JSON.stringify({ "request": { "dsPersona": { tt_ctPersona } } }),
            { headers: headers })
            );
    }
}
