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
  templateUrl: "plantillas/ope/categorias.html",
  styleUrls: ["plantillas/css/categorias.css"]
})

export class CategoriasComponent {
  public todoList: any;
  giro: Giro;
  resultado;

  constructor(private page: Page, private categoriaService: CategoriaService, private router: Router) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana

    this.giro = new Giro();
    this.categoriaService.getGiros().then(
      (resolve) => {
        this.resultado = resolve;
        this.resultado
          .map(response => response.json())
          .subscribe(result => {
            this.todoList = result.response.tt_ctGiro.tt_ctGiro;

          }, error => {
            JSON.stringify(error);
          });
      }
    )
  }
  back() {
    this.router.navigate(["sg/valida"]);
  }
}
