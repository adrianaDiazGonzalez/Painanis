import { Component } from "@angular/core";
import { Page } from "ui/page";
@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Categorias" class="action-bar"></ActionBar>
    
  `
})
export class CategoriaComponent {

   constructor(private page: Page) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
  }

}