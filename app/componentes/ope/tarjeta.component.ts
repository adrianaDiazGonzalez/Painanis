import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriaService } from "../../servicios/ope/categorias";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import FrameModule = require("ui/frame");
import * as buttonModule from "tns-core-modules/ui/button";
import * as colorModule from "tns-core-modules/color";
@Component({
  selector: "my-app",
  providers: [CategoriaService],
  templateUrl: "vistas/ope/tarjeta.html",
  styleUrls: ["vistas/css/tarjeta.css"]
})

export class TarjetaComponent {
  constructor(private page: Page, private router: Router) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
}
}