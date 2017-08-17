//importaciones de recursos a utilizar
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Persona } from "../../modelos/sg/persona";
import { Router } from "@angular/router";

@Injectable()
export class PersonaService {
    //constructor del http para los servicios REST y del ruteo
    constructor(private http: Http, private router: Router) { }
    //Llamado al servicio REST "post"
    postQuote(persona: Persona) {
        var tt_ctPersona = [persona];
        console.log(JSON.stringify({
            "request":
            {
                "dsPersona":
                { tt_ctPersona }
            }
        }));

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen",
            JSON.stringify({ "request": { "dsPersona": { tt_ctPersona } } }),
            { headers: headers })
            .map(response => response.json())
            .subscribe(result => {
                console.log(JSON.stringify(result));
                console.log(result.response.oplResultado);
                console.log(result.response.opcMensaje);

                if (result.response.opcMensaje != "") {
                    alert("El usuario ya existe")
                }
                else {
                    this.router.navigate(["ope/categoria"]);
                }
            }, error => {
                console.log("ERROR: ", error);
            });
    }
}
