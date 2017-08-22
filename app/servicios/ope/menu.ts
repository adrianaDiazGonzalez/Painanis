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
    postQuote(domicilio: Domicilio){
        var tt_ctDomicilio = [domicilio];
        console.log("Json", JSON.stringify({
            "request":
            {
                "dsDomicilio":
                { tt_ctDomicilio }
            }
        }));
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctDomicilio_gen",
            JSON.stringify({ "request": { "dsDomicilio": { tt_ctDomicilio } } }),
            { headers: headers })
            .map(response => response.json())
            .subscribe(result => {
                console.log(JSON.stringify(result));
                console.log(result.response.oplResultado);
                console.log(result.response.opcMensaje);

                if (result.response.opcMensaje != "") {
                    alert("estoy en post")
                }
                else {
                    this.router.navigate(["ope/menu"]);
                }
            }, error => {
                console.log("ERROR: ", error);
            });
       
       
       /* return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctDomicilio_gen",
            JSON.stringify({ "request": { "dsDomicilio": { tt_ctDomicilio } } }),
            { headers: headers }));*/

    }

//Metodo para la validacion de codigo postal
    validacp(ipcCP: string): Promise<any> {
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen",
            { headers: headers }));
    }
}


