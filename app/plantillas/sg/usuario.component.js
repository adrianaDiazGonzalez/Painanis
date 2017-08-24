"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var usuario_1 = require("../../servicios/sg/usuario");
var router_1 = require("@angular/router");
var usuario_2 = require("../../modelos/sg/usuario");
//importacion para mantener la sesion activa
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
    //Sirve para mostrar el usuario en cada accion, mantiene la sesion activa
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQXlFO0FBQ3pFLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBQ3ZELDRDQUE0QztBQUM1QyxtREFBaUQ7QUFFakQsNENBQTRDO0FBUzVDLElBQWEsY0FBYztJQUV6QixhQUFhO0lBQ2Isd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQkFBcUI7SUFDckIsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCx5RUFBeUU7SUFDekUsaUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO0tBQ3JELENBQUM7SUFFRixvQ0FBb0M7O3FDQUlSLFdBQUksRUFBa0IsZUFBTSxFQUF1QixxQkFBVztHQUg3RSxjQUFjLENBNEIxQjtBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuLy9pbXBvcnRhY2lvbiBwYXJhIG1hbnRlbmVyIGxhIHNlc2lvbiBhY3RpdmFcclxuaW1wb3J0IHsgU2VzaW9uQWN0aXZhfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdXN1YXJpby5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy91c3VhcmlvLmNzc1wiLCBcImFwcC5jc3NcIl1cclxufSlcclxuXHJcbi8vQ2xhc2UgcGFyYSBsYXMgYWNjaW9uZXMgeSBwcm9jZXNvc1xyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzdWFyaW86IHR0Y3RQZXJzb25hO1xyXG4gIC8vQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnVzdWFyaW8gPSBuZXcgdHRjdFBlcnNvbmEoKTtcclxuICB9XHJcblxyXG4gIC8vQWNjaW9uZXMgeSBQcm9jZXNvc1xyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2Egbm9tYnJlIGRlIHVzdWFyaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuYSBjb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gIH1cclxuICBjb250cmFzZW5hKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvY29udHJhc2VuYVwiXSk7XHJcbiAgfVxyXG4gIC8vU2lydmUgcGFyYSBtb3N0cmFyIGVsIHVzdWFyaW8gZW4gY2FkYSBhY2Npb24sIG1hbnRpZW5lIGxhIHNlc2lvbiBhY3RpdmFcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFNlc2lvbkFjdGl2YS5zZXNpb24uY1VzdWFyaW8pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==