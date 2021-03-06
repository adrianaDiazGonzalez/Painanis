import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import {EleccionService} from "../../servicios/ope/eleccion";


@Component({
    selector: "my-app",
    providers: [EleccionService],
    templateUrl: "vistas/ope/eleccion.html",
    styleUrls: ["vistas/css/eleccion.css"]
})
export class EleccionComponent {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }

    registro(){
        this.router.navigate(["/sg/persona"]);
    }
    prov(){
        this.router.navigate(["/sg/proveedor"]);
    }

    painani(){
        this.router.navigate(["/sg/regvarios"]);
    }
    sup(){
        this.router.navigate(["/sg/regvarios"]);
    }
    direc(){
        this.router.navigate(["/sg/regvarios"]);
    }
}