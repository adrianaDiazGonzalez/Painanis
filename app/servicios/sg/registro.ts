import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Registro } from "../../modelos/sg/registro";

@Injectable()
export class RegistroService {
    constructor(private http: Http) {}
    postQuote(registro: Registro) {
       
        console.log("Entro al servicio del registro");
        console.log(registro);
        console.log(registro.nombre);
        console.log(registro.fechanac);
        console.log(registro.genero);
        
        console.log(JSON.stringify({ "request" : {registro}}));
        
    }

  
}


