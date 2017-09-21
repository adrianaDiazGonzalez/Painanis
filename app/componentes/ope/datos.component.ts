import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { DatosService } from "../../servicios/ope/datos";



@Component({
    selector: "my-app",
    providers: [DatosService],
    templateUrl: "vistas/ope/datos.html",
    styleUrls: ["vistas/css/datos.css"]
})
export class DatosComponent {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }

    actdatos() {
        this.router.navigate(["ope/actDatPer"]);
    }
    actdir() {
        this.router.navigate(["ope/actdir"]);
    }
    ingtar() {
        this.router.navigate(["ope/tarjeta"]);
    }
}