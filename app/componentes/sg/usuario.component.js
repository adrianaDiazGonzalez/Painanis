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
        templateUrl: "vistas/sg/usuario.html",
        styleUrls: ["vistas/css/usuario.css", "app.css"]
    })
    //Clase para las acciones y procesos
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, usuario_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQXlFO0FBQ3pFLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBR3ZELDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsY0FBYztJQVV6QixhQUFhO0lBQ2Isd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVZ4RiwwQkFBMEI7UUFDMUIsa0RBQWtEO1FBQzNDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHaEMsMEVBQTBFO1FBQ25FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxDQUFDLG9EQUFvRDtRQUN0Rix5RUFBeUU7UUFDekUsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSwrQkFBTSxHQUFOO1FBQUEsaUJBMkJDO1FBMUJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNYLE9BQU87aUJBQ0osR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzNCLDJCQUFZLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsdUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQztBQWhFWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsU0FBUyxDQUFDO0tBQ2pELENBQUM7SUFFRixvQ0FBb0M7O3FDQVlSLFdBQUksRUFBa0IsZUFBTSxFQUF1QixxQkFBVztHQVg3RSxjQUFjLENBZ0UxQjtBQWhFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcbi8vaW1wb3J0YWNpb24gcGFyYSBtYW50ZW5lciBsYSBzZXNpb24gYWN0aXZhXHJcbmltcG9ydCB7IFNlc2lvbkFjdGl2YSB9IGZyb20gXCIuLi8uLi9zZXNpb25BY3RpdmFcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwidmlzdGFzL3NnL3VzdWFyaW8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy91c3VhcmlvLmNzc1wiLCBcImFwcC5jc3NcIl1cclxufSlcclxuXHJcbi8vQ2xhc2UgcGFyYSBsYXMgYWNjaW9uZXMgeSBwcm9jZXNvc1xyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIC8vRGVjbGFyYWNpb24gZSB2YXJpYWJsZXM6XHJcbiAgLy92YXJpYWJsZXMgcGFyYSBlbCByYWRpbyBidXR0b24gZGUgcmVjb3JkYXIgZGF0b3NcclxuICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzZWNvbmRTd2l0Y2hTdGF0ZSA9IHRydWU7XHJcbiAgLy92YXJpYmxlIHF1ZSBndWFyZGEgbGEgdGFibGEgdGVtcG9yYWxcclxuICB1c3VhcmlvOiB0dGN0UGVyc29uYTtcclxuICAvL1ZhcmlhYmxlIHF1ZSBzaXJ2ZSBwYXJhIHNhYmVyIHNpIGVsIHVzdWFyaW8gZGVzZWEgZ3VhcmRhciBzdXMgZGF0b3MgbyBub1xyXG4gIHB1YmxpYyBscmVjb3JkYXIgPSBmYWxzZTtcclxuXHJcbiAgLy9Db25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9PY3VsdGEgbGEgYmFycmEgc3VwZXJpb3IgZW4gbGEgcGFudGFsbGFcclxuICAgIHRoaXMudXN1YXJpbyA9IG5ldyB0dGN0UGVyc29uYSgpOyAvL0luc3RhbmNlYSBlbCBvYmpldG8gZGUgdXN1YXJpbyBhIGxhIHRhYmxhIHRlbXBvcmFsXHJcbiAgICAvL0NvbXBydWViYSBzZSBleGlzdGVuIGRhdG9zIGd1YXJkYWRvcyBsb3MgbXVlc3RyYSBhbCBpbmljaW8gZGUgbGEgc2VzaW9uXHJcbiAgICBpZiAoU2VzaW9uQWN0aXZhLnNlc2lvbi5jVXN1YXJpbyAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMudXN1YXJpby5jVXN1YXJpbyA9IFNlc2lvbkFjdGl2YS5zZXNpb24uY1VzdWFyaW87XHJcbiAgICAgIHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9IFNlc2lvbkFjdGl2YS5zZXNpb24uY0NvbnRyYXNlbmE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0FjY2lvbmVzIHkgUHJvY2Vzb3MgcXVlIHJlYWxpemFuIGN1YW5kbyBzZSBwcmVzaW9hbiBlbCBib3RvbiBkZSBpbmdyZXNhclxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2Egbm9tYnJlIGRlIHVzdWFyaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNDb250cmFzZW5hID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuYSBjb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyB2YSBhIGVsIHNlcnZpY2lvIFJFU1QgcG9zdFxyXG4gICAgdGhpcy51c2VyU2VydmljZS5wb3N0UXVvdGUodGhpcy51c3VhcmlvKS5cclxuICAgICAgdGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmVcclxuICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiVXN1YXJpbyB5L28gY29udHJhc2XDsWEgaW5jb3JyZWN0b3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMubHJlY29yZGFyID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIFNlc2lvbkFjdGl2YS5zZXNpb24gPSB0aGlzLnVzdWFyaW87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXRlZ29yaWFcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy9jb250cmFzZW5hXCJdKTtcclxuICB9XHJcblxyXG4gIC8vTWV0b2RvIHBhcmEgZWwgY2FtcG8gZGUgcmVjb3JkYXIgZGF0b3MgXHJcbiAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgIGxldCBmaXJzdFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19