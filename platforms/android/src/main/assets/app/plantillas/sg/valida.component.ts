import { Component } from "@angular/core";
import { Router } from "@angular/router";

//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  template:
  ` 
   <ScrollView>
   <StackLayout >
    <ActionBar title="Dirección" class="action-bar"></ActionBar>
    <Image src="~/images/book.png" class="ubicacion" horizontalAlignment="center" verticalAlignment="center" ></Image>
    <Label text="¡Valida tu dirección!" horizontalAlignment="center"> </Label>
    <TextField hint="CP" [(ngModel)]="cp"></TextField >
    <Button text = "Validar" class="submit-button" (tap)="validar()"></Button>
   
   
    </StackLayout>
  </ScrollView>
 
  `
})


export class ValidaComponent {
    validar()
    {
        var cp
        console.log(cp);

    }

    
  
  }
