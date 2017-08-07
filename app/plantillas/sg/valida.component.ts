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
    <Image src="~/images/book.png" horizontalAlignment="center" verticalAlignment="center" ></Image>
    <Label text="¡Valida tu dirección!" horizontalAlignment="center"> </Label>
    <TextField hint="CP" [(ngModel)]="cp"></TextField >
    <Button text = "Validar" class="boton" (tap)="validar()"></Button>
   
                                   
    </StackLayout>
  </ScrollView>
 
  `
})


export class ValidaComponent {
    validar()
    {
      
    }

    
  
  }
