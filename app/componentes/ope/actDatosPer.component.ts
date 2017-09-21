//importaciones de recursos a utilizar
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HttpModule, Http } from '@angular/http';
import { Page } from "ui/page";
import { Frame } from "ui/frame";
import FrameModule = require("ui/frame");
import { Persona } from "../../modelos/sg/persona";
import { PersonaService } from "../../servicios/sg/persona";
import { DatePicker } from "ui/date-picker";
import * as datePickerModule from "tns-core-modules/ui/date-picker";
import { EventData } from "data/observable";
import { Switch } from "ui/switch";
//importacion para mantener la sesion activa
import { SesionActiva } from "../../sesionActiva";

@Component({
  //Declaración de los componentes de la vista
  selector: "my-app",
  providers: [PersonaService],
  templateUrl: "vistas/ope/actualizaDatos.html",
  styleUrls: ["vistas/css/actualizaDatos.css"]
})

//Acciones y procesos de la ventana 
export class ActualizaDatosComponent {
  //Declaracion de variable
  //variables para el radio button de genero
  public firstSwitchState = false;
  public secondSwitchState = true;

  public personaList: Array<Persona>;
  persona: Persona;

  //Constructor
  constructor(private page: Page, private router: Router, private personaService: PersonaService) {
    page.actionBarHidden = true; //Oculta la barra superior en la pantalla
    this.persona = new Persona(); //Instancea el objeto de persona a la tabla Persona
    this.persona.iPersona = "0";
    this.persona.iTipoPersona = "1";
    this.persona.lGenero = false;
    this.persona.dtFechaNac = "";
    this.persona.lActivo = true;
  }
  submit() {

    //variables para validaciones
    var bandera = false;
    var emailRegex;
    var nameRegex;
    var apRegex;
    var amRegex;

    //valida que el nombre sean letras y no numeros 
    nameRegex = /([A-Z][a-z])/;

    if (this.persona.cNombre != "" && this.persona.cNombre != null) {
      if (!nameRegex.test(this.persona.cNombre)) {
        bandera = true;
        alert("Ingrese un Nombre valido por favor");
        return;
      }
    }
    //valida que el Apellido Paterno sean letras y no numeros 
    apRegex = /^([A-Z][a-z])/;
    if (this.persona.cApaterno != "" && this.persona.cApaterno != null) {
      if (!apRegex.test(this.persona.cApaterno)) {
        bandera = true;
        alert("Ingrese un Apellido Paterno valido por favor");
        return;
      }
    }
    //valida que el Apellido Materno sean letras y no numeros 
    amRegex = /^([A-Z][a-z])/;
    if (this.persona.cAmaterno != "" && this.persona.cAmaterno != null) {
      if (!amRegex.test(this.persona.cAmaterno)) {
        bandera = true;
        alert("Ingrese un Apellido Materno valido por favor");
        return;
      }
    }

    //Valida que el correo que se ingresa tenga el formato de Email
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (this.persona.cCorreo != "" && this.persona.cCorreo != null) {
      if (!emailRegex.test(this.persona.cCorreo)) {
        bandera = true;
        alert("Ingrese correo valido");
        return;
      }
    }
    this.router.navigate(["ope/datos"]);
    //si todas las validaciones son correctas para a la insercion de datos  
    /*this.personaService.postQuote(this.persona).
      then((resolve) => {
        resolve
          .map(response => response.json())
          .subscribe(result => {
            if (result.response.opcMensaje != "") {
              alert("El usuario ya existe");
            }
            else {
              this.router.navigate(["ope/datos"]);
            }
          })
      });*/

    //localstorage
    SesionActiva.sesion = this.persona;
  }

  //Metodo para el campo de Genero
  public onFirstChecked(args) {
    let firstSwitch = <Switch>args.object;
    if (firstSwitch.checked) {
      this.firstSwitchState = false;
    } else {
      this.secondSwitchState = true;
    }
  }
  //Metodos para el campo de fecha de nacimiento
  onPickerLoaded(args) {
    let datePicker = <DatePicker>args.object;
    datePicker.year = 1970;
    datePicker.month = 1;
    datePicker.day = 1;
  }
  onDateChanged(args) {
  }

  onDayChanged(args) {
  }

  onMonthChanged(args) {
  }

  onYearChanged(args) {
  }
}









