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
            if (this.persona.cAmaterno != "") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBUXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVI5Rix5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDLG1EQUFtRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBMkM7SUFDM0MsaUNBQU0sR0FBTjtRQUFBLGlCQXlGQztRQXhGRyw2QkFBNkI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BC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TixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsd0JBQWM7R0FUckYsZ0JBQWdCLENBd0k1QjtBQXhJWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgUGVyc29uYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUGVyc29uYVNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4uLy4uL3Zpc3Rhcy9zZy9wZXJzb25hLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vLi4vdmlzdGFzL2Nzcy9wZXJzb25hLmNzc1wiLCBcIi4uLy4uL2FwcC5jc3NcIl1cclxufSlcclxuLy9BY2Npb25lcyB5IHByb2Nlc29zIGRlIGxhIHZlbnRhbmEgXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hQ29tcG9uZW50IHtcclxuICAgIC8vRGVjbGFyYWNpb24gZGUgdmFyaWFibGVcclxuICAgIC8vdmFyaWFibGVzIHBhcmEgZWwgcmFkaW8gYnV0dG9uIGRlIGdlbmVyb1xyXG4gICAgcHVibGljIGZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZWNvbmRTd2l0Y2hTdGF0ZSA9IHRydWU7XHJcbiAgICBwdWJsaWMgcGVyc29uYUxpc3Q6IEFycmF5PFBlcnNvbmE+O1xyXG4gICAgcGVyc29uYTogUGVyc29uYTtcclxuXHJcbiAgICAvL0NvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGVyc29uYVNlcnZpY2U6IFBlcnNvbmFTZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL09jdWx0YSBsYSBiYXJyYSBzdXBlcmlvciBlbiBsYSBwYW50YWxsYVxyXG4gICAgICAgIHRoaXMucGVyc29uYSA9IG5ldyBQZXJzb25hKCk7IC8vSW5zdGFuY2VhIGVsIG9iamV0byBkZSBwZXJzb25hIGEgbGEgdGFibGEgUGVyc29uYVxyXG4gICAgICAgIHRoaXMucGVyc29uYS5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEdlbmVybyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5kdEZlY2hhTmFjID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEubEFjdGl2byA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL0FjY2lvbmVzIG8gcHJvY2Vzb3MgYWwgcHJlY2lvbmFyIGVsIGJvdG9uXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgLy92YXJpYWJsZXMgcGFyYSB2YWxpZGFjaW9uZXNcclxuICAgICAgICB2YXIgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4O1xyXG4gICAgICAgIHZhciBuYW1lUmVnZXg7XHJcbiAgICAgICAgdmFyIGFwUmVnZXg7XHJcbiAgICAgICAgdmFyIGFtUmVnZXg7XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3Ryb1xyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE5vbWJyZVxyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jTm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YWxpZGEgcXVlIGVsIG5vbWJyZSBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgbmFtZVJlZ2V4ID0gLyhbQS1aXVthLXpdKS87XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jTm9tYnJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY05vbWJyZSkpIHtcclxuICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNBcGF0ZXJubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgZWwgQXBlbGxpZG8gUGF0ZXJubyBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgYXBSZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBcGF0ZXJubyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghYXBSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQXBhdGVybm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJubyB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgZWwgQXBlbGxpZG8gTWF0ZXJubyBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgYW1SZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBbWF0ZXJubyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghYW1SZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQW1hdGVybm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQXBlbGxpZG8gTWF0ZXJubyB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFRlbGVmb25vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFRlbGVmb25vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBVc3VhcmlvXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBVc3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1bmEgQ29udHJhc2XDsWFcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBlbCBjb3JyZW8gcXVlIHNlIGluZ3Jlc2EgdGVuZ2EgZWwgZm9ybWF0byBkZSBFbWFpbFxyXG4gICAgICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvcnJlbyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQ29ycmVvKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zICBcclxuICAgICAgICB0aGlzLnBlcnNvbmFTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnBlcnNvbmEpLlxyXG4gICAgICAgICAgICB0aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFbCB1c3VhcmlvIHlhIGV4aXN0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9kaXJcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgU2VzaW9uQWN0aXZhLnNlc2lvbiA9IHRoaXMucGVyc29uYTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvIHBhcmEgZWwgY2FtcG8gZGUgR2VuZXJvXHJcbiAgICBwdWJsaWMgb25GaXJzdENoZWNrZWQoYXJncykge1xyXG4gICAgICAgIGxldCBmaXJzdFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKGZpcnN0U3dpdGNoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9NZXRvZG9zIHBhcmEgZWwgY2FtcG8gZGUgZmVjaGEgZGUgbmFjaW1pZW50b1xyXG4gICAgb25QaWNrZXJMb2FkZWQoYXJncykge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMTk3MDtcclxuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gMTtcclxuICAgICAgICBkYXRlUGlja2VyLmRheSA9IDE7XHJcbiAgICB9XHJcbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkRheUNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblllYXJDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=