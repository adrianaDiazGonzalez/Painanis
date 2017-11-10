import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { CarritoService } from "../../servicios/ope/carrito"
import { DireccionService } from "../../servicios/ope/direccion";
import { Domicilio } from "../../modelos/ope/direccionM";
import dialogs = require("ui/dialogs");

@Component({
    selector: "my-app",
    providers: [CarritoService],
    templateUrl: "vistas/ope/carrito.html",
    styleUrls: ["vistas/css/carrito.css"]
})
export class CarritoComponent {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
}