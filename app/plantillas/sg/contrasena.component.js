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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc2VuYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cmFzZW5hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLDREQUFnRTtBQUNoRSwwQ0FBeUM7QUFDekMsMERBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGlCQUFpQjtJQUc1QixhQUFhO0lBQ2IsMkJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBZ0M7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDOUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDcEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0gscUJBQXFCO0lBQ25CLGtDQUFNLEdBQU47UUFDRSx3REFBd0Q7UUFDeEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUNoRSxDQUFDO1lBQ0MsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FDaEUsQ0FBQztZQUNDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDSCxnQ0FBZ0M7UUFDL0IsSUFBSSxVQUFVLENBQUE7UUFFZCxVQUFVLEdBQUcsMkRBQTJELENBQUM7UUFDekUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRyxDQUFDLENBQzlCLENBQUM7WUFDQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBbENILElBa0NHO0FBbENVLGlCQUFpQjtJQVI3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQWUsQ0FBQztRQUM1QixXQUFXLEVBQUMsK0JBQStCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFDLFNBQVMsQ0FBQztLQUN2RCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FLUixXQUFJLEVBQWtCLGVBQU0sRUFBMkIsNEJBQWU7R0FKckYsaUJBQWlCLENBa0MzQjtBQWxDVSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jb250cmFzZW5hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9jb250cmFzZW5hXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGFzc3dvcmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBsYW50aWxsYXMvc2cvY29udHJhc2VuYS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9jb250cmFzZW5hLmNzc1wiLFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuLy9BY2Npb25lcyB5IHByb2Nlc29zIGRlIGxhIHZlbnRhbmEgXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCB7XHJcbiAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZXNcclxuICB1c3VhcmlvOiBQYXNzd29yZDsgXHJcbiAgLy9jb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gIHRoaXMudXN1YXJpbyA9IG5ldyBQYXNzd29yZCgpO1xyXG4gIH1cclxuLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgc3VibWl0KCl7XHJcbiAgICAvL3ZhbGlkYWNpb25lcyBkZSBjYW1wb3Mgb2JsaWdhdG9yaW9zIHF1ZSBubyBzZWFuIHZhY2lvc1xyXG4gICAgaWYodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1biB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy51c3VhcmlvLmNUZWxlZm9ubyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVGVsZWZvbm8gPT0gXCJcIilcclxuICAgICAge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biB0ZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAvL3ZhbGlkYWNpw7NuIGRlIGNvcnJlbyBzaSBleGlzdGVcclxuICAgICB2YXIgZW1haWxSZWdleFxyXG4gICAgIFxyXG4gICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgIGlmKHRoaXMudXN1YXJpby5jQ29ycmVvICE9IFwiXCIgKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnVzdWFyaW8uY0NvcnJlbykpeyBcclxuICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSBjb3JyZW8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5nZXRRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gICAgfVxyXG4gIH0iXX0=