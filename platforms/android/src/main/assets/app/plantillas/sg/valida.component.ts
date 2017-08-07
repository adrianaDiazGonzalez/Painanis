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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <Image src="~/images/book.png" horizontalAlignment="center" verticalAlignment="center" ></Image>
    <Label text="¡Valida tu dirección!" horizontalAlignment="center"> </Label>
    <TextField hint="CP" [(ngModel)]="cp"></TextField >
    <Button text = "Validar" class="boton" (tap)="validar()"></Button>
   
                                   
    </StackLayout>
=======
>>>>>>> 37834ff6d602c627f9adce55c820b36628569586
    <Image src="~/images/mapa.png" class="cp" horizontalAlignment="center" verticalAlignment="center" ></Image>
    <TextField hint="CP" [(ngModel)]="cp" keyboardType= "Number" verticalAlignment="center" ></TextField >
    <Button text = "Validar" class="boton" (tap)="validar()"></Button>
   </StackLayout>
<<<<<<< HEAD
=======
>>>>>>> 28a6d4f4ed0c2ae8e94fbaba43c5c26d80e5cdec
>>>>>>> 37834ff6d602c627f9adce55c820b36628569586
  </ScrollView>
 
  `,
   styleUrls: ["plantillas/css/valida.css"]
})


export class ValidaComponent {
<<<<<<< HEAD
  cp="";
  constructor(private validaService: ValidaService){
  }
=======
<<<<<<< HEAD
    validar()
    {
      
    }

    
=======
  cp="";
  constructor(private validaService: ValidaService){
  }
>>>>>>> 28a6d4f4ed0c2ae8e94fbaba43c5c26d80e5cdec
>>>>>>> 37834ff6d602c627f9adce55c820b36628569586
  
  validar(){
    console.log("valida", this.cp);
    this.validaService.getQuote(this.cp);
  }
}
