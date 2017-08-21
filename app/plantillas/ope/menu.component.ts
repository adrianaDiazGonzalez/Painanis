//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { MenuService} from "../../servicios/ope/menu";
import { Router } from "@angular/router";

//Declaración de los componentes de la vista
@Component({
    selector: "my-app",
    providers: [MenuService],
    templateUrl: "plantillas/ope/men.html",
    styleUrls: ["../css/men.css", "../../app.css"]
})
//Acciones y procesos de la ventana 
export class MenuComponent {
    constructor(private page: Page, private router: Router) {
}
}
