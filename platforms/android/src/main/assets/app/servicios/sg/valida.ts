import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
//Exportación de la clase usuario
@Injectable()
export class ValidaService {

  //constructor del http para los servicios REST
<<<<<<< HEAD
  public constructor(private http: Http) {}
=======
<<<<<<< HEAD
  constructor(private http: Http) {}
>>>>>>> 37834ff6d602c627f9adce55c820b36628569586
  
  //Llamado al servicio REST "get"
    getQuote(ipcCP: string) {
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
<<<<<<< HEAD
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
=======
      this.http.get("192.168.2.153:8810/Painanis/rest/painanis/validacp", { headers: headers })
=======
  public constructor(private http: Http) {}
  
  //Llamado al servicio REST "get"
    getQuote(ipcCP: string) {
      console.log("parametro:", ipcCP);
        let headers = new Headers();
        headers.append("ipcCP", ipcCP);
      this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
>>>>>>> 28a6d4f4ed0c2ae8e94fbaba43c5c26d80e5cdec
>>>>>>> 37834ff6d602c627f9adce55c820b36628569586
      .map(response => response.json())
      .subscribe(result => {
          console.log(JSON.stringify(result));
        }, error => {
             console.log("ERROR: ", error);
            });
    }
}
