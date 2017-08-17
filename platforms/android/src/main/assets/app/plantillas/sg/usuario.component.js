"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var usuario_1 = require("../../servicios/sg/usuario");
var router_1 = require("@angular/router");
var usuario_2 = require("../../modelos/sg/usuario");
//Declaración de los componentes de la vista
var LoginComponent = (function () {
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        page.actionBarHidden = true;
        this.usuario = new usuario_2.ttctPersona();
    }
    /* var relacion = ['Hola','HOLA'];
     console.log(relacion);*/
    LoginComponent.prototype.submit = function () {
        var emailRegex;
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
            alert("Ingresa nombre de usuario por favor");
            return;
        }
        if (this.usuario.cContrasena == null || this.usuario.cContrasena == "") {
            alert("Ingresa una contraseña por favor");
            return;
        }
        this.userService.postQuote(this.usuario);
    };
    LoginComponent.prototype.contrasena = function () {
        this.router.navigate(["sg/contrasena"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [usuario_1.UserService],
        templateUrl: "plantillas/sg/usuario.html",
        styleUrls: ["plantillas/css/usuario.css"]
    })
    //Clase para las acciones de los botones
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, usuario_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFFekIsd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDQTs2QkFDeUI7SUFDMUIsK0JBQU0sR0FBTjtRQUVFLElBQUksVUFBVSxDQUFDO1FBRWYsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFFL0QsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBRXRFLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBQyw0QkFBNEI7UUFDeEMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDMUMsQ0FBQztJQUVGLHdDQUF3Qzs7cUNBR1osV0FBSSxFQUFrQixlQUFNLEVBQXVCLHFCQUFXO0dBRjdFLGNBQWMsQ0ErQjFCO0FBL0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy91c3VhcmlvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdHRjdFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy91c3VhcmlvXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGxhbnRpbGxhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3VzdWFyaW8uY3NzXCJdXHJcbn0pXHJcblxyXG4vL0NsYXNlIHBhcmEgbGFzIGFjY2lvbmVzIGRlIGxvcyBib3RvbmVzXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXN1YXJpbzogdHRjdFBlcnNvbmE7IFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB0aGlzLnVzdWFyaW8gPSBuZXcgdHRjdFBlcnNvbmEoKTtcclxuICB9XHJcbiAgIC8qIHZhciByZWxhY2lvbiA9IFsnSG9sYScsJ0hPTEEnXTtcclxuICAgIGNvbnNvbGUubG9nKHJlbGFjaW9uKTsqL1xyXG4gIHN1Ym1pdCgpXHJcbiAge1xyXG4gICAgdmFyIGVtYWlsUmVnZXg7XHJcblxyXG4gICAgaWYodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpe1xyXG4gICAgICBcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIG5vbWJyZSBkZSB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IFwiXCIpe1xyXG4gICAgICBcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuYSBjb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudXNlclNlcnZpY2UucG9zdFF1b3RlKHRoaXMudXN1YXJpbyk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnRyYXNlbmEoKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL2NvbnRyYXNlbmFcIl0pO1xyXG4gIH1cclxuICBcclxufVxyXG4gICJdfQ==