//importaciones de recursos a utilizar
import { Component } from "@angular/core";
import { Registro } from "../../modelos/sg/registro";
import { RegistroService } from "../../servicios/sg/registro";
import * as datePickerModule from "tns-core-modules/ui/date-picker";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";
import { Switch } from "ui/switch";


//Declaración de los componentes de la vista
@Component({
  selector: "my-app",
  providers: [RegistroService],
  templateUrl:"plantillas/sg/registro.html",
  styleUrls: ["plantillas/css/registro.css"]
})

export class RegistroComponent {
    public firstSwitchState = false;
    public secondSwitchState = true;
    registro: Registro;

    constructor(private registroService: RegistroService) {
        this.registro = new Registro();
        this.registro.genero=false;
    }
    
    submit(){
        console.log("HOLA");
        this.registroService.postQuote(this.registro);
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
