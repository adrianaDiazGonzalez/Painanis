import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import {RegvariosService} from "../../servicios/sg/regvarios";


@Component({
    selector: "my-app",
    providers: [RegvariosService],
    templateUrl: "vistas/ope/regvarios.html",
    styleUrls: ["vistas/css/regvarios.css"]
})
export class RegvariosComponent {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
}