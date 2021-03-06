import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import FrameModule = require("ui/frame");

@Component({
  selector: "my-app",
  template: `
  <ScrollView>
   <StackLayout>
    <ActionBar title="Ménu" class="action-bar"></ActionBar>

    <Button text = "Validar"     class="boton" (tap)="validar()"></Button>
    <Button text = "Carrito Compra"     class="boton" (tap)="carrito()"></Button>
    <Button text = "Tipo de Pago"     class="boton" (tap)="pago()"></Button>
    <Button text = "Efectivo"     class="boton" (tap)="efectivo()"></Button>
    <Button text = "Aviso"     class="boton" (tap)="aviso()"></Button>

    <Button text = "tarjeta"        class="boton" (tap)="tarjeta()"></Button>
    <Button text = "detalleprod"        class="boton" (tap)="detprod()"></Button>
    <Button text = " Evaluacion "        class="boton" (tap)="evaluacion()"></Button>
        


    <Button text = "Usuario"    class="boton" (tap)="usuario()"></Button>
    <Button text = "Contraseña"  class="boton" (tap)="contrasena()"></Button>
    <Button text = "Cambio de Contraseña"    class="boton" (tap)="cambioContra()"></Button>
    
    <Button text = "Eleccion Giro" class="boton" (tap)="elegir()"></Button>

    <Button text = "Registro cliente" class="boton" (tap)="registroC()"></Button>
    <Button text = "Registro proveedor" class="boton" (tap)="registroP()"></Button>
    <Button text = "Registro painani-sup-dir " class="boton" (tap)="registroV()"></Button>

    <Button text = "DireccionCliente"    class="boton" (tap)="dirCli()"></Button>
    
    <Button text = "Categorias" class="boton" (tap)="cat()"></Button>
    
    <Button text = "Ménu"        class="boton" (tap)="datos()"></Button>
    <Button text = "Act. Datos per"    class="boton" (tap)="actualizadatos()"></Button>
    <Button text = "Act. Dir"    class="boton" (tap)="actualizadir()"></Button>
    <Button text = "tarjeta"        class="boton" (tap)="tarjeta()"></Button>

    <Button text = "detalleprod"        class="boton" (tap)="detprod()"></Button>  

    <Button text = "Giro"       class="boton" (tap)="giro()"></Button> 
    <Button text = "atributos"        class="boton" (tap)="atributos()"></Button>
    
     </StackLayout>
  </ScrollView>
  `
})
export class ListaComponent {

  constructor(private router: Router) {

  }
  carrito(){
    this.router.navigate(["ope/carrito"]);

  }
  pago(){

  }
  efectivo(){

  }

  evaluacion(){
    this.router.navigate(["ope/evaluacion"]);
  }

  tarjeta() {
    this.router.navigate(["ope/tarjeta"]);
  }
  detprod() {
    this.router.navigate(["ope/detprod"]);
  }

  validar() {
    this.router.navigate(["/sg/valida"]);
  }
   usuario() {
    this.router.navigate(["/sg/usuario"]);
  }
  contrasena() {
    this.router.navigate(["/sg/contrasena"]);
  }
  cambioContra() {
    this.router.navigate(["/sg/cambio"]);
  }
  elegir(){
    this.router.navigate(["/ope/eleccion"]);
  }
  registroC() {
    this.router.navigate(["/sg/persona"]);
  }
  registroP() {
    this.router.navigate(["/sg/proveedor"]);
  }
  registroV() {
    this.router.navigate(["/sg/regvarios"]);
  }
    dirCli() {
    this.router.navigate(["/ope/dir"]);
  }
  cat() {
    this.router.navigate(["/ope/categoria"]);
  }
 
  //Adriana
  datos() {
    this.router.navigate(["/ope/datos"]);
  }
  actualizadatos() {
     this.router.navigate(["/ope/actDatPer"]);
  }
  actualizadir() {
     this.router.navigate(["/ope/actdir"]);
  } 

   //edgar
  
  


   giro() {
    this.router.navigate(["/ct/giro"]);
  }
   atributos() {
    this.router.navigate(["/ct/atributo"]);
  }
}

