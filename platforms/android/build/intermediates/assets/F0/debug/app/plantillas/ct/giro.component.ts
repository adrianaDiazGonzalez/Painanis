import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "my-app",
  template: `
     <ActionBar title="Giros" class="action-bar"></ActionBar>
  <GridLayout>
   <Button text = " Agregar giro "    (tap)="giroagregar()"></Button>
    <ListView [items]="lista" class="small-spacing">
      <ng-template let-item="item">
        <Label [text]="item.name" class="medium-spacing"></Label>
      </ng-template>
    </ListView>
  </GridLayout>
    `
})
export class GiroComponent implements OnInit {
  constructor( private router: Router){

  }
  giroagregar(){
    this.router.navigate(["/ct/agregar"]);
  }
  lista: Array<Object> = [];

  ngOnInit() {
    this.lista.push({ name: "farmacia" , id: 1 });
    this.lista.push({ name: "Frutas" , id: 2});
    this.lista.push({ name: "Comida" , id: 3});
  }

}