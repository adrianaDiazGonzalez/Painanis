import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { MenuService } from "../../servicios/ope/menu";



@Component({
    selector: "my-app",
    providers: [MenuService],
    templateUrl: "plantillas/ope/menu.html",
    styleUrls: ["plantillas/css/menu.css"]
})

export class MenuComponent {
    constructor(private router: Router) {

    }

    back() {
        this.router.navigate(["sg/usuario"]);
    }
}
