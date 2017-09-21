"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var persona_1 = require("../../modelos/sg/persona");
var persona_2 = require("../../servicios/sg/persona");
//importacion para mantener la sesion activa
var sesionActiva_1 = require("../../sesionActiva");
var ActualizaDatosComponent = (function () {
    //Constructor
    function ActualizaDatosComponent(page, router, personaService) {
        this.page = page;
        this.router = router;
        this.personaService = personaService;
        //Declaracion de variable
        //variables para el radio button de genero
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        page.actionBarHidden = true; //Oculta la barra superior en la pantalla
        this.persona = new persona_1.Persona(); //Instancea el objeto de persona a la tabla Persona
        this.persona.iPersona = "0";
        this.persona.iTipoPersona = "1";
        this.persona.lGenero = false;
        this.persona.dtFechaNac = "";
        this.persona.lActivo = true;
    }
    ActualizaDatosComponent.prototype.submit = function () {
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
        sesionActiva_1.SesionActiva.sesion = this.persona;
    };
    //Metodo para el campo de Genero
    ActualizaDatosComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        }
        else {
            this.secondSwitchState = true;
        }
    };
    //Metodos para el campo de fecha de nacimiento
    ActualizaDatosComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;
    };
    ActualizaDatosComponent.prototype.onDateChanged = function (args) {
    };
    ActualizaDatosComponent.prototype.onDayChanged = function (args) {
    };
    ActualizaDatosComponent.prototype.onMonthChanged = function (args) {
    };
    ActualizaDatosComponent.prototype.onYearChanged = function (args) {
    };
    return ActualizaDatosComponent;
}());
ActualizaDatosComponent = __decorate([
    core_1.Component({
        //Declaración de los componentes de la vista
        selector: "my-app",
        providers: [persona_2.PersonaService],
        templateUrl: "vistas/ope/actualizaDatos.html",
        styleUrls: ["vistas/css/actualizaDatos.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, persona_2.PersonaService])
], ActualizaDatosComponent);
exports.ActualizaDatosComponent = ActualizaDatosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0RGF0b3NQZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0RGF0b3NQZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBRy9CLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsNENBQTRDO0FBQzVDLG1EQUFrRDtBQVdsRCxJQUFhLHVCQUF1QjtJQVNsQyxhQUFhO0lBQ2IsaUNBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsY0FBOEI7UUFBMUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUOUYseUJBQXlCO1FBQ3pCLDBDQUEwQztRQUNuQyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBTzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMseUNBQXlDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUMsQ0FBQyxtREFBbUQ7UUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBQ0Qsd0NBQU0sR0FBTjtRQUVFLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLFNBQVMs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QyxDQUFDO0lBQ0gsQ0FBQztJQUNELDhDQUE4QztJQUM5QyxnREFBYyxHQUFkLFVBQWUsSUFBSTtRQUNqQixJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtJQUNsQixDQUFDO0lBRUQsOENBQVksR0FBWixVQUFhLElBQUk7SUFDakIsQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFJO0lBQ25CLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsSUFBSTtJQUNsQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBakhELElBaUhDO0FBakhZLHVCQUF1QjtJQVRuQyxnQkFBUyxDQUFDO1FBQ1QsNENBQTRDO1FBQzVDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHdCQUFjLENBQUM7UUFDM0IsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO0lBRUYsb0NBQW9DOztxQ0FXUixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsd0JBQWM7R0FWbkYsdUJBQXVCLENBaUhuQztBQWpIWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IEZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5pbXBvcnQgeyBQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBQZXJzb25hU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGRhdGVQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1BlcnNvbmFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL2FjdHVhbGl6YURhdG9zLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvYWN0dWFsaXphRGF0b3MuY3NzXCJdXHJcbn0pXHJcblxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIEFjdHVhbGl6YURhdG9zQ29tcG9uZW50IHtcclxuICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlXHJcbiAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgZ2VuZXJvXHJcbiAgcHVibGljIGZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgcGVyc29uYUxpc3Q6IEFycmF5PFBlcnNvbmE+O1xyXG4gIHBlcnNvbmE6IFBlcnNvbmE7XHJcblxyXG4gIC8vQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGVyc29uYVNlcnZpY2U6IFBlcnNvbmFTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vT2N1bHRhIGxhIGJhcnJhIHN1cGVyaW9yIGVuIGxhIHBhbnRhbGxhXHJcbiAgICB0aGlzLnBlcnNvbmEgPSBuZXcgUGVyc29uYSgpOyAvL0luc3RhbmNlYSBlbCBvYmpldG8gZGUgcGVyc29uYSBhIGxhIHRhYmxhIFBlcnNvbmFcclxuICAgIHRoaXMucGVyc29uYS5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgdGhpcy5wZXJzb25hLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgdGhpcy5wZXJzb25hLmxHZW5lcm8gPSBmYWxzZTtcclxuICAgIHRoaXMucGVyc29uYS5kdEZlY2hhTmFjID0gXCJcIjtcclxuICAgIHRoaXMucGVyc29uYS5sQWN0aXZvID0gdHJ1ZTtcclxuICB9XHJcbiAgc3VibWl0KCkge1xyXG5cclxuICAgIC8vdmFyaWFibGVzIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICB2YXIgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgdmFyIGVtYWlsUmVnZXg7XHJcbiAgICB2YXIgbmFtZVJlZ2V4O1xyXG4gICAgdmFyIGFwUmVnZXg7XHJcbiAgICB2YXIgYW1SZWdleDtcclxuXHJcbiAgICAvL3ZhbGlkYSBxdWUgZWwgbm9tYnJlIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgIG5hbWVSZWdleCA9IC8oW0EtWl1bYS16XSkvO1xyXG5cclxuICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSAhPSBcIlwiICYmIHRoaXMucGVyc29uYS5jTm9tYnJlICE9IG51bGwpIHtcclxuICAgICAgaWYgKCFuYW1lUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY05vbWJyZSkpIHtcclxuICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL3ZhbGlkYSBxdWUgZWwgQXBlbGxpZG8gUGF0ZXJubyBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICBhcFJlZ2V4ID0gL14oW0EtWl1bYS16XSkvO1xyXG4gICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gIT0gXCJcIiAmJiB0aGlzLnBlcnNvbmEuY0FwYXRlcm5vICE9IG51bGwpIHtcclxuICAgICAgaWYgKCFhcFJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNBcGF0ZXJubykpIHtcclxuICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJubyB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy92YWxpZGEgcXVlIGVsIEFwZWxsaWRvIE1hdGVybm8gc2VhbiBsZXRyYXMgeSBubyBudW1lcm9zIFxyXG4gICAgYW1SZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuICAgIGlmICh0aGlzLnBlcnNvbmEuY0FtYXRlcm5vICE9IFwiXCIgJiYgdGhpcy5wZXJzb25hLmNBbWF0ZXJubyAhPSBudWxsKSB7XHJcbiAgICAgIGlmICghYW1SZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQW1hdGVybm8pKSB7XHJcbiAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIE1hdGVybm8gdmFsaWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1ZhbGlkYSBxdWUgZWwgY29ycmVvIHF1ZSBzZSBpbmdyZXNhIHRlbmdhIGVsIGZvcm1hdG8gZGUgRW1haWxcclxuICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgaWYgKHRoaXMucGVyc29uYS5jQ29ycmVvICE9IFwiXCIgJiYgdGhpcy5wZXJzb25hLmNDb3JyZW8gIT0gbnVsbCkge1xyXG4gICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0NvcnJlbykpIHtcclxuICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9kYXRvc1wiXSk7XHJcbiAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zICBcclxuICAgIC8qdGhpcy5wZXJzb25hU2VydmljZS5wb3N0UXVvdGUodGhpcy5wZXJzb25hKS5cclxuICAgICAgdGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmVcclxuICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiRWwgdXN1YXJpbyB5YSBleGlzdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2RhdG9zXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSk7Ki9cclxuXHJcbiAgICAvL2xvY2Fsc3RvcmFnZVxyXG4gICAgU2VzaW9uQWN0aXZhLnNlc2lvbiA9IHRoaXMucGVyc29uYTtcclxuICB9XHJcblxyXG4gIC8vTWV0b2RvIHBhcmEgZWwgY2FtcG8gZGUgR2VuZXJvXHJcbiAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgIGxldCBmaXJzdFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL01ldG9kb3MgcGFyYSBlbCBjYW1wbyBkZSBmZWNoYSBkZSBuYWNpbWllbnRvXHJcbiAgb25QaWNrZXJMb2FkZWQoYXJncykge1xyXG4gICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgIGRhdGVQaWNrZXIueWVhciA9IDE5NzA7XHJcbiAgICBkYXRlUGlja2VyLm1vbnRoID0gMTtcclxuICAgIGRhdGVQaWNrZXIuZGF5ID0gMTtcclxuICB9XHJcbiAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgfVxyXG5cclxuICBvbkRheUNoYW5nZWQoYXJncykge1xyXG4gIH1cclxuXHJcbiAgb25Nb250aENoYW5nZWQoYXJncykge1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==