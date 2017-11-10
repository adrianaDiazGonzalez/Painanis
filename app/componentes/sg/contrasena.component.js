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
        templateUrl: "vistas/sg/contrasena.html",
        styleUrls: ["vistas/css/contrasena.css", "app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, contrasena_1.PasswordService])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc2VuYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cmFzZW5hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLDREQUFnRTtBQUNoRSwwQ0FBeUM7QUFDekMsMERBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGlCQUFpQjtJQUc1QixhQUFhO0lBQ2IsMkJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsZUFBZ0M7UUFBNUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDOUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QscUJBQXFCO0lBQ3JCLGtDQUFNLEdBQU47UUFDRSx3REFBd0Q7UUFDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25FLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxnQ0FBZ0M7UUFDaEMsSUFBSSxVQUFVLENBQUE7UUFFZCxVQUFVLEdBQUcsMkRBQTJELENBQUM7UUFDekUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGlCQUFpQjtJQVI3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQWUsQ0FBQztRQUM1QixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQztLQUNwRCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FLUixXQUFJLEVBQWtCLGVBQU0sRUFBMkIsNEJBQWU7R0FKckYsaUJBQWlCLENBZ0M3QjtBQWhDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jb250cmFzZW5hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9jb250cmFzZW5hXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGFzc3dvcmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvc2cvY29udHJhc2VuYS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJ2aXN0YXMvY3NzL2NvbnRyYXNlbmEuY3NzXCIsIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuLy9BY2Npb25lcyB5IHByb2Nlc29zIGRlIGxhIHZlbnRhbmEgXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCB7XHJcbiAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZXNcclxuICB1c3VhcmlvOiBQYXNzd29yZDtcclxuICAvL2NvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbiAgICB0aGlzLnVzdWFyaW8gPSBuZXcgUGFzc3dvcmQoKTtcclxuICB9XHJcbiAgLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgc3VibWl0KCkge1xyXG4gICAgLy92YWxpZGFjaW9uZXMgZGUgY2FtcG9zIG9ibGlnYXRvcmlvcyBxdWUgbm8gc2VhbiB2YWNpb3NcclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2EgdW4gdXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY1RlbGVmb25vID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNUZWxlZm9ubyA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biB0ZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vdmFsaWRhY2nDs24gZGUgY29ycmVvIHNpIGV4aXN0ZVxyXG4gICAgdmFyIGVtYWlsUmVnZXhcclxuXHJcbiAgICBlbWFpbFJlZ2V4ID0gL15bLVxcdy4lK117MSw2NH1AKD86W0EtWjAtOS1dezEsNjN9XFwuKXsxLDEyNX1bQS1aXXsyLDYzfSQvaTtcclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY0NvcnJlbyAhPSBcIlwiKSB7XHJcbiAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KHRoaXMudXN1YXJpby5jQ29ycmVvKSkge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5ncmVzZSBjb3JyZW8gdmFsaWRvXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5nZXRRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gIH1cclxufSJdfQ==