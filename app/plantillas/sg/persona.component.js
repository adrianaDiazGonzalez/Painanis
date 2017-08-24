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
                    console.log("me registre exitosamente");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFHbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBT3pCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFTLE1BQWMsRUFBVSxjQUE4QjtRQUF6RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVA3Rix5QkFBeUI7UUFDbEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQU01QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUNELHVCQUF1QjtJQUN2QixpQ0FBTSxHQUFOO1FBQUEsaUJBNkRDO1FBNURHLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZiw2RkFBNkY7UUFDN0YsaUNB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LENBQUMsb0JBQW9CLEVBQUUsZUFBZSxDQUFDO0tBQ3JELENBQUM7SUFDRixvQ0FBb0M7O3FDQVNOLFdBQUksRUFBaUIsZUFBTSxFQUEwQix3QkFBYztHQVJwRixnQkFBZ0IsQ0EyRzVCO0FBM0dZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBQZXJzb25hU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGRhdGVQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy9pbXBvcnRhY2lvbiBwYXJhIG1hbnRlbmVyIGxhIHNlc2lvbiBhY3RpdmFcclxuaW1wb3J0IHsgU2VzaW9uQWN0aXZhIH0gZnJvbSBcIi4uLy4uL3Nlc2lvbkFjdGl2YVwiO1xyXG5cclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUGVyc29uYVNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBlcnNvbmEuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9jc3MvcGVyc29uYS5jc3NcIiwgXCIuLi8uLi9hcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hIFxyXG5leHBvcnQgY2xhc3MgUGVyc29uYUNvbXBvbmVudCB7XHJcbiAgICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJzb25hTGlzdDogQXJyYXk8UGVyc29uYT47XHJcbiAgICBwZXJzb25hOiBQZXJzb25hO1xyXG5cclxuICAgIC8vQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBlcnNvbmFTZXJ2aWNlOiBQZXJzb25hU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBlcnNvbmEgPSBuZXcgUGVyc29uYSgpO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEdlbmVybyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5kdEZlY2hhTmFjID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEFjdGl2byA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL0FjY2lvbmVzIG8gcHJvY2Vzb3MgIFxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIC8vdmFyaWFibGVzIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZW1haWxSZWdleDtcclxuICAgICAgICAvL0PDs2RpZ28gcXVlIGNvbmRpY2lvbmEgYWwgdXN1YXJpbyBhIGluZ3Jlc2FyIGxvcyBkYXRvcyBxdWUgc29uIG9ibGlnYXRvcmlvcyBwYXJhIGVsIHJlZ2lzdHJvXHJcbiAgICAgICAgLy92YWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTm9tYnJlXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jTm9tYnJlID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNOb21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFRlbGVmb25vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFRlbGVmb25vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBVc3VhcmlvXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBVc3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1bmEgQ29udHJhc2XDsWFcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBlbCBjb3JyZW8gcXVlIHNlIGluZ3Jlc2EgdGVuZ2EgZWwgZm9ybWF0byBkZSBFbWFpbFxyXG4gICAgICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvcnJlbyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQ29ycmVvKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zICBcclxuICAgICAgICB0aGlzLnBlcnNvbmFTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnBlcnNvbmEpLlxyXG4gICAgICAgICAgICB0aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFbCB1c3VhcmlvIHlhIGV4aXN0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWUgcmVnaXN0cmUgZXhpdG9zYW1lbnRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL21lbnVcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL2xvY2Fsc3RvcmFnZVxyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vKTsgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBlcm9zbmEgbGlzXCIsIHRoaXMucGVyc29uYUxpc3QpO1xyXG4gICAgICAgIFNlc2lvbkFjdGl2YS5zZXNpb24gPSB0aGlzLnBlcnNvbmE7XHJcbiAgICB9XHJcbiAgICAvL01ldG9kbyBwYXJhIGVsIGNhbXBvIGRlIEdlbmVyb1xyXG4gICAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvcyBwYXJhIGVsIGNhbXBvIGRlIGZlY2hhIGRlIG5hY2ltaWVudG9cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5NzA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDE7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSAxO1xyXG4gICAgfVxyXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXlDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19