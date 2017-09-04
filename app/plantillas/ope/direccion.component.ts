import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { DireccionService } from "../../servicios/ope/direccion";
import { Domicilio } from "../../modelos/ope/direccionM";
import dialogs = require("ui/dialogs");


@Component({
    selector: "my-app",
    providers: [DireccionService],
    templateUrl: "plantillas/ope/menu.html",
    styleUrls: ["plantillas/css/menu.css"]
})
export class DireccionComponent {
    domicilio: Domicilio;
    public title: string;
    public message: string;
    public titleAlign?: string;
    public messageAlign?: string;
    public btnOkText?: string;
    public btnCancelText?: string;

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
            this.menuService.validacp(this.domicilio.cCp).then(
                (resolve) => {
                    resolve
                        .map(response => response.json())
                        .subscribe(result => {
                                if (result.response.opcMensaje != "") {
                                    alert("Codigo Postal invalido");
                                }
                                else {
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
                                /* if (this.domicilio.iAlias == null || this.domicilio.iAlias == "") {
                                     bandera = true;
                                     alert("Ingrese un Alias por favor");
                                     return;
                                 }*/
                                //si todas las validaciones son correctas para a la insercion de datos 
                                console.log("tabla", JSON.stringify(this.domicilio))
                                this.menuService.postQuote(this.domicilio);
                                dialogs.confirm({
                                    title: "¿Desea ingresar otra direccion?",
                                    okButtonText: "Si",
                                    cancelButtonText: "No",
                                }).then(r => {
                                    console.log(r);
                                    if (r) {
                                        this.router.navigate(["ope/menu"]);
                                    }
                                    else {
                                        this.router.navigate(["ope/categoria"]);
                                    }
                                });
                            }
                        }, error => {
                            JSON.stringify(error);
                        });
                }
            );
        }
    }
    back() {
        this.router.navigate(["sg/usuario"]);
    }
    id1(){

    }
    id2(){

    }
    id3(){

    }
    id4(){

    }
    id5(){

    }
}
