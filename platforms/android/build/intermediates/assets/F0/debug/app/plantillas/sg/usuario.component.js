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
        //Declaracion e variables:
        //variables para el radio button de recordar datos
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        //Variable que sirve para saber si el usuario desea guardar sus datos o no
        this.lrecordar = false;
        page.actionBarHidden = true; //Oculta la barra superior en la pantalla
        this.usuario = new usuario_2.ttctPersona(); //Instancea el objeto de usuario a la tabla temporal
        //Comprueba se existen datos guardados los muestra al inicio de la sesion
        if (sesionActiva_1.SesionActiva.sesion.cUsuario != "") {
            this.usuario.cUsuario = sesionActiva_1.SesionActiva.sesion.cUsuario;
            this.usuario.cContrasena = sesionActiva_1.SesionActiva.sesion.cContrasena;
        }
    }
    //Acciones y Procesos que realizan cuando se presioan el boton de ingresar
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
            alert("Ingresa nombre de usuario por favor");
            return;
        }
        if (this.usuario.cContrasena == null || this.usuario.cContrasena == "") {
            alert("Ingresa una contraseña por favor");
            return;
        }
        //si todas las validaciones son correctas va a el servicio REST post
        this.userService.postQuote(this.usuario).
            then(function (resolve) {
            resolve
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                if (result.response.opcMensaje != "") {
                    alert("Usuario y/o contraseña incorrectos");
                }
                else {
                    if (_this.lrecordar == true) {
                        sesionActiva_1.SesionActiva.sesion = _this.usuario;
                    }
                    _this.router.navigate(["ope/categoria"]);
                }
            });
        });
    };
    LoginComponent.prototype.contrasena = function () {
        this.router.navigate(["sg/contrasena"]);
    };
    //Metodo para el campo de recordar datos 
    LoginComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        }
        else {
            this.secondSwitchState = true;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQXlFO0FBQ3pFLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBR3ZELDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsY0FBYztJQVV6QixhQUFhO0lBQ2Isd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVZ4RiwwQkFBMEI7UUFDMUIsa0RBQWtEO1FBQzNDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHaEMsMEVBQTBFO1FBQ25FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxDQUFDLG9EQUFvRDtRQUN0Rix5RUFBeUU7UUFDekUsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSwrQkFBTSxHQUFOO1FBQUEsaUJBMkJDO1FBMUJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNYLE9BQU87aUJBQ0osR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzNCLDJCQUFZLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsdUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDO0tBQ3JELENBQUM7SUFFRixvQ0FBb0M7O3FDQVlSLFdBQUksRUFBa0IsZUFBTSxFQUF1QixxQkFBVztHQVg3RSxjQUFjLENBZ0UxQjtBQWhFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGxhbnRpbGxhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3VzdWFyaW8uY3NzXCIsIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuLy9DbGFzZSBwYXJhIGxhcyBhY2Npb25lcyB5IHByb2Nlc29zXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgLy9EZWNsYXJhY2lvbiBlIHZhcmlhYmxlczpcclxuICAvL3ZhcmlhYmxlcyBwYXJhIGVsIHJhZGlvIGJ1dHRvbiBkZSByZWNvcmRhciBkYXRvc1xyXG4gIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgcHVibGljIHNlY29uZFN3aXRjaFN0YXRlID0gdHJ1ZTtcclxuICAvL3ZhcmlibGUgcXVlIGd1YXJkYSBsYSB0YWJsYSB0ZW1wb3JhbFxyXG4gIHVzdWFyaW86IHR0Y3RQZXJzb25hO1xyXG4gIC8vVmFyaWFibGUgcXVlIHNpcnZlIHBhcmEgc2FiZXIgc2kgZWwgdXN1YXJpbyBkZXNlYSBndWFyZGFyIHN1cyBkYXRvcyBvIG5vXHJcbiAgcHVibGljIGxyZWNvcmRhciA9IGZhbHNlO1xyXG5cclxuICAvL0NvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL09jdWx0YSBsYSBiYXJyYSBzdXBlcmlvciBlbiBsYSBwYW50YWxsYVxyXG4gICAgdGhpcy51c3VhcmlvID0gbmV3IHR0Y3RQZXJzb25hKCk7IC8vSW5zdGFuY2VhIGVsIG9iamV0byBkZSB1c3VhcmlvIGEgbGEgdGFibGEgdGVtcG9yYWxcclxuICAgIC8vQ29tcHJ1ZWJhIHNlIGV4aXN0ZW4gZGF0b3MgZ3VhcmRhZG9zIGxvcyBtdWVzdHJhIGFsIGluaWNpbyBkZSBsYSBzZXNpb25cclxuICAgIGlmIChTZXNpb25BY3RpdmEuc2VzaW9uLmNVc3VhcmlvICE9IFwiXCIpIHtcclxuICAgICAgdGhpcy51c3VhcmlvLmNVc3VhcmlvID0gU2VzaW9uQWN0aXZhLnNlc2lvbi5jVXN1YXJpbztcclxuICAgICAgdGhpcy51c3VhcmlvLmNDb250cmFzZW5hID0gU2VzaW9uQWN0aXZhLnNlc2lvbi5jQ29udHJhc2VuYTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWNjaW9uZXMgeSBQcm9jZXNvcyBxdWUgcmVhbGl6YW4gY3VhbmRvIHNlIHByZXNpb2FuIGVsIGJvdG9uIGRlIGluZ3Jlc2FyXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVXN1YXJpbyA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSBub21icmUgZGUgdXN1YXJpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY0NvbnRyYXNlbmEgPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY0NvbnRyYXNlbmEgPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2EgdW5hIGNvbnRyYXNlw7FhIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2kgdG9kYXMgbGFzIHZhbGlkYWNpb25lcyBzb24gY29ycmVjdGFzIHZhIGEgZWwgc2VydmljaW8gUkVTVCBwb3N0XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnVzdWFyaW8pLlxyXG4gICAgICB0aGVuKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZVxyXG4gICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXCJVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3Rvc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5scmVjb3JkYXIgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgU2VzaW9uQWN0aXZhLnNlc2lvbiA9IHRoaXMudXN1YXJpbztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29udHJhc2VuYSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL2NvbnRyYXNlbmFcIl0pO1xyXG4gIH1cclxuXHJcbiAgLy9NZXRvZG8gcGFyYSBlbCBjYW1wbyBkZSByZWNvcmRhciBkYXRvcyBcclxuICBwdWJsaWMgb25GaXJzdENoZWNrZWQoYXJncykge1xyXG4gICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=