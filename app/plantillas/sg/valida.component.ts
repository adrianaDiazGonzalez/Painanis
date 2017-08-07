import { Component } from "@angular/core";
import { ValidaService } from "../../servicios/sg/valida";
import { Router } from "@angular/router";

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [ValidaService],
  template:
  ` 
   <ScrollView>
   <StackLayout >
    <ActionBar title="Dirección" class="action-bar"></ActionBar>
    <Image src="~/images/mapa.png" class="cp" horizontalAlignment="center" verticalAlignment="center" ></Image>
    <TextField hint="CP" [(ngModel)]="cp" keyboardType= "Number" verticalAlignment="center" ></TextField >
    <Button text = "Validar" class="boton" (tap)="validar()"></Button>
   
                                   
    </StackLayout>
  </ScrollView>
 
  `,
   styleUrls: ["plantillas/css/valida.css"]
})


export class ValidaComponent {
  cp="";
  constructor(private validaService: ValidaService){
  }
  
  validar(){
    console.log("valida", this.cp);
    this.validaService.getQuote(this.cp);
  }

    
  
  }
