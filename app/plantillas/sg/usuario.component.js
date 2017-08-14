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
        //alert("You’re using: " + this.email);
        if (this.validar()) {
            return;
        }
        this.userService.postQuote(this.usuario);
    };
    LoginComponent.prototype.validar = function () {
        var bandera = false;
        var emailRegex;
        console.log(this.usuario.cUsuario);
        console.log(this.usuario.cContrasena);
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
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
        if (this.usuario.cContrasena == null || this.usuario.cContrasena == "") {
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
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, usuario_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLHNEQUF5RDtBQUN6RCwwQ0FBeUM7QUFDekMsb0RBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFFekIsd0JBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDQTs2QkFDeUI7SUFDMUIsK0JBQU0sR0FBTjtRQUdFLHVDQUF1QztRQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQztRQUNQLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVILGdDQUFPLEdBQVA7UUFDRSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQy9ELE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSjs7OztlQUlHO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3RFLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLGNBQWM7SUFSMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHFCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFDLDRCQUE0QjtRQUN4QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDO0lBRUYsd0NBQXdDOztxQ0FHWixXQUFJLEVBQWtCLGVBQU0sRUFBdUIscUJBQVc7R0FGN0UsY0FBYyxDQTJDMUI7QUEzQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwbGFudGlsbGFzL3NnL3VzdWFyaW8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvdXN1YXJpby5jc3NcIl1cclxufSlcclxuXHJcbi8vQ2xhc2UgcGFyYSBsYXMgYWNjaW9uZXMgZGUgbG9zIGJvdG9uZXNcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICB1c3VhcmlvOiB0dGN0UGVyc29uYTsgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIHRoaXMudXN1YXJpbyA9IG5ldyB0dGN0UGVyc29uYSgpO1xyXG4gIH1cclxuICAgLyogdmFyIHJlbGFjaW9uID0gWydIb2xhJywnSE9MQSddO1xyXG4gICAgY29uc29sZS5sb2cocmVsYWNpb24pOyovXHJcbiAgc3VibWl0KClcclxuICBcclxuICAge1xyXG4gICAgLy9hbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xyXG4gICAgaWYodGhpcy52YWxpZGFyKCkpXHJcbiAgICAgIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgdGhpcy51c2VyU2VydmljZS5wb3N0UXVvdGUodGhpcy51c3VhcmlvKTtcclxuICAgIH1cclxuXHJcbiAgdmFsaWRhcigpe1xyXG4gICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgIHZhciBlbWFpbFJlZ2V4O1xyXG4gICAgY29uc29sZS5sb2codGhpcy51c3VhcmlvLmNVc3VhcmlvKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSk7XHJcblxyXG4gICAgaWYodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpe1xyXG4gICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgYWxlcnQoXCJJbmdyZXNhIG5vbWJyZSBkZSB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAvKmVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgICBpZighZW1haWxSZWdleC50ZXN0KHRoaXMudXN1YXJpby5lbWFpbCkpe1xyXG4gICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1biBub21icmUgZGUgdXN1YXJpbyB2YWxpZG9cIik7XHJcbiAgICAgIH0qLyBcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jQ29udHJhc2VuYSA9PSBcIlwiKXtcclxuICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1bmEgY29udHJhc2XDsWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhbmRlcmE7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiAgIl19