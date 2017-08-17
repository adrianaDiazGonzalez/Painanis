//importaciones de recursos a utilizar
import { Page } from "ui/page";
import { Component } from "@angular/core";
import { Persona } from "../../modelos/sg/persona";
import { PersonaService } from "../../servicios/sg/persona";
import { DatePicker } from "ui/date-picker";
import * as datePickerModule from "tns-core-modules/ui/date-picker";
import { EventData } from "data/observable";
import { Switch } from "ui/switch";

//Declaración de los componentes de la vista
@Component({
    selector: "my-app",
    providers: [PersonaService],
    moduleId: module.id,
    templateUrl: "persona.html",
    styleUrls: ["../css/persona.css", "../../app.css"]
})
//Acciones y procesos de la ventana 
export class PersonaComponent {
    //Declaracion de variable
    public firstSwitchState = false;
    public secondSwitchState = true;
    persona: Persona;

    //Constructor
    constructor(private page: Page, private personaService: PersonaService) {
        page.actionBarHidden = true;
        this.persona = new Persona();
        this.persona.iPersona = "0";
        this.persona.iTipoPersona = "1";
        this.persona.lGenero = false;
        this.persona.dtFechaNac = "";
        this.persona.lActivo = true;
    }
    //Acciones o procesos  
    submit() {
        //variables para validaciones
        var bandera = false;
        var emailRegex;
        //Código que condiciona al usuario a ingresar los datos que son obligatorios para el registro
        //valida que se ingrese un Nombre
        if (this.persona.cNombre == null || this.persona.cNombre == "") {
            alert("Ingrese un Nombre por favor");
            return;
        }
        //Valida que se ingrese un Apellido Paterno
        if (this.persona.cApaterno == null || this.persona.cApaterno == "") {
            alert("Ingrese un Apellido Paterno por favor");
            return;
        }
        //Valida que se ingrese un Telefono
        if (this.persona.cTelefono == null || this.persona.cTelefono == "") {
            alert("Ingrese un Telefono por favor");
            return;
        }
        //Valida que se ingrese un Usuario
        if (this.persona.cUsuario == null || this.persona.cUsuario == "") {
            alert("Ingrese un Usuario por favor");
            return;
        }
        //Valida que se ingrese una Contraseña
        if (this.persona.cContrasena == null || this.persona.cContrasena == "") {
            bandera = true;
            alert("Ingrese una Contraseña por favor");
            return;
        }
        //Valida que el correo que se ingresa tenga el formato de Email
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (this.persona.cCorreo != "") {
            if (!emailRegex.test(this.persona.cCorreo)) {
                bandera = true;
                alert("Ingrese correo valido");
                return;
            }
        }
        //si todas las validaciones son correctas para a la insercion de datos  
        this.personaService.postQuote(this.persona);
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



