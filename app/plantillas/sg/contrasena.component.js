"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var contrasena_1 = require("../../servicios/sg/contrasena");
var router_1 = require("@angular/router");
var contrasena_2 = require("../../modelos/sg/contrasena");
//Declaración de los componentes de la vista
var PasswordComponent = (function () {
    //constructor
    function PasswordComponent(page, router, passwordService) {
        this.page = page;
        this.router = router;
        this.passwordService = passwordService;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.usuario = new contrasena_2.Password();
    }
    //Acciones o procesos
    PasswordComponent.prototype.submit = function () {
        //validaciones de campos obligatorios que no sean vacios
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
            alert("Ingresa un usuario por favor");
            return;
        }
        if (this.usuario.cTelefono == null || this.usuario.cTelefono == "") {
            alert("Ingrese un telefono por favor");
            return;
        }
        //validación de correo si existe
        var emailRegex;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (this.usuario.cCorreo != "") {
            if (!emailRegex.test(this.usuario.cCorreo)) {
                alert("Ingrese correo valido");
                return;
            }
        }
        this.passwordService.getQuote(this.usuario);
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [contrasena_1.PasswordService],
        templateUrl: "plantillas/sg/contrasena.html",
        styleUrls: ["plantillas/css/contrasena.css", "app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, contrasena_1.PasswordService])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc2VuYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cmFzZW5hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLDREQUFnRTtBQUNoRSwwQ0FBeUM7QUFDekMsMERBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGlCQUFpQjtJQUc1QixhQUFhO0lBQ2IsMkJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBZ0M7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDOUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QscUJBQXFCO0lBQ3JCLGtDQUFNLEdBQU47UUFDRSx3REFBd0Q7UUFDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25FLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxnQ0FBZ0M7UUFDaEMsSUFBSSxVQUFVLENBQUE7UUFFZCxVQUFVLEdBQUcsMkRBQTJELENBQUM7UUFDekUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGlCQUFpQjtJQVI3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQWUsQ0FBQztRQUM1QixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQztLQUN4RCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FLUixXQUFJLEVBQWtCLGVBQU0sRUFBMkIsNEJBQWU7R0FKckYsaUJBQWlCLENBK0I3QjtBQS9CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jb250cmFzZW5hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9jb250cmFzZW5hXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGFzc3dvcmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL3NnL2NvbnRyYXNlbmEuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvY29udHJhc2VuYS5jc3NcIiwgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IHtcclxuICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlc1xyXG4gIHVzdWFyaW86IFBhc3N3b3JkO1xyXG4gIC8vY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgIHRoaXMudXN1YXJpbyA9IG5ldyBQYXNzd29yZCgpO1xyXG4gIH1cclxuICAvL0FjY2lvbmVzIG8gcHJvY2Vzb3NcclxuICBzdWJtaXQoKSB7XHJcbiAgICAvL3ZhbGlkYWNpb25lcyBkZSBjYW1wb3Mgb2JsaWdhdG9yaW9zIHF1ZSBubyBzZWFuIHZhY2lvc1xyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1biB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jVGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY1RlbGVmb25vID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIHRlbGVmb25vIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy92YWxpZGFjacOzbiBkZSBjb3JyZW8gc2kgZXhpc3RlXHJcbiAgICB2YXIgZW1haWxSZWdleFxyXG5cclxuICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jQ29ycmVvICE9IFwiXCIpIHtcclxuICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy51c3VhcmlvLmNDb3JyZW8pKSB7XHJcbiAgICAgICAgYWxlcnQoXCJJbmdyZXNlIGNvcnJlbyB2YWxpZG9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5nZXRRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gIH1cclxufSJdfQ==