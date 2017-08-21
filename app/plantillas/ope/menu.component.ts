import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { MenuService } from "../../servicios/ope/menu";
import { Domicilio } from "../../modelos/ope/menu";

@Component({
    selector: "my-app",
    providers: [MenuService],
    templateUrl: "plantillas/ope/menu.html",
    styleUrls: ["plantillas/css/menu.css"]
})

export class MenuComponent {
    domicilio: Domicilio;
    constructor(private page: Page, private router: Router, private menuService: MenuService) {
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.domicilio = new Domicilio();
        this.domicilio.iDomicilio = "0";
        this.domicilio.iPersona = "0";
        this.domicilio.iTipoPersona = "1";
    }


    //Acciones o procesos  
    guardar() {
        var bandera = false;
        //Código que condiciona al usuario a ingresar los datos que son obligatorios para el registro de la direción
        //valida que ingrese CP
        console.log(this.domicilio.cCp);
        if (this.domicilio.cCp == null || this.domicilio.cCp == "") {
            bandera = true;
            alert("Ingrese un Codigo Postal por favor");
            return;
        }
        else {
            this.menuService.validacp(this.domicilio.cCp);
        }
        //Valida que se ingrese Colonia
        if (this.domicilio.cColonia == null || this.domicilio.cColonia == "") {
            alert("Ingrese una Colonia por favor");
            return;
        }
        //Valida que se ingrese Calle
        if (this.domicilio.cCalle == null || this.domicilio.cCalle == "") {
            alert("Ingrese una Calle por favor");
            return;
        }
        //Valida que se ingrese un Numero Exterior
        if (this.domicilio.cNumExterior == null || this.domicilio.cNumExterior == "") {
            alert("Ingrese un Numero Exterior por favor");
            return;
        }
        //Valida que se ingrese un Municipio
        if (this.domicilio.cMunicipio == null || this.domicilio.cMunicipio == "") {
            alert("Ingrese un Municipio por favor");
            return;
        }
        //Valida que se ingrese una Ciudad
        if (this.domicilio.cCiudad == null || this.domicilio.cCiudad == "") {
            alert("Ingrese una Ciudad por favor");
            return;
        }
        //Valida que se ingrese un Estado
        if (this.domicilio.cEstado == null || this.domicilio.cEstado == "") {
            alert("Ingrese un Estado por favor");
            return;
        }
        //Valida que se ingrese un Pais
        if (this.domicilio.cPais == null || this.domicilio.cPais == "") {
            alert("Ingrese un Pais por favor");
            return;
        }
        //Valida que se ingrese un Alias
        if (this.domicilio.iAlias == null || this.domicilio.iAlias == "") {
             bandera = true;
            alert("Ingrese un Alias por favor");
            return;
        }
        //si todas las validaciones son correctas para a la insercion de datos 
        this.menuService.postQuote(this.domicilio);

    }
    back() {
        this.router.navigate(["sg/usuario"]);
    }
}
