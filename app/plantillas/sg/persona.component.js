"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var persona_1 = require("../../modelos/sg/persona");
var persona_2 = require("../../servicios/sg/persona");
var router_1 = require("@angular/router");
//importacion para mantener la sesion activa
var sesionActiva_1 = require("../../sesionActiva");
//Declaración de los componentes de la vista
var PersonaComponent = (function () {
    //Constructor
    function PersonaComponent(page, router, personaService) {
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
    //Acciones o procesos al precionar el boton
    PersonaComponent.prototype.submit = function () {
        var _this = this;
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
        this.personaService.postQuote(this.persona).
            then(function (resolve) {
            resolve
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (result.response.opcMensaje != "") {
                    alert("El usuario ya existe");
                }
                else {
                    _this.router.navigate(["ope/menu"]);
                }
            });
        });
        //localstorage
        console.log(this.persona.cApaterno);
        console.log("perosna lis", this.personaList);
        sesionActiva_1.SesionActiva.sesion = this.persona;
    };
    //Metodo para el campo de Genero
    PersonaComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        }
        else {
            this.secondSwitchState = true;
        }
    };
    //Metodos para el campo de fecha de nacimiento
    PersonaComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;
    };
    PersonaComponent.prototype.onDateChanged = function (args) {
    };
    PersonaComponent.prototype.onDayChanged = function (args) {
    };
    PersonaComponent.prototype.onMonthChanged = function (args) {
    };
    PersonaComponent.prototype.onYearChanged = function (args) {
    };
    return PersonaComponent;
}());
PersonaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [persona_2.PersonaService],
        moduleId: module.id,
        templateUrl: "persona.html",
        styleUrls: ["../css/persona.css", "../../app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, persona_2.PersonaService])
], PersonaComponent);
exports.PersonaComponent = PersonaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBUXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVI5Rix5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDLG1EQUFtRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBMkM7SUFDM0MsaUNBQU0sR0FBTjtRQUFBLGlCQTJEQztRQTFERyw2QkFBNkI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BC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QkFBb0IsRUFBRSxlQUFlLENBQUM7S0FDckQsQ0FBQztJQUNGLG9DQUFvQzs7cUNBVU4sV0FBSSxFQUFrQixlQUFNLEVBQTBCLHdCQUFjO0dBVHJGLGdCQUFnQixDQTBHNUI7QUExR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IFBlcnNvbmFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0ICogYXMgZGF0ZVBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ1aS9zd2l0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vL2ltcG9ydGFjaW9uIHBhcmEgbWFudGVuZXIgbGEgc2VzaW9uIGFjdGl2YVxyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmEgfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1BlcnNvbmFTZXJ2aWNlXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwZXJzb25hLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vY3NzL3BlcnNvbmEuY3NzXCIsIFwiLi4vLi4vYXBwLmNzc1wiXVxyXG59KVxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmFDb21wb25lbnQge1xyXG4gICAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZVxyXG4gICAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgZ2VuZXJvXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJzb25hTGlzdDogQXJyYXk8UGVyc29uYT47XHJcbiAgICBwZXJzb25hOiBQZXJzb25hO1xyXG5cclxuICAgIC8vQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwZXJzb25hU2VydmljZTogUGVyc29uYVNlcnZpY2UpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vT2N1bHRhIGxhIGJhcnJhIHN1cGVyaW9yIGVuIGxhIHBhbnRhbGxhXHJcbiAgICAgICAgdGhpcy5wZXJzb25hID0gbmV3IFBlcnNvbmEoKTsgLy9JbnN0YW5jZWEgZWwgb2JqZXRvIGRlIHBlcnNvbmEgYSBsYSB0YWJsYSBQZXJzb25hXHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlQZXJzb25hID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sR2VuZXJvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmR0RmVjaGFOYWMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sQWN0aXZvID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vQWNjaW9uZXMgbyBwcm9jZXNvcyBhbCBwcmVjaW9uYXIgZWwgYm90b25cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAvL3ZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpb25lc1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGVtYWlsUmVnZXg7XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3Ryb1xyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE5vbWJyZVxyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jTm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNBcGF0ZXJubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBUZWxlZm9ub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNUZWxlZm9ubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBUZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gVXN1YXJpb1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgZWwgY29ycmVvIHF1ZSBzZSBpbmdyZXNhIHRlbmdhIGVsIGZvcm1hdG8gZGUgRW1haWxcclxuICAgICAgICBlbWFpbFJlZ2V4ID0gL15bLVxcdy4lK117MSw2NH1AKD86W0EtWjAtOS1dezEsNjN9XFwuKXsxLDEyNX1bQS1aXXsyLDYzfSQvaTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb3JyZW8gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0NvcnJlbykpIHtcclxuICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIGNvcnJlbyB2YWxpZG9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zaSB0b2RhcyBsYXMgdmFsaWRhY2lvbmVzIHNvbiBjb3JyZWN0YXMgcGFyYSBhIGxhIGluc2VyY2lvbiBkZSBkYXRvcyAgXHJcbiAgICAgICAgdGhpcy5wZXJzb25hU2VydmljZS5wb3N0UXVvdGUodGhpcy5wZXJzb25hKS5cclxuICAgICAgICAgICAgdGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWwgdXN1YXJpbyB5YSBleGlzdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvbWVudVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZXJzb25hLmNBcGF0ZXJubyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwZXJvc25hIGxpc1wiLCB0aGlzLnBlcnNvbmFMaXN0KTtcclxuICAgICAgICBTZXNpb25BY3RpdmEuc2VzaW9uID0gdGhpcy5wZXJzb25hO1xyXG4gICAgfVxyXG4gICAgLy9NZXRvZG8gcGFyYSBlbCBjYW1wbyBkZSBHZW5lcm9cclxuICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL01ldG9kb3MgcGFyYSBlbCBjYW1wbyBkZSBmZWNoYSBkZSBuYWNpbWllbnRvXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTcwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTtcclxuICAgIH1cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF5Q2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb250aENoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==