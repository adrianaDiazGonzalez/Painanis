"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var usuario_1 = require("../../servicios/sg/usuario");
var router_1 = require("@angular/router");
var usuario_2 = require("../../modelos/sg/usuario");
var sesionActiva_1 = require("../../sesionActiva");
//Declaración de los componentes de la vista
var LoginComponent = (function () {
    //Constructor
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        page.actionBarHidden = true;
        this.usuario = new usuario_2.ttctPersona();
    }
    //Acciones y Procesos
    LoginComponent.prototype.submit = function () {
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
    //
    LoginComponent.prototype.ngOnInit = function () {
        console.log(sesionActiva_1.SesionActiva.sesion.cUsuario);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [usuario_1.UserService],
        templateUrl: "plantillas/sg/usuario.html",
        styleUrls: ["plantillas/css/usuario.css", "app.css"]
    })
    //Clase para las acciones y procesos
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, usuario_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQXlFO0FBQ3pFLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBQ3ZELG1EQUFpRDtBQUVqRCw0Q0FBNEM7QUFTNUMsSUFBYSxjQUFjO0lBRXpCLGFBQWE7SUFDYix3QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxXQUF3QjtRQUFwRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3RGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELEVBQUU7SUFDRixpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGNBQWM7SUFSMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHFCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7S0FDckQsQ0FBQztJQUVGLG9DQUFvQzs7cUNBSVIsV0FBSSxFQUFrQixlQUFNLEVBQXVCLHFCQUFXO0dBSDdFLGNBQWMsQ0E0QjFCO0FBNUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdXN1YXJpb1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHR0Y3RQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvdXN1YXJpb1wiO1xyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmF9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGxhbnRpbGxhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3VzdWFyaW8uY3NzXCIsIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuLy9DbGFzZSBwYXJhIGxhcyBhY2Npb25lcyB5IHByb2Nlc29zXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXN1YXJpbzogdHRjdFBlcnNvbmE7XHJcbiAgLy9Db25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMudXN1YXJpbyA9IG5ldyB0dGN0UGVyc29uYSgpO1xyXG4gIH1cclxuXHJcbiAgLy9BY2Npb25lcyB5IFByb2Nlc29zXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSBub21icmUgZGUgdXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY0NvbnRyYXNlbmEgPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY0NvbnRyYXNlbmEgPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2EgdW5hIGNvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXNlclNlcnZpY2UucG9zdFF1b3RlKHRoaXMudXN1YXJpbyk7XHJcbiAgfVxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy9jb250cmFzZW5hXCJdKTtcclxuICB9XHJcbiAgLy9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFNlc2lvbkFjdGl2YS5zZXNpb24uY1VzdWFyaW8pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==