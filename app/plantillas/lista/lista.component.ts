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
    <Button text = "Usuario"    class="boton" (tap)="usuario()"></Button>
    <Button text = "Registro"    class="boton" (tap)="registro()"></Button>
    <Button text = "Contraseña"  class="boton" (tap)="contrasena()"></Button>
    <Button text = "Cambio de Contraseña"    class="boton" (tap)="cambio()"></Button>
    <Button text = "Menu"        class="boton" (tap)="menu()"></Button>
    <Button text = "Datos"       class="boton" (tap)="datos()"></Button>
     </StackLayout>
  </ScrollView>
  `
})
export class ListaComponent {

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
    usuario()
    {
      this.router.navigate(["/sg/usuario"]);
    }
     registro()
    {
      this.router.navigate(["/sg/persona"]);
    }
    contrasena()
    {
      this.router.navigate(["/sg/contrasena"]);
    }
     cambio()
    {
      this.router.navigate(["/sg/cambio"]);
    }
    menu()
    {
      this.router.navigate(["/ope/menu"]);
    }
    datos()
    {
      this.router.navigate(["/ope/datos"]);
    }
}
