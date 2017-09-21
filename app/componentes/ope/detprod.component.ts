import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Giro } from "../../modelos/ct/giro";
import { CategoriaService } from "../../servicios/ope/categorias";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import FrameModule = require("ui/frame");
import { ListPicker } from "ui/list-picker";



@Component({
  selector: "my-app",
  providers: [CategoriaService],
  templateUrl: "vistas/ope/detprod.html",
  styleUrls: ["vistas/css/detprod.css"]
})

export class DetProductoComponent {
  public pokemons: Array<string>;
  public picked: string;
  public selectedIndexChanged(args) {
      let picker = <ListPicker>args.object;
      console.log("picker selection: " + picker.selectedIndex);
      this.picked = this.pokemons[picker.selectedIndex];
  }
  constructor(private page: Page, private router: Router) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    
         
  }
}