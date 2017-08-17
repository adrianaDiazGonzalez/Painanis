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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFFekIsYUFBYTtJQUNiLHdCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFdBQXdCO1FBQXBFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLCtCQUFNLEdBQU47UUFFRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMvRCxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDckUsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLGNBQWM7SUFSMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHFCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFDLDRCQUE0QjtRQUN4QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7S0FDckQsQ0FBQztJQUVGLG9DQUFvQzs7cUNBSVIsV0FBSSxFQUFrQixlQUFNLEVBQXVCLHFCQUFXO0dBSDdFLGNBQWMsQ0F3QjFCO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy91c3VhcmlvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdHRjdFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy91c3VhcmlvXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGxhbnRpbGxhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3VzdWFyaW8uY3NzXCIsIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuLy9DbGFzZSBwYXJhIGxhcyBhY2Npb25lcyB5IHByb2Nlc29zXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXN1YXJpbzogdHRjdFBlcnNvbmE7IFxyXG4gIC8vQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgdGhpcy51c3VhcmlvID0gbmV3IHR0Y3RQZXJzb25hKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vQWNjaW9uZXMgeSBQcm9jZXNvc1xyXG4gIHN1Ym1pdCgpXHJcbiAge1xyXG4gICAgaWYodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpe1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2Egbm9tYnJlIGRlIHVzdWFyaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IFwiXCIpe1xyXG4gICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuYSBjb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudXNlclNlcnZpY2UucG9zdFF1b3RlKHRoaXMudXN1YXJpbyk7XHJcbiAgfVxyXG4gIGNvbnRyYXNlbmEoKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL2NvbnRyYXNlbmFcIl0pO1xyXG4gIH0gIFxyXG59XHJcbiAgIl19