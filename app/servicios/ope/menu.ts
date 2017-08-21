//importaciones de recursos a utilizar
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

@Injectable()
export class MenuService {
    //constructor del http para los servicios REST y del ruteo
    constructor(private http: Http, private router: Router) { }
}