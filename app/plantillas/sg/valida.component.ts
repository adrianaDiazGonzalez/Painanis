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
  templateUrl: "plantillas/sg/valida.html",
  styleUrls: [ "plantillas/css/valida.css","app.css"]
})


export class ValidaComponent {
  cp="";
  constructor(private page: Page, private router: Router,private validaService: ValidaService)
  {
    page.actionBarHidden = true;  
  }
  
  validar()
  {
    if(this.cp == null || this.cp =="")
      {
        alert("Ingrese un Código Postal");
        return;
      } 
      var result = this.validaService.getQuote(this.cp);
  }
  
  sesion()
  {
     this.router.navigate(["sg/usuario"]);
  }
}
