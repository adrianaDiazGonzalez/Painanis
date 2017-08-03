import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  template: `
  <ScrollView>
   <StackLayout>
    <ActionBar title="Ménu" class="action-bar"></ActionBar>
    <Button text = "Giro"       class="boton" (tap)="giro()"></Button>
    <Button text = "Validar"     class="boton" (tap)="validar()"></Button>
    <Button text = "Categorias" class="boton" (tap)="cat()"></Button>
     </StackLayout>
  </ScrollView>
  `
})
export class MenuComponent {

  constructor( private router: Router){

  }
  giro()
    {
      this.router.navigate(["/ct/giro"]);
    }
  
  validar()
    {
      this.router.navigate(["/sg/valida"]);
    }
    
  cat()
    {
      this.router.navigate(["/ope/categoria"]);
    }
}
