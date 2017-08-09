import { Component } from "@angular/core";
import { ValidaService } from "../../servicios/sg/valida";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import * as Dialogs from "ui/dialogs";
//import * as XmlObjects from "@angular/xmlobjects";


//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [ValidaService],
  templateUrl: "plantillas/sg/valida.html",
  styleUrls: [ "plantillas/css/valida.css"]
})


export class ValidaComponent {
  cp="";
  constructor(private router: Router,private validaService: ValidaService){
  }
  
  validar()
  {
     if(this.cp == null || this.cp =="")
      {
       alert("Ingrese un Código Postal");
       return;
      } 
      //var result = this.validaService.getQuote(this.cp);

      console.log("resultado lado vista", this.validaService.getQuote(this.cp))

      /*if(result.opcMensaje)
            {
              alert(result.response.opcMensaje)
            }
    */
  }
}
