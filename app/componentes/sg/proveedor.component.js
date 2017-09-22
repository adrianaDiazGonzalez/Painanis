"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var proveedor_1 = require("../../servicios/sg/proveedor");
var ProveedorComponent = (function () {
    function ProveedorComponent(page, router) {
        this.page = page;
        this.router = router;
        //Declaracion de variable
        //variables para el radio button de genero
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.persona.iPersona = "0";
        this.persona.iTipoPersona = "1";
        this.persona.lGenero = false;
        this.persona.dtFechaNac = "";
        this.persona.lActivo = true;
    }
    ProveedorComponent.prototype.submit = function () {
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
        }
    };
    //Metodo para el campo de Genero
    ProveedorComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = true;
        }
        else {
            this.secondSwitchState = false;
        }
    };
    //Metodos para el campo de fecha de nacimiento
    ProveedorComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;
    };
    ProveedorComponent.prototype.onDateChanged = function (args) {
    };
    ProveedorComponent.prototype.onDayChanged = function (args) {
    };
    ProveedorComponent.prototype.onMonthChanged = function (args) {
    };
    ProveedorComponent.prototype.onYearChanged = function (args) {
    };
    return ProveedorComponent;
}());
ProveedorComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [proveedor_1.ProveedorService],
        templateUrl: "vistas/ope/proveedor.html",
        styleUrls: ["vistas/css/proveedor.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], ProveedorComponent);
exports.ProveedorComponent = ProveedorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmVlZG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZlZWRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQiwwREFBZ0U7QUFnQmhFLElBQWEsa0JBQWtCO0lBVTNCLDRCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVJ0RCx5QkFBeUI7UUFDekIsMENBQTBDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFNNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLEtBQUssQ0FBQztRQUNWLDZGQUE2RjtRQUM3RixpQ0FBaUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxP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QixDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLElBQUk7SUFDbEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXpIRCxJQXlIQztBQXpIWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFnQixDQUFDO1FBQzdCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDMUMsQ0FBQztxQ0FXNEIsV0FBSSxFQUFrQixlQUFNO0dBVjdDLGtCQUFrQixDQXlIOUI7QUF6SFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQcm92ZWVkb3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9wcm92ZWVkb3JcIjtcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG4vL2ltcG9ydGFjaW9uIHBhcmEgbWFudGVuZXIgbGEgc2VzaW9uIGFjdGl2YVxyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmEgfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1Byb3ZlZWRvclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlzdGFzL29wZS9wcm92ZWVkb3IuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aXN0YXMvY3NzL3Byb3ZlZWRvci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb3ZlZWRvckNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZVxyXG4gICAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgZ2VuZXJvXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJzb25hTGlzdDogQXJyYXk8UGVyc29uYT47XHJcbiAgICBwZXJzb25hOiBQZXJzb25hO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlQZXJzb25hID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sR2VuZXJvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmR0RmVjaGFOYWMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5sQWN0aXZvID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgLy92YXJpYWJsZXMgcGFyYSB2YWxpZGFjaW9uZXNcclxuICAgICAgICB2YXIgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4O1xyXG4gICAgICAgIHZhciBuYW1lUmVnZXg7XHJcbiAgICAgICAgdmFyIGFwUmVnZXg7XHJcbiAgICAgICAgdmFyIGFtUmVnZXg7XHJcbiAgICAgICAgdmFyIGFwbnVtO1xyXG4gICAgICAgIC8vQ8OzZGlnbyBxdWUgY29uZGljaW9uYSBhbCB1c3VhcmlvIGEgaW5ncmVzYXIgbG9zIGRhdG9zIHF1ZSBzb24gb2JsaWdhdG9yaW9zIHBhcmEgZWwgcmVnaXN0cm9cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBOb21icmVcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNOb21icmUgPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBOb21icmUgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBub21icmUgc2VhbiBsZXRyYXMgeSBubyBudW1lcm9zIFxyXG4gICAgICAgIG5hbWVSZWdleCA9IC8oW0EtWl1bYS16XSkvO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZVJlZ2V4LnRlc3QodGhpcy5wZXJzb25hLmNOb21icmUpKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBOb21icmUgdmFsaWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJub1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBcGF0ZXJubyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jQXBhdGVybm8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vdmFsaWRhIHF1ZSBlbCBBcGVsbGlkbyBQYXRlcm5vIHNlYW4gbGV0cmFzIHkgbm8gbnVtZXJvcyBcclxuICAgICAgICAgICAgYXBSZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXBSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQXBhdGVybm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIFBhdGVybm8gdmFsaWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy92YWxpZGEgcXVlIGVsIEFwZWxsaWRvIE1hdGVybm8gc2VhbiBsZXRyYXMgeSBubyBudW1lcm9zIFxyXG4gICAgICAgICAgICBhbVJlZ2V4ID0gL14oW0EtWl1bYS16XSkvO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNBbWF0ZXJubyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFtUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0FtYXRlcm5vKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBNYXRlcm5vIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFRlbGVmb25vXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNUZWxlZm9ubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVGVsZWZvbm8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFVzdWFyaW9cclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvbnRyYXNlbmEgPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY0NvbnRyYXNlbmEgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1ZhbGlkYSBxdWUgZWwgY29ycmVvIHF1ZSBzZSBpbmdyZXNhIHRlbmdhIGVsIGZvcm1hdG8gZGUgRW1haWxcclxuICAgICAgICAgICAgZW1haWxSZWdleCA9IC9eWy1cXHcuJStdezEsNjR9QCg/OltBLVowLTktXXsxLDYzfVxcLil7MSwxMjV9W0EtWl17Miw2M30kL2k7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0NvcnJlbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlb1wiLCB0aGlzLnBlcnNvbmEuY0NvcnJlbyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0NvcnJlbykpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL01ldG9kbyBwYXJhIGVsIGNhbXBvIGRlIEdlbmVyb1xyXG4gICAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvcyBwYXJhIGVsIGNhbXBvIGRlIGZlY2hhIGRlIG5hY2ltaWVudG9cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5NzA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDE7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSAxO1xyXG4gICAgfVxyXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXlDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcbn0iXX0=