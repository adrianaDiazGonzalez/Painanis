"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var contrasena_1 = require("../../servicios/sg/contrasena");
var router_1 = require("@angular/router");
var contrasena_2 = require("../../modelos/sg/contrasena");
//Declaración de los componentes de la vista
var PasswordComponent = (function () {
    function PasswordComponent(page, router, passwordService) {
        this.page = page;
        this.router = router;
        this.passwordService = passwordService;
        page.actionBarHidden = true;
        this.usuario = new contrasena_2.Password();
    }
    PasswordComponent.prototype.submit = function () {
        //validaciones de campos obligatorios
        if (this.usuario.cUsuario == null || this.usuario.cUsuario == "") {
            alert("Ingresa un usuario por favor");
            return;
        }
        if (this.usuario.cTelefono == null || this.usuario.cTelefono == "") {
            alert("Ingrese un telefono por favor");
            return;
        }
        //validación de correo si existe
        var emailRegex;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (this.usuario.cCorreo != "") {
            if (!emailRegex.test(this.usuario.cCorreo)) {
                alert("Ingrese correo valido");
                return;
            }
        }
        this.passwordService.getQuote(this.usuario);
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [contrasena_1.PasswordService],
        templateUrl: "plantillas/sg/contrasena.html",
        styleUrls: ["plantillas/css/contrasena.css"]
    })
    //Clase para las acciones de los botones
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, contrasena_1.PasswordService])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc2VuYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cmFzZW5hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLDREQUFnRTtBQUNoRSwwQ0FBeUM7QUFDekMsMERBQXVEO0FBRXZELDRDQUE0QztBQVM1QyxJQUFhLGlCQUFpQjtJQUU1QiwyQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxlQUFnQztRQUE1RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM5RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0UscUNBQXFDO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FDaEUsQ0FBQztZQUNDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQ2hFLENBQUM7WUFDQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0gsZ0NBQWdDO1FBQy9CLElBQUksVUFBVSxDQUFBO1FBRWQsVUFBVSxHQUFHLDJEQUEyRCxDQUFDO1FBQ3pFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUcsQ0FBQyxDQUM5QixDQUFDO1lBQ0MsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN6QyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDO1lBQ1QsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhDSCxJQWdDRztBQWhDVSxpQkFBaUI7SUFSN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFlLENBQUM7UUFDNUIsV0FBVyxFQUFDLCtCQUErQjtRQUMzQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO0lBRUYsd0NBQXdDOztxQ0FHWixXQUFJLEVBQWtCLGVBQU0sRUFBMkIsNEJBQWU7R0FGckYsaUJBQWlCLENBZ0MzQjtBQWhDVSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jb250cmFzZW5hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9jb250cmFzZW5hXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGFzc3dvcmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBsYW50aWxsYXMvc2cvY29udHJhc2VuYS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9jb250cmFzZW5hLmNzc1wiXVxyXG59KVxyXG5cclxuLy9DbGFzZSBwYXJhIGxhcyBhY2Npb25lcyBkZSBsb3MgYm90b25lc1xyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQge1xyXG4gIHVzdWFyaW86IFBhc3N3b3JkOyBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB0aGlzLnVzdWFyaW8gPSBuZXcgUGFzc3dvcmQoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpe1xyXG4gICAgLy92YWxpZGFjaW9uZXMgZGUgY2FtcG9zIG9ibGlnYXRvcmlvc1xyXG4gICAgaWYodGhpcy51c3VhcmlvLmNVc3VhcmlvID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmNVc3VhcmlvID09IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzYSB1biB1c3VhcmlvIHBvciBmYXZvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy51c3VhcmlvLmNUZWxlZm9ubyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jVGVsZWZvbm8gPT0gXCJcIilcclxuICAgICAge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biB0ZWxlZm9ubyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAvL3ZhbGlkYWNpw7NuIGRlIGNvcnJlbyBzaSBleGlzdGVcclxuICAgICB2YXIgZW1haWxSZWdleFxyXG4gICAgIFxyXG4gICAgIGVtYWlsUmVnZXggPSAvXlstXFx3LiUrXXsxLDY0fUAoPzpbQS1aMC05LV17MSw2M31cXC4pezEsMTI1fVtBLVpdezIsNjN9JC9pO1xyXG4gICAgIGlmKHRoaXMudXN1YXJpby5jQ29ycmVvICE9IFwiXCIgKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYoIWVtYWlsUmVnZXgudGVzdCh0aGlzLnVzdWFyaW8uY0NvcnJlbykpeyBcclxuICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSBjb3JyZW8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5nZXRRdW90ZSh0aGlzLnVzdWFyaW8pO1xyXG4gICAgfVxyXG4gIH0iXX0=