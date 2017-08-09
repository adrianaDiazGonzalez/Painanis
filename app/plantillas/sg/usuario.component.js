"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var usuario_1 = require("../../servicios/sg/usuario");
var router_1 = require("@angular/router");
var usuario_2 = require("../../modelos/sg/usuario");
//Declaración de los componentes de la vista
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.usuario = new usuario_2.ttctPersona();
    }
    LoginComponent.prototype.registro = function () {
        var relacion = ['Hola', 'HOLA'];
        console.log(relacion);
        this.router.navigate(["/registro"]);
    };
    LoginComponent.prototype.submit = function () {
        //alert("You’re using: " + this.email);
        if (this.validar()) {
            return;
        }
        this.userService.postQuote(this.usuario);
    };
    LoginComponent.prototype.validar = function () {
        var bandera = false;
        var emailRegex;
        console.log(this.usuario.iUsuario);
        console.log(this.usuario.cUsuario);
        if (this.usuario.iUsuario == null || this.usuario.iUsuario == "") {
            bandera = true;
            alert("Ingresa nombre de usuario por favor");
        }
        else {
            /*emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if(!emailRegex.test(this.usuario.email)){
              bandera = true;
              alert("Ingresa un nombre de usuario valido");
            }*/
        }
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
            bandera = true;
            alert("Ingresa una contraseña por favor");
        }
        return bandera;
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
    __metadata("design:paramtypes", [router_1.Router, usuario_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxzQ0FBMEM7QUFDMUMsc0RBQXlEO0FBQ3pELDBDQUF5QztBQUN6QyxvREFBdUQ7QUFFdkQsNENBQTRDO0FBUzVDLElBQWEsY0FBYztJQUV6Qix3QkFBcUIsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBRUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFFRSx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQ2hCLENBQUM7WUFDRCxNQUFNLENBQUM7UUFDUCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksVUFBVSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMvRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0o7Ozs7ZUFJRztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNoRSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBQyw0QkFBNEI7UUFDeEMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDMUMsQ0FBQztJQUVGLHdDQUF3Qzs7cUNBR1QsZUFBTSxFQUF1QixxQkFBVztHQUYxRCxjQUFjLENBOEMxQjtBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy91c3VhcmlvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdHRjdFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy91c3VhcmlvXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGxhbnRpbGxhcy9zZy91c3VhcmlvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3VzdWFyaW8uY3NzXCJdXHJcbn0pXHJcblxyXG4vL0NsYXNlIHBhcmEgbGFzIGFjY2lvbmVzIGRlIGxvcyBib3RvbmVzXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXN1YXJpbzogdHRjdFBlcnNvbmE7IFxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gIHRoaXMudXN1YXJpbyA9IG5ldyB0dGN0UGVyc29uYSgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0cm8oKVxyXG4gIHtcclxuICAgIHZhciByZWxhY2lvbiA9IFsnSG9sYScsJ0hPTEEnXTtcclxuICAgIGNvbnNvbGUubG9nKHJlbGFjaW9uKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3Ryb1wiXSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKVxyXG4gICB7XHJcbiAgICAvL2FsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XHJcbiAgICBpZih0aGlzLnZhbGlkYXIoKSlcclxuICAgICAge1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICB0aGlzLnVzZXJTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gICAgfVxyXG5cclxuICB2YWxpZGFyKCl7XHJcbiAgICB2YXIgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgdmFyIGVtYWlsUmVnZXg7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzdWFyaW8uaVVzdWFyaW8pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy51c3VhcmlvLmNVc3VhcmlvKTtcclxuXHJcbiAgICBpZih0aGlzLnVzdWFyaW8uaVVzdWFyaW8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uaVVzdWFyaW8gPT0gXCJcIil7XHJcbiAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2Egbm9tYnJlIGRlIHVzdWFyaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8qZW1haWxSZWdleCA9IC9eWy1cXHcuJStdezEsNjR9QCg/OltBLVowLTktXXsxLDYzfVxcLil7MSwxMjV9W0EtWl17Miw2M30kL2k7XHJcbiAgICAgIGlmKCFlbWFpbFJlZ2V4LnRlc3QodGhpcy51c3VhcmlvLmVtYWlsKSl7XHJcbiAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuIG5vbWJyZSBkZSB1c3VhcmlvIHZhbGlkb1wiKTtcclxuICAgICAgfSovIFxyXG4gICAgfSBcclxuXHJcbiAgICBpZiAodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpe1xyXG4gICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIHVuYSBjb250cmFzZcOxYSBwb3IgZmF2b3JcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFuZGVyYTtcclxuICB9XHJcbn1cclxuICAiXX0=