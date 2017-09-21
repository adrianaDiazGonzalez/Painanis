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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmVlZG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZlZWRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQiwwREFBOEQ7QUFjOUQsSUFBYSxrQkFBa0I7SUFTM0IsNEJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHRELHlCQUF5QjtRQUN6QiwwQ0FBMEM7UUFDbkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUs1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtJQUN0RixDQUFDO0lBRUEsbUNBQU0sR0FBTjtRQUNHLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLEtBQUssQ0FBQztRQUNWLDZGQUE2RjtRQUM3RixpQ0FBaUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0QsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELGdEQUFnRDtRQUNoRCxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FB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VTRCLFdBQUksRUFBa0IsZUFBTTtHQVQ3QyxrQkFBa0IsQ0FtSDlCO0FBbkhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtQcm92ZWVkb3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3Byb3ZlZWRvclwiO1xyXG5pbXBvcnQgeyBQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGRhdGVQaWNrZXJNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1Byb3ZlZWRvclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlzdGFzL29wZS9wcm92ZWVkb3IuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aXN0YXMvY3NzL3Byb3ZlZWRvci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb3ZlZWRvckNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZVxyXG4gICAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgZ2VuZXJvXHJcbiAgICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAgICBwdWJsaWMgcGVyc29uYUxpc3Q6IEFycmF5PFBlcnNvbmE+O1xyXG4gICAgcGVyc29uYTogUGVyc29uYTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbiAgICB9XHJcblxyXG4gICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAvL3ZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpb25lc1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGVtYWlsUmVnZXg7XHJcbiAgICAgICAgdmFyIG5hbWVSZWdleDtcclxuICAgICAgICB2YXIgYXBSZWdleDtcclxuICAgICAgICB2YXIgYW1SZWdleDtcclxuICAgICAgICB2YXIgYXBudW07XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3Ryb1xyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE5vbWJyZVxyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY05vbWJyZSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jTm9tYnJlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YWxpZGEgcXVlIGVsIG5vbWJyZSBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgbmFtZVJlZ2V4ID0gLyhbQS1aXVthLXpdKS87XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jTm9tYnJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY05vbWJyZSkpIHtcclxuICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE5vbWJyZSB2YWxpZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQXBlbGxpZG8gUGF0ZXJub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNBcGF0ZXJubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgZWwgQXBlbGxpZG8gUGF0ZXJubyBzZWFuIGxldHJhcyB5IG5vIG51bWVyb3MgXHJcbiAgICAgICAgYXBSZWdleCA9IC9eKFtBLVpdW2Etel0pLztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQXBhdGVybm8gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIWFwUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0FwYXRlcm5vKSkge1xyXG4gICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBBcGVsbGlkbyBQYXRlcm5vIHZhbGlkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YWxpZGEgcXVlIGVsIEFwZWxsaWRvIE1hdGVybm8gc2VhbiBsZXRyYXMgeSBubyBudW1lcm9zIFxyXG4gICAgICAgIGFtUmVnZXggPSAvXihbQS1aXVthLXpdKS87XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQW1hdGVybm8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIWFtUmVnZXgudGVzdCh0aGlzLnBlcnNvbmEuY0FtYXRlcm5vKSkge1xyXG4gICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFwZWxsaWRvIE1hdGVybm8gdmFsaWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBUZWxlZm9ub1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1RlbGVmb25vID09IG51bGwgfHwgdGhpcy5wZXJzb25hLmNUZWxlZm9ubyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBUZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gVXN1YXJpb1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnBlcnNvbmEuY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gVXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMucGVyc29uYS5jQ29udHJhc2VuYSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkYSBxdWUgZWwgY29ycmVvIHF1ZSBzZSBpbmdyZXNhIHRlbmdhIGVsIGZvcm1hdG8gZGUgRW1haWxcclxuICAgICAgICBlbWFpbFJlZ2V4ID0gL15bLVxcdy4lK117MSw2NH1AKD86W0EtWjAtOS1dezEsNjN9XFwuKXsxLDEyNX1bQS1aXXsyLDYzfSQvaTtcclxuICAgICAgICBpZiAodGhpcy5wZXJzb25hLmNDb3JyZW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlb1wiLCB0aGlzLnBlcnNvbmEuY0NvcnJlbyk7XHJcbiAgICAgICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMucGVyc29uYS5jQ29ycmVvKSkge1xyXG4gICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgY29ycmVvIHZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgICAgICAvL01ldG9kbyBwYXJhIGVsIGNhbXBvIGRlIEdlbmVyb1xyXG4gICAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vTWV0b2RvcyBwYXJhIGVsIGNhbXBvIGRlIGZlY2hhIGRlIG5hY2ltaWVudG9cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDE5NzA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDE7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSAxO1xyXG4gICAgfVxyXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXlDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgICB9XHJcbn0iXX0=