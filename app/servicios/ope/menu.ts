import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { Router } from "@angular/router";
import { Domicilio } from "../../modelos/ope/menu";

@Injectable()
export class MenuService {

    //constructor del http para los servicios REST
    constructor(private http: Http, private router: Router) { }
    postQuote(domicilio: Domicilio) {
        var tt_ctDomicilio = [domicilio];
        console.log(JSON.stringify({
            "request":
            {
                "dsDomicilio":
                { tt_ctDomicilio }
            }
        }));

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen",
            JSON.stringify({ "request": { "dsPersona": { tt_ctDomicilio } } }),
            { headers: headers })
            .map(response => response.json())
            .subscribe(result => {
                console.log(JSON.stringify(result));
                console.log(result.response.oplResultado);
                console.log(result.response.opcMensaje);

                if (result.response.opcMensaje != "") {
                    alert("Datos incorrectos");
                }
                else {
                    alert("Desea ingresar otra dirección ");
                    this.router.navigate(["ope/menu"]);
                }
            }, error => {
                console.log("ERROR: ", error);
            });
    }

    validacp(ipcCP: string) {
        let retorno;
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen",
            { headers: headers })
            .map(response => response.json())
            .subscribe(result => {
                //Condicion del resultado de la busqueda de los codigos postales
                if (result.response.opcMensaje != "") {
                    alert("Codigo Postal no valido");
                    return;
                }
            }, error => {
                console.log("ERROR: ", error);
                retorno = error;
            });
    }
}

