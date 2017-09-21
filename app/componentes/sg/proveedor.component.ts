import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import {ProveedorService} from "../../servicios/sg/proveedor";


@Component({
    selector: "my-app",
    providers: [ProveedorService],
    templateUrl: "vistas/ope/proveedor.html",
    styleUrls: ["vistas/css/proveedor.css"]
})
export class ProveedorComponent {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
}