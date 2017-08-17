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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFFekIsd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDQTs2QkFDeUI7SUFDMUIsK0JBQU0sR0FBTjtRQUlFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBRS9ELEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUV0RSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksY0FBYztJQVIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMscUJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUMsNEJBQTRCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzFDLENBQUM7SUFFRix3Q0FBd0M7O3FDQUdaLFdBQUksRUFBa0IsZUFBTSxFQUF1QixxQkFBVztHQUY3RSxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdXN1YXJpb1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHR0Y3RQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvdXN1YXJpb1wiO1xyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBsYW50aWxsYXMvc2cvdXN1YXJpby5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy91c3VhcmlvLmNzc1wiXVxyXG59KVxyXG5cclxuLy9DbGFzZSBwYXJhIGxhcyBhY2Npb25lcyBkZSBsb3MgYm90b25lc1xyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHVzdWFyaW86IHR0Y3RQZXJzb25hOyBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgdGhpcy51c3VhcmlvID0gbmV3IHR0Y3RQZXJzb25hKCk7XHJcbiAgfVxyXG4gICAvKiB2YXIgcmVsYWNpb24gPSBbJ0hvbGEnLCdIT0xBJ107XHJcbiAgICBjb25zb2xlLmxvZyhyZWxhY2lvbik7Ki9cclxuICBzdWJtaXQoKVxyXG4gIHtcclxuICAgIFxyXG5cclxuICAgIGlmKHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBcIlwiKXtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSBub21icmUgZGUgdXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBcIlwiKXtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1bmEgY29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb250cmFzZW5hKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy9jb250cmFzZW5hXCJdKTtcclxuICB9XHJcbiAgXHJcbn1cclxuICAiXX0=