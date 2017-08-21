import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MenuService {

    //constructor del http para los servicios REST
    constructor(private http: Http) { }

}