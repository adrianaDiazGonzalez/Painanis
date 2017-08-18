"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var persona_1 = require("../../modelos/sg/persona");
var persona_2 = require("../../servicios/sg/persona");
//Declaración de los componentes de la vista
var PersonaComponent = (function () {
    //Constructor
    function PersonaComponent(page, personaService) {
        this.page = page;
        this.personaService = personaService;
        //Declaracion de variable
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        page.actionBarHidden = true;
        this.persona = new persona_1.Persona();
        this.persona.iPersona = "0";
        this.persona.iTipoPersona = "1";
        this.persona.lGenero = false;
        this.persona.dtFechaNac = "";
        this.persona.lActivo = true;
    }
    //Acciones o procesos  
    PersonaComponent.prototype.submit = function () {
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
    __metadata("design:paramtypes", [page_1.Page, persona_2.PersonaService])
], PersonaComponent);
exports.PersonaComponent = PersonaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFNNUQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBTXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLGNBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOdEUseUJBQXlCO1FBQ2xCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFLNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx1QkFBdUI7SUFDdkIsaUNBQU0sR0FBTjtRQUNJLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZiw2RkFBNkY7UUFDN0YsaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9B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QWEsR0FBYixVQUFjLElBQUk7SUFDbEIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXZGRCxJQXVGQztBQXZGWSxnQkFBZ0I7SUFSNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHdCQUFjLENBQUM7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztLQUNyRCxDQUFDO0lBQ0Ysb0NBQW9DOztxQ0FRTixXQUFJLEVBQTBCLHdCQUFjO0dBUDdELGdCQUFnQixDQXVGNUI7QUF2RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IFBlcnNvbmFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0ICogYXMgZGF0ZVBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ1aS9zd2l0Y2hcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUGVyc29uYVNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBlcnNvbmEuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9jc3MvcGVyc29uYS5jc3NcIiwgXCIuLi8uLi9hcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hIFxyXG5leHBvcnQgY2xhc3MgUGVyc29uYUNvbXBvbmVudCB7XHJcbiAgICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgIHBlcnNvbmE6IFBlcnNvbmE7XHJcblxyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHBlcnNvbmFTZXJ2aWNlOiBQZXJzb25hU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBlcnNvbmEgPSBuZXcgUGVyc29uYSgpO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEdlbmVybyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5kdEZlY2hhTmFjID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEFjdGl2byA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL0FjY2lvbmVzIG8gcHJvY2Vzb3MgIFxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIC8vdmFyaWFibGVzIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZW1haWxSZWdleDtcclxuICAgICAgICAvL0PDs2RpZ28gcXVlIGNvbmRpY2lvbmEgYWwgdXN1YXJpbyBhIGluZ3Jlc2FyIGxvcyBkYXRvcyBxdWUgc29uIG9ibGlnYXRvcmlvcyBwYXJhIGVsIHJlZ2lzdHJvXHJcbiAgICAgICAgLy92YWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTm9tYnJlXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jTm9tYnJlID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNOb21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFRlbGVmb25vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFRlbGVmb25vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBVc3VhcmlvXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBVc3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1bmEgQ29udHJhc2XDsWFcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBlbCBjb3JyZW8gcXVlIHNlIGluZ3Jlc2EgdGVuZ2EgZWwgZm9ybWF0byBkZSBFbWFpbFxyXG4gICAgICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvcnJlbyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQ29ycmVvKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zICBcclxuICAgICAgICB0aGlzLnBlcnNvbmFTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnBlcnNvbmEpO1xyXG4gICAgfVxyXG4gICAgLy9NZXRvZG8gcGFyYSBlbCBjYW1wbyBkZSBHZW5lcm9cclxuICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL01ldG9kb3MgcGFyYSBlbCBjYW1wbyBkZSBmZWNoYSBkZSBuYWNpbWllbnRvXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTcwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTtcclxuICAgIH1cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF5Q2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb250aENoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==