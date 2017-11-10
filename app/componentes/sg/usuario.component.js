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
        //this.router.navigate(["sg/contrasena"]);
        this.router.navigate(["ope/carrito"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQXlFO0FBQ3pFLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBR3ZELDRDQUE0QztBQUM1QyxtREFBa0Q7QUFFbEQsNENBQTRDO0FBUzVDLElBQWEsY0FBYztJQVV6QixhQUFhO0lBQ2Isd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVZ4RiwwQkFBMEI7UUFDMUIsa0RBQWtEO1FBQzNDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHaEMsMEVBQTBFO1FBQ25FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxDQUFDLG9EQUFvRDtRQUN0Rix5RUFBeUU7UUFDekUsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSwrQkFBTSxHQUFOO1FBQUEsaUJBNEJDO1FBM0JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBR0Qsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNYLE9BQU87aUJBQ0osR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzNCLDJCQUFZLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBRUUsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQseUNBQXlDO0lBQ2xDLHVDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDeEIsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFuRVksY0FBYztJQVIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMscUJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQztLQUNqRCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FZUixXQUFJLEVBQWtCLGVBQU0sRUFBdUIscUJBQVc7R0FYN0UsY0FBYyxDQW1FMUI7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy91c3VhcmlvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdHRjdFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy91c3VhcmlvXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG4vL2ltcG9ydGFjaW9uIHBhcmEgbWFudGVuZXIgbGEgc2VzaW9uIGFjdGl2YVxyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmEgfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvdXN1YXJpby5jc3NcIiwgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG4vL0NsYXNlIHBhcmEgbGFzIGFjY2lvbmVzIHkgcHJvY2Vzb3NcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAvL0RlY2xhcmFjaW9uIGUgdmFyaWFibGVzOlxyXG4gIC8vdmFyaWFibGVzIHBhcmEgZWwgcmFkaW8gYnV0dG9uIGRlIHJlY29yZGFyIGRhdG9zXHJcbiAgcHVibGljIGZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gIC8vdmFyaWJsZSBxdWUgZ3VhcmRhIGxhIHRhYmxhIHRlbXBvcmFsXHJcbiAgdXN1YXJpbzogdHRjdFBlcnNvbmE7XHJcbiAgLy9WYXJpYWJsZSBxdWUgc2lydmUgcGFyYSBzYWJlciBzaSBlbCB1c3VhcmlvIGRlc2VhIGd1YXJkYXIgc3VzIGRhdG9zIG8gbm9cclxuICBwdWJsaWMgbHJlY29yZGFyID0gZmFsc2U7XHJcblxyXG4gIC8vQ29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vT2N1bHRhIGxhIGJhcnJhIHN1cGVyaW9yIGVuIGxhIHBhbnRhbGxhXHJcbiAgICB0aGlzLnVzdWFyaW8gPSBuZXcgdHRjdFBlcnNvbmEoKTsgLy9JbnN0YW5jZWEgZWwgb2JqZXRvIGRlIHVzdWFyaW8gYSBsYSB0YWJsYSB0ZW1wb3JhbFxyXG4gICAgLy9Db21wcnVlYmEgc2UgZXhpc3RlbiBkYXRvcyBndWFyZGFkb3MgbG9zIG11ZXN0cmEgYWwgaW5pY2lvIGRlIGxhIHNlc2lvblxyXG4gICAgaWYgKFNlc2lvbkFjdGl2YS5zZXNpb24uY1VzdWFyaW8gIT0gXCJcIikge1xyXG4gICAgICB0aGlzLnVzdWFyaW8uY1VzdWFyaW8gPSBTZXNpb25BY3RpdmEuc2VzaW9uLmNVc3VhcmlvO1xyXG4gICAgICB0aGlzLnVzdWFyaW8uY0NvbnRyYXNlbmEgPSBTZXNpb25BY3RpdmEuc2VzaW9uLmNDb250cmFzZW5hO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9BY2Npb25lcyB5IFByb2Nlc29zIHF1ZSByZWFsaXphbiBjdWFuZG8gc2UgcHJlc2lvYW4gZWwgYm90b24gZGUgaW5ncmVzYXJcclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIG5vbWJyZSBkZSB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1bmEgY29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyB2YSBhIGVsIHNlcnZpY2lvIFJFU1QgcG9zdFxyXG4gICAgdGhpcy51c2VyU2VydmljZS5wb3N0UXVvdGUodGhpcy51c3VhcmlvKS5cclxuICAgICAgdGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmVcclxuICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiVXN1YXJpbyB5L28gY29udHJhc2XDsWEgaW5jb3JyZWN0b3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMubHJlY29yZGFyID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIFNlc2lvbkFjdGl2YS5zZXNpb24gPSB0aGlzLnVzdWFyaW87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXRlZ29yaWFcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcblxyXG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy9jb250cmFzZW5hXCJdKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXJyaXRvXCJdKTtcclxuICB9XHJcblxyXG4gIC8vTWV0b2RvIHBhcmEgZWwgY2FtcG8gZGUgcmVjb3JkYXIgZGF0b3MgXHJcbiAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcclxuICAgIGxldCBmaXJzdFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19