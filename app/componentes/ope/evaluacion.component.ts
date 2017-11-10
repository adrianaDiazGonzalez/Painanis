import { Component } from "@angular/core";
import * as textFieldModule from "tns-core-modules/ui/text-field";
import { Page } from "ui/page";
@Component({
    selector: "my-app",
    templateUrl: "vistas/ope/evaluacion.html",
    styleUrls: ["vistas/css/evaluacion.css"]
})

export class EvaluacionComponent {
    constructor(private page: Page) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }

}