import { Component } from "@angular/core";
import { Page } from "ui/page";
 

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent {
  // Your TypeScript logic goes here
  constructor(private page: Page) {
    page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
}
}
