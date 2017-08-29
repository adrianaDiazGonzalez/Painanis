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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFLNUQsMENBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtREFBa0Q7QUFHbEQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBUXpCLGFBQWE7SUFDYiwwQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVI5Rix5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDLG1EQUFtRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBMkM7SUFDM0MsaUNBQU0sR0FBTjtRQUFBLGlCQTREQztRQTNERyw2QkFBNkI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BC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O1FBQ25CLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztLQUNyRCxDQUFDO0lBQ0Ysb0NBQW9DOztxQ0FVTixXQUFJLEVBQWtCLGVBQU0sRUFBMEIsd0JBQWM7R0FUckYsZ0JBQWdCLENBMkc1QjtBQTNHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgUGVyc29uYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1BlcnNvbmFTZXJ2aWNlXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwZXJzb25hLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi4vY3NzL3BlcnNvbmEuY3NzXCIsIFwiLi4vLi4vYXBwLmNzc1wiXVxyXG59KVxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmFDb21wb25lbnQge1xyXG4gICAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZVxyXG4gICAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgZ2VuZXJvXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJzb25hTGlzdDogQXJyYXk8UGVyc29uYT47XHJcbiAgICBwZXJzb25hOiBQZXJzb25hO1xyXG5cclxuICAgIC8vQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwZXJzb25hU2VydmljZTogUGVyc29uYVNlcnZpY2UpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vT2N1bHRhIGxhIGJhcnJhIHN1cGVyaW9yIGVuIGxhIHBhbnRhbGxhXHJcbiAgICAgICAgdGhpcy5wZXJzb25hID0gbmV3IFBlcnNvbmEoKTsgLy9JbnN0YW5jZWEgZWwgb2JqZXRvIGRlIHBlcnNvbmEgYSBsYSB0YWJsYSBQZXJzb25hXHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlQZXJzb25hID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sR2VuZXJvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmR0RmVjaGFOYWMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sQWN0aXZvID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vQWNjaW9uZXMgbyBwcm9jZXNvcyBhbCBwcmVjaW9uYXIgZWwgYm90b25cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAvL3ZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpb25lc1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGVtYWlsUmVnZXg7XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3Ryb1xyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE5vbWJyZVxyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jTm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNBcGF0ZXJubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBUZWxlZm9ub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNUZWxlZm9ubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBUZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gVXN1YXJpb1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgZWwgY29ycmVvIHF1ZSBzZSBpbmdyZXNhIHRlbmdhIGVsIGZvcm1hdG8gZGUgRW1haWxcclxuICAgICAgICBlbWFpbFJlZ2V4ID0gL15bLVxcdy4lK117MSw2NH1AKD86W0EtWjAtOS1dezEsNjN9XFwuKXsxLDEyNX1bQS1aXXsyLDYzfSQvaTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb3JyZW8gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0NvcnJlbykpIHtcclxuICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIGNvcnJlbyB2YWxpZG9cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zaSB0b2RhcyBsYXMgdmFsaWRhY2lvbmVzIHNvbiBjb3JyZWN0YXMgcGFyYSBhIGxhIGluc2VyY2lvbiBkZSBkYXRvcyAgXHJcbiAgICAgICAgdGhpcy5wZXJzb25hU2VydmljZS5wb3N0UXVvdGUodGhpcy5wZXJzb25hKS5cclxuICAgICAgICAgICAgdGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWwgdXN1YXJpbyB5YSBleGlzdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lIHJlZ2lzdHJlIGV4aXRvc2FtZW50ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9tZW51XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy9sb2NhbHN0b3JhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBlcm9zbmEgbGlzXCIsIHRoaXMucGVyc29uYUxpc3QpO1xyXG4gICAgICAgIFNlc2lvbkFjdGl2YS5zZXNpb24gPSB0aGlzLnBlcnNvbmE7XHJcbiAgICB9XHJcbiAgICAvL01ldG9kbyBwYXJhIGVsIGNhbXBvIGRlIEdlbmVyb1xyXG4gICAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvcyBwYXJhIGVsIGNhbXBvIGRlIGZlY2hhIGRlIG5hY2ltaWVudG9cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5NzA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDE7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSAxO1xyXG4gICAgfVxyXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXlDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19