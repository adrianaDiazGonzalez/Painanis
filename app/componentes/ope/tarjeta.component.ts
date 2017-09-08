import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Giro } from "../../modelos/ct/giro";
import { CategoriaService } from "../../servicios/ope/categorias";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import FrameModule = require("ui/frame");

@Component({
  selector: "my-app",
  providers: [CategoriaService],
  templateUrl: "vistas/ope/actualizaDatos.html",
  styleUrls: ["vistas/css/actualizaDatos.css"]
})

export class TarjetaComponent {
  constructor(private page: Page, private router: Router) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
}
}