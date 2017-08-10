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
  templateUrl:"persona.html",
  styleUrls: ["../css/persona.css", "../../app.css"]
})

export class PersonaComponent {
    public firstSwitchState = false;
    public secondSwitchState = true;
    persona: Persona;

    constructor(private page: Page, private personaService: PersonaService) {
        page.actionBarHidden = true;  
        this.persona = new Persona();
        this.persona.persona="0";
        this.persona.tipoPersona="1";
       /* this.persona.nombre="";
        this.persona.apaterno="";
        this.persona.amaterno="";*/
        this.persona.genero=false;
        this.persona.fechanac= "18/08/1992";
       /* this.persona.edad="";
        this.persona.telefono="";
        this.persona.correo="";
        this.persona.usuario="";
        this.persona.contrasena="";*/
        this.persona.activo= true;
        
       
    }
    
    submit(){
        this.personaService.postQuote(this.persona);
    }
    
    public onFirstChecked(args) {
        let firstSwitch = <Switch>args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        } else {
             this.secondSwitchState = true;   
        }
    }
    
    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;  
    }

    onDateChanged(args) {
        /*console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    }

    onDayChanged(args) {
        /*console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    }

   onMonthChanged(args) {
       /* console.log("Month changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    }

    onYearChanged(args) {
     /*   console.log("Year changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
   }
}



