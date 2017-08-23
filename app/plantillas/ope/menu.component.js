"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var menu_1 = require("../../servicios/ope/menu");
var menu_2 = require("../../modelos/ope/menu");
var dialogs = require("ui/dialogs");
var MenuComponent = (function () {
    function MenuComponent(page, router, menuService) {
        this.page = page;
        this.router = router;
        this.menuService = menuService;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.domicilio = new menu_2.Domicilio();
        this.domicilio.iDomicilio = "0";
        this.domicilio.iPersona = "0";
        this.domicilio.iTipoPersona = "1";
    }
    //Acciones o procesos  
    MenuComponent.prototype.guardar = function () {
        var _this = this;
        var bandera = false;
        //Código que condiciona al usuario a ingresar los datos que son obligatorios para el registro de la direción
        //valida que ingrese CP
        console.log(this.domicilio.cCp);
        if (this.domicilio.cCp == null || this.domicilio.cCp == "") {
            bandera = true;
            alert("Ingrese un Codigo Postal por favor");
            return;
        }
        else {
            this.menuService.validacp(this.domicilio.cCp).then(function (resolve) {
                resolve
                    .map(function (response) { return response.json(); })
                    .subscribe(function (result) {
                    if (result.response.opcMensaje != "") {
                        alert("Codigo Postal invalido");
                    }
                    else {
                        //Valida que se ingrese Colonia
                        if (_this.domicilio.cColonia == null || _this.domicilio.cColonia == "") {
                            alert("Ingrese una Colonia por favor");
                            return;
                        }
                        //Valida que se ingrese Calle
                        if (_this.domicilio.cCalle == null || _this.domicilio.cCalle == "") {
                            alert("Ingrese una Calle por favor");
                            return;
                        }
                        //Valida que se ingrese un Numero Exterior
                        if (_this.domicilio.cNumExterior == null || _this.domicilio.cNumExterior == "") {
                            alert("Ingrese un Numero Exterior por favor");
                            return;
                        }
                        //Valida que se ingrese un Municipio
                        if (_this.domicilio.cMunicipio == null || _this.domicilio.cMunicipio == "") {
                            alert("Ingrese un Municipio por favor");
                            return;
                        }
                        //Valida que se ingrese una Ciudad
                        if (_this.domicilio.cCiudad == null || _this.domicilio.cCiudad == "") {
                            alert("Ingrese una Ciudad por favor");
                            return;
                        }
                        //Valida que se ingrese un Estado
                        if (_this.domicilio.cEstado == null || _this.domicilio.cEstado == "") {
                            alert("Ingrese un Estado por favor");
                            return;
                        }
                        //Valida que se ingrese un Pais
                        if (_this.domicilio.cPais == null || _this.domicilio.cPais == "") {
                            alert("Ingrese un Pais por favor");
                            return;
                        }
                        //Valida que se ingrese un Alias
                        /* if (this.domicilio.iAlias == null || this.domicilio.iAlias == "") {
                             bandera = true;
                             alert("Ingrese un Alias por favor");
                             return;
                         }*/
                        //si todas las validaciones son correctas para a la insercion de datos 
                        console.log("tabla", JSON.stringify(_this.domicilio));
                        _this.menuService.postQuote(_this.domicilio);
                        dialogs.confirm({
                            title: "¿Desea ingresar otra direccion?",
                            okButtonText: "Si",
                            cancelButtonText: "No",
                        }).then(function (r) {
                            console.log(r);
                            if (r) {
                                _this.router.navigate(["ope/menu"]);
                            }
                            else {
                                _this.router.navigate(["ope/categoria"]);
                            }
                        });
                    }
                }, function (error) {
                    JSON.stringify(error);
                });
            });
        }
    };
    MenuComponent.prototype.back = function () {
        this.router.navigate(["sg/usuario"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [menu_1.MenuService],
        templateUrl: "plantillas/ope/menu.html",
        styleUrls: ["plantillas/css/menu.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, menu_1.MenuService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFFekMsZ0NBQStCO0FBQy9CLGlEQUF1RDtBQUN2RCwrQ0FBbUQ7QUFDbkQsb0NBQXVDO0FBU3ZDLElBQWEsYUFBYTtJQVN0Qix1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxXQUF3QjtRQUFwRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3BGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO1FBQ2xGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUNELHVCQUF1QjtJQUN2QiwrQkFBTyxHQUFQO1FBQUEsaUJBb0ZDO1FBbkZHLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQiw0R0FBNEc7UUFDNUcsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDNUMs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RUFBa0IsZUFBTSxFQUF1QixrQkFBVztHQVQvRSxhQUFhLENBeUd6QjtBQXpHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL29wZS9tZW51XCI7XHJcbmltcG9ydCB7IERvbWljaWxpbyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL29wZS9tZW51XCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvb3BlL21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9tZW51LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XHJcbiAgICBkb21pY2lsaW86IERvbWljaWxpbztcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aXRsZUFsaWduPzogc3RyaW5nO1xyXG4gICAgcHVibGljIG1lc3NhZ2VBbGlnbj86IHN0cmluZztcclxuICAgIHB1YmxpYyBidG5Pa1RleHQ/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnRuQ2FuY2VsVGV4dD86IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvID0gbmV3IERvbWljaWxpbygpO1xyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvLmlEb21pY2lsaW8gPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgfVxyXG4gICAgLy9BY2Npb25lcyBvIHByb2Nlc29zICBcclxuICAgIGd1YXJkYXIoKSB7XHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICAvL0PDs2RpZ28gcXVlIGNvbmRpY2lvbmEgYWwgdXN1YXJpbyBhIGluZ3Jlc2FyIGxvcyBkYXRvcyBxdWUgc29uIG9ibGlnYXRvcmlvcyBwYXJhIGVsIHJlZ2lzdHJvIGRlIGxhIGRpcmVjacOzblxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBpbmdyZXNlIENQXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kb21pY2lsaW8uY0NwKTtcclxuICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0NwID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NwID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBDb2RpZ28gUG9zdGFsIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51U2VydmljZS52YWxpZGFjcCh0aGlzLmRvbWljaWxpby5jQ3ApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb2RpZ28gUG9zdGFsIGludmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgQ29sb25pYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ29sb25pYSA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDb2xvbmlhID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDb2xvbmlhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSBDYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENhbGxlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBOdW1lcm8gRXh0ZXJpb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE51bWVybyBFeHRlcmlvciBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNNdW5pY2lwaW8gPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jTXVuaWNpcGlvID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE11bmljaXBpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENpdWRhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2l1ZGFkID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NpdWRhZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ2l1ZGFkIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBFc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0VzdGFkbyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNFc3RhZG8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gRXN0YWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBQYWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNQYWlzID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY1BhaXMgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gUGFpcyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQWxpYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpZiAodGhpcy5kb21pY2lsaW8uaUFsaWFzID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uaUFsaWFzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFsaWFzIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaSB0b2RhcyBsYXMgdmFsaWRhY2lvbmVzIHNvbiBjb3JyZWN0YXMgcGFyYSBhIGxhIGluc2VyY2lvbiBkZSBkYXRvcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZG9taWNpbGlvKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLmRvbWljaWxpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiwr9EZXNlYSBpbmdyZXNhciBvdHJhIGRpcmVjY2lvbj9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9tZW51XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXRlZ29yaWFcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy91c3VhcmlvXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=