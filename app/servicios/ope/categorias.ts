import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Giro } from "../../modelos/ct/giro";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CategoriaService {

    //constructor del http para los servicios REST
    constructor(private http: Http) { }

    //Llamado al servicio REST "get"

    getGiros(): Promise<any> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen"));
    }
}