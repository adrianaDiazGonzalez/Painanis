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
        nameRegex = /^([A-Z][a-z])/;
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
                        _this.router.navigate(["ope/menu"]);
                    }
                });
            });
            //localstorage
            console.log(this.persona.cApaterno);
            console.log("perosna lis", this.personaList);
            sesionActiva_1.SesionActiva.sesion = this.persona;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBUXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVI5Rix5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDLG1EQUFtRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBMkM7SUFDM0MsaUNBQU0sR0FBTjtRQUFBLGlCQTJGQztRQTFGRyw2QkFBNkI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BC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M0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztLQUNyRCxDQUFDO0lBQ0Ysb0NBQW9DOztxQ0FVTixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsd0JBQWM7R0FUckYsZ0JBQWdCLENBMEk1QjtBQTFJWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgUGVyc29uYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUGVyc29uYVNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBlcnNvbmEuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9jc3MvcGVyc29uYS5jc3NcIiwgXCIuLi8uLi9hcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hIFxyXG5leHBvcnQgY2xhc3MgUGVyc29uYUNvbXBvbmVudCB7XHJcbiAgICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlXHJcbiAgICAvL3ZhcmlhYmxlcyBwYXJhIGVsIHJhZGlvIGJ1dHRvbiBkZSBnZW5lcm9cclxuICAgIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgcHVibGljIHBlcnNvbmFMaXN0OiBBcnJheTxQZXJzb25hPjtcclxuICAgIHBlcnNvbmE6IFBlcnNvbmE7XHJcblxyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBlcnNvbmFTZXJ2aWNlOiBQZXJzb25hU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9PY3VsdGEgbGEgYmFycmEgc3VwZXJpb3IgZW4gbGEgcGFudGFsbGFcclxuICAgICAgICB0aGlzLnBlcnNvbmEgPSBuZXcgUGVyc29uYSgpOyAvL0luc3RhbmNlYSBlbCBvYmpldG8gZGUgcGVyc29uYSBhIGxhIHRhYmxhIFBlcnNvbmFcclxuICAgICAgICB0aGlzLnBlcnNvbmEuaVBlcnNvbmEgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEuaVRpcG9QZXJzb25hID0gXCIxXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmxHZW5lcm8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBlcnNvbmEuZHRGZWNoYU5hYyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmxBY3Rpdm8gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9BY2Npb25lcyBvIHByb2Nlc29zIGFsIHByZWNpb25hciBlbCBib3RvblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIC8vdmFyaWFibGVzIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZW1haWxSZWdleDtcclxuICAgICAgICB2YXIgbmFtZVJlZ2V4O1xyXG4gICAgICAgIHZhciBhcFJlZ2V4O1xyXG4gICAgICAgIHZhciBhbVJlZ2V4O1xyXG4gICAgICAgIC8vQ8OzZGlnbyBxdWUgY29uZGljaW9uYSBhbCB1c3VhcmlvIGEgaW5ncmVzYXIgbG9zIGRhdG9zIHF1ZSBzb24gb2JsaWdhdG9yaW9zIHBhcmEgZWwgcmVnaXN0cm9cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBOb21icmVcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNOb21icmUgPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBOb21icmUgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBub21icmUgc2VhbiBsZXRyYXMgeSBubyBudW1lcm9zIFxyXG4gICAgICAgIG5hbWVSZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNOb21icmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWVSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jTm9tYnJlKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTm9tYnJlIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBBcGVsbGlkbyBQYXRlcm5vIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgICAgICBhcFJlZ2V4ID0gL14oW0EtWl1bYS16XSkvO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFhcFJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNBcGF0ZXJubykpIHtcclxuICAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBBcGVsbGlkbyBNYXRlcm5vIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgICAgICBhbVJlZ2V4ID0gL14oW0EtWl1bYS16XSkvO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FtYXRlcm5vICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFhbVJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNBbWF0ZXJubykpIHtcclxuICAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBNYXRlcm5vIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gVGVsZWZvbm9cclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNUZWxlZm9ubyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVGVsZWZvbm8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVGVsZWZvbm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFVzdWFyaW9cclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNVc3VhcmlvID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFVzdWFyaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuYSBDb250cmFzZcOxYVxyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvbnRyYXNlbmEgPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0NvbnRyYXNlbmEgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIGVsIGNvcnJlbyBxdWUgc2UgaW5ncmVzYSB0ZW5nYSBlbCBmb3JtYXRvIGRlIEVtYWlsXHJcbiAgICAgICAgZW1haWxSZWdleCA9IC9eWy1cXHcuJStdezEsNjR9QCg/OltBLVowLTktXXsxLDYzfVxcLil7MSwxMjV9W0EtWl17Miw2M30kL2k7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQ29ycmVvICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNDb3JyZW8pKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSBjb3JyZW8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc2kgdG9kYXMgbGFzIHZhbGlkYWNpb25lcyBzb24gY29ycmVjdGFzIHBhcmEgYSBsYSBpbnNlcmNpb24gZGUgZGF0b3MgIFxyXG4gICAgICAgIHRoaXMucGVyc29uYVNlcnZpY2UucG9zdFF1b3RlKHRoaXMucGVyc29uYSkuXHJcbiAgICAgICAgICAgIHRoZW4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVsIHVzdWFyaW8geWEgZXhpc3RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL21lbnVcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vbG9jYWxzdG9yYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZXJzb25hLmNBcGF0ZXJubyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwZXJvc25hIGxpc1wiLCB0aGlzLnBlcnNvbmFMaXN0KTtcclxuICAgICAgICBTZXNpb25BY3RpdmEuc2VzaW9uID0gdGhpcy5wZXJzb25hO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLy9NZXRvZG8gcGFyYSBlbCBjYW1wbyBkZSBHZW5lcm9cclxuICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL01ldG9kb3MgcGFyYSBlbCBjYW1wbyBkZSBmZWNoYSBkZSBuYWNpbWllbnRvXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTcwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTtcclxuICAgIH1cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF5Q2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb250aENoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNoYW5nZWQoYXJncykge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==