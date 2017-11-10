//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { ValidaService } from "../../servicios/sg/valida";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [ValidaService],
  templateUrl: "vistas/sg/valida.html",
  styleUrls: ["vistas/css/valida.css", "app.css"]
})

//Acciones y procesos de la ventana 
export class ValidaComponent {
  //Declaracion de variables
  cp = "";
  //constructor
  constructor(private page: Page, private router: Router, private validaService: ValidaService) {
    page.actionBarHidden = true;
  }
  //Acciones o procesos
  validar() {
    this.router.navigate(["ope/carrito"]);
    if (this.cp == null || this.cp == "") {
      alert("Ingrese un Código Postal");
      return;
    }

    var result = this.validaService.getQuote(this.cp);
  }
  sesion() {
    this.router.navigate(["ope/carrito"]);
  }
}