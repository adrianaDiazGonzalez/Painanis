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
        var nameRegex;
        var apRegex;
        var amRegex;
        var apnum;
        //Código que condiciona al usuario a ingresar los datos que son obligatorios para el registro
        //valida que se ingrese un Nombre
        if (this.persona.cNombre == null || this.persona.cNombre == "") {
            alert("Ingrese un Nombre por favor");
            return;
        }
        //valida que el nombre sean letras y no numeros 
        nameRegex = /([A-Z][a-z])/;
        if (this.persona.cNombre != "") {
            if (!nameRegex.test(this.persona.cNombre)) {
                bandera = true;
                alert("Ingrese un Nombre valido por favor");
                return;
            }
            //Valida que se ingrese un Apellido Paterno
            if (this.persona.cApaterno == null || this.persona.cApaterno == "") {
                alert("Ingrese un Apellido Paterno por favor");
                return;
            }
            //valida que el Apellido Paterno sean letras y no numeros 
            apRegex = /^([A-Z][a-z])/;
            if (this.persona.cApaterno != "") {
                if (!apRegex.test(this.persona.cApaterno)) {
                    bandera = true;
                    alert("Ingrese un Apellido Paterno valido por favor");
                    return;
                }
            }
            //valida que el Apellido Materno sean letras y no numeros 
            amRegex = /^([A-Z][a-z])/;
            if (this.persona.cAmaterno != null) {
                if (!amRegex.test(this.persona.cAmaterno)) {
                    bandera = true;
                    alert("Ingrese un Apellido Materno valido por favor");
                    return;
                }
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
            if (this.persona.cCorreo != null) {
                console.log("correo", this.persona.cCorreo);
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
                        _this.router.navigate(["ope/dir"]);
                    }
                });
            });
            //localstorage
            sesionActiva_1.SesionActiva.sesion = this.persona;
        }
    };
    //Metodo para el campo de Genero
    PersonaComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = true;
        }
        else {
            this.secondSwitchState = false;
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
        templateUrl: "../../vistas/sg/persona.html",
        styleUrls: ["../../vistas/css/persona.css", "../../app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, persona_2.PersonaService])
], PersonaComponent);
exports.PersonaComponent = PersonaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBUXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVI5Rix5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDLG1EQUFtRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBMkM7SUFDM0MsaUNBQU0sR0FBTjtRQUFBLGlCQTRGQztRQTNGRyw2QkFBNkI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BC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bkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxlQUFlLENBQUM7S0FDL0QsQ0FBQztJQUNGLG9DQUFvQzs7cUNBVU4sV0FBSSxFQUFrQixlQUFNLEVBQTBCLHdCQUFjO0dBVHJGLGdCQUFnQixDQTJJNUI7QUEzSVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IFBlcnNvbmFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0ICogYXMgZGF0ZVBpY2tlck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ1aS9zd2l0Y2hcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vL2ltcG9ydGFjaW9uIHBhcmEgbWFudGVuZXIgbGEgc2VzaW9uIGFjdGl2YVxyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmEgfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1BlcnNvbmFTZXJ2aWNlXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuLi8uLi92aXN0YXMvc2cvcGVyc29uYS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4uLy4uL3Zpc3Rhcy9jc3MvcGVyc29uYS5jc3NcIiwgXCIuLi8uLi9hcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hIFxyXG5leHBvcnQgY2xhc3MgUGVyc29uYUNvbXBvbmVudCB7XHJcbiAgICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlXHJcbiAgICAvL3ZhcmlhYmxlcyBwYXJhIGVsIHJhZGlvIGJ1dHRvbiBkZSBnZW5lcm9cclxuICAgIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgcHVibGljIHBlcnNvbmFMaXN0OiBBcnJheTxQZXJzb25hPjtcclxuICAgIHBlcnNvbmE6IFBlcnNvbmE7XHJcblxyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBlcnNvbmFTZXJ2aWNlOiBQZXJzb25hU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9PY3VsdGEgbGEgYmFycmEgc3VwZXJpb3IgZW4gbGEgcGFudGFsbGFcclxuICAgICAgICB0aGlzLnBlcnNvbmEgPSBuZXcgUGVyc29uYSgpOyAvL0luc3RhbmNlYSBlbCBvYmpldG8gZGUgcGVyc29uYSBhIGxhIHRhYmxhIFBlcnNvbmFcclxuICAgICAgICB0aGlzLnBlcnNvbmEuaVBlcnNvbmEgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEuaVRpcG9QZXJzb25hID0gXCIxXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmxHZW5lcm8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBlcnNvbmEuZHRGZWNoYU5hYyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmxBY3Rpdm8gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9BY2Npb25lcyBvIHByb2Nlc29zIGFsIHByZWNpb25hciBlbCBib3RvblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIC8vdmFyaWFibGVzIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZW1haWxSZWdleDtcclxuICAgICAgICB2YXIgbmFtZVJlZ2V4O1xyXG4gICAgICAgIHZhciBhcFJlZ2V4O1xyXG4gICAgICAgIHZhciBhbVJlZ2V4O1xyXG4gICAgICAgIHZhciBhcG51bTtcclxuICAgICAgICAvL0PDs2RpZ28gcXVlIGNvbmRpY2lvbmEgYWwgdXN1YXJpbyBhIGluZ3Jlc2FyIGxvcyBkYXRvcyBxdWUgc29uIG9ibGlnYXRvcmlvcyBwYXJhIGVsIHJlZ2lzdHJvXHJcbiAgICAgICAgLy92YWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTm9tYnJlXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jTm9tYnJlID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNOb21icmUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgZWwgbm9tYnJlIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgICAgICBuYW1lUmVnZXggPSAvKFtBLVpdW2Etel0pLztcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNOb21icmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWVSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jTm9tYnJlKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBBcGVsbGlkbyBQYXRlcm5vIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgICAgICBhcFJlZ2V4ID0gL14oW0EtWl1bYS16XSkvO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBcGF0ZXJubyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghYXBSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQXBhdGVybm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gdmFsaWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgZWwgQXBlbGxpZG8gTWF0ZXJubyBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgYW1SZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBbWF0ZXJubyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghYW1SZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQW1hdGVybm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQXBlbGxpZG8gTWF0ZXJubyB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFRlbGVmb25vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFRlbGVmb25vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBVc3VhcmlvXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBVc3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1bmEgQ29udHJhc2XDsWFcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBlbCBjb3JyZW8gcXVlIHNlIGluZ3Jlc2EgdGVuZ2EgZWwgZm9ybWF0byBkZSBFbWFpbFxyXG4gICAgICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvcnJlbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVvXCIsIHRoaXMucGVyc29uYS5jQ29ycmVvKTtcclxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNDb3JyZW8pKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSBjb3JyZW8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zICBcclxuICAgICAgICB0aGlzLnBlcnNvbmFTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnBlcnNvbmEpLlxyXG4gICAgICAgICAgICB0aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFbCB1c3VhcmlvIHlhIGV4aXN0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9kaXJcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgU2VzaW9uQWN0aXZhLnNlc2lvbiA9IHRoaXMucGVyc29uYTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvIHBhcmEgZWwgY2FtcG8gZGUgR2VuZXJvXHJcbiAgICBwdWJsaWMgb25GaXJzdENoZWNrZWQoYXJncykge1xyXG4gICAgICAgIGxldCBmaXJzdFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKGZpcnN0U3dpdGNoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9NZXRvZG9zIHBhcmEgZWwgY2FtcG8gZGUgZmVjaGEgZGUgbmFjaW1pZW50b1xyXG4gICAgb25QaWNrZXJMb2FkZWQoYXJncykge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMTk3MDtcclxuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gMTtcclxuICAgICAgICBkYXRlUGlja2VyLmRheSA9IDE7XHJcbiAgICB9XHJcbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkRheUNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblllYXJDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=