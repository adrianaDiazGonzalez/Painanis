"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var datos_1 = require("../../servicios/ope/datos");
var direccionM_1 = require("../../modelos/ope/direccionM");
var ActdirComponent = (function () {
    function ActdirComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return ActdirComponent;
}());
ActdirComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [datos_1.DatosService],
        templateUrl: "vistas/ope/actdir.html",
        styleUrls: ["vistas/css/actdir.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], ActdirComponent);
exports.ActdirComponent = ActdirComponent;
var DireccionComponent = (function () {
    function DireccionComponent(page, router, menuService) {
        this.page = page;
        this.router = router;
        this.menuService = menuService;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.domicilio = new direccionM_1.Domicilio();
        this.domicilio.iDomicilio = "0";
        this.domicilio.iPersona = "0";
        this.domicilio.iTipoPersona = "1";
    }
    //Acciones o procesos  
    DireccionComponent.prototype.guardar = function () {
        /*
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
            this.menuService.validacp(this.domicilio.cCp).then(
                (resolve) => {
                    resolve
                        .map(response => response.json())
                        .subscribe(result => {
                            if (result.response.opcMensaje != "") {
                                alert("Codigo Postal invalido");
                            }
                            else {
                                //Valida que se ingrese Colonia
                                if (this.domicilio.cColonia == null || this.domicilio.cColonia == "") {
                                    alert("Ingrese una Colonia por favor");
                                    return;
                                }
                                //Valida que se ingrese Calle
                                if (this.domicilio.cCalle == null || this.domicilio.cCalle == "") {
                                    alert("Ingrese una Calle por favor");
                                    return;
                                }
                                //Valida que se ingrese un Numero Exterior
                                if (this.domicilio.cNumExterior == null || this.domicilio.cNumExterior == "") {
                                    alert("Ingrese un Numero Exterior por favor");
                                    return;
                                }
                                //Valida que se ingrese un Municipio
                                if (this.domicilio.cMunicipio == null || this.domicilio.cMunicipio == "") {
                                    alert("Ingrese un Municipio por favor");
                                    return;
                                }
                                //Valida que se ingrese una Ciudad
                                if (this.domicilio.cCiudad == null || this.domicilio.cCiudad == "") {
                                    alert("Ingrese una Ciudad por favor");
                                    return;
                                }
                                //Valida que se ingrese un Estado
                                if (this.domicilio.cEstado == null || this.domicilio.cEstado == "") {
                                    alert("Ingrese un Estado por favor");
                                    return;
                                }
                                //Valida que se ingrese un Pais
                                if (this.domicilio.cPais == null || this.domicilio.cPais == "") {
                                    alert("Ingrese un Pais por favor");
                                    return;
                                }
                                //si todas las validaciones son correctas para a la insercion de datos
                                console.log("tabla", JSON.stringify(this.domicilio))
                                this.menuService.postQuote(this.domicilio);
                                dialogs.confirm({
                                    title: "¿Desea ingresar otra direccion?",
                                    okButtonText: "Si",
                                    cancelButtonText: "No",
                                }).then(r => {
                                    console.log("r", r);
                                    if (r) {
                                        this.domicilio = new Domicilio ();
                                        this.router.navigate(["ope/dir"]);
                                    }
                                    else {
                                        this.router.navigate(["ope/categoria"]);
                                    }
                                });
                            }
                        }, );
                }
            );
        }*/
    };
    DireccionComponent.prototype.back = function () {
        this.router.navigate(["ope/actdir"]);
    };
    return DireccionComponent;
}());
exports.DireccionComponent = DireccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0ZGlyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGRpci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQixtREFBd0Q7QUFFeEQsMkRBQXlEO0FBU3pELElBQWEsZUFBZTtJQUN4Qix5QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDdEYsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxvQkFBWSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGVBQWUsQ0FJM0I7QUFKWSwwQ0FBZTtBQU01QjtJQVNJLDRCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFdBQTZCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ3pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO1FBQ2xGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUNELHVCQUF1QjtJQUN2QixvQ0FBTyxHQUFQO1FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0E0RUc7SUFDUCxDQUFDO0lBQ0QsaUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBbkdELElBbUdDO0FBbkdZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0b3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvZGF0b3NcIlxyXG5pbXBvcnQgeyBEaXJlY2Npb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvZGlyZWNjaW9uXCI7XHJcbmltcG9ydCB7IERvbWljaWxpbyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL29wZS9kaXJlY2Npb25NXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0b3NTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9vcGUvYWN0ZGlyLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy9hY3RkaXIuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3RkaXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWNjaW9uQ29tcG9uZW50IHtcclxuICAgIGRvbWljaWxpbzogRG9taWNpbGlvO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlQWxpZ24/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZUFsaWduPzogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ0bk9rVGV4dD86IHN0cmluZztcclxuICAgIHB1YmxpYyBidG5DYW5jZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBtZW51U2VydmljZTogRGlyZWNjaW9uU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgICAgICB0aGlzLmRvbWljaWxpbyA9IG5ldyBEb21pY2lsaW8oKTtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pRG9taWNpbGlvID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5kb21pY2lsaW8uaVBlcnNvbmEgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgIH1cclxuICAgIC8vQWNjaW9uZXMgbyBwcm9jZXNvcyAgXHJcbiAgICBndWFyZGFyKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIGJhbmRlcmEgPSBmYWxzZTtcclxuICAgICAgICAvL0PDs2RpZ28gcXVlIGNvbmRpY2lvbmEgYWwgdXN1YXJpbyBhIGluZ3Jlc2FyIGxvcyBkYXRvcyBxdWUgc29uIG9ibGlnYXRvcmlvcyBwYXJhIGVsIHJlZ2lzdHJvIGRlIGxhIGRpcmVjacOzblxyXG4gICAgICAgIC8vdmFsaWRhIHF1ZSBpbmdyZXNlIENQXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kb21pY2lsaW8uY0NwKTtcclxuICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0NwID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NwID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBDb2RpZ28gUG9zdGFsIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51U2VydmljZS52YWxpZGFjcCh0aGlzLmRvbWljaWxpby5jQ3ApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb2RpZ28gUG9zdGFsIGludmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgQ29sb25pYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ29sb25pYSA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDb2xvbmlhID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDb2xvbmlhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSBDYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENhbGxlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBOdW1lcm8gRXh0ZXJpb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE51bWVybyBFeHRlcmlvciBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNNdW5pY2lwaW8gPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jTXVuaWNpcGlvID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE11bmljaXBpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENpdWRhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2l1ZGFkID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NpdWRhZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ2l1ZGFkIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBFc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0VzdGFkbyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNFc3RhZG8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gRXN0YWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBQYWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNQYWlzID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY1BhaXMgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gUGFpcyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaSB0b2RhcyBsYXMgdmFsaWRhY2lvbmVzIHNvbiBjb3JyZWN0YXMgcGFyYSBhIGxhIGluc2VyY2lvbiBkZSBkYXRvcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhYmxhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZG9taWNpbGlvKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVTZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLmRvbWljaWxpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiwr9EZXNlYSBpbmdyZXNhciBvdHJhIGRpcmVjY2lvbj9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJcIiwgcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbWljaWxpbyA9IG5ldyBEb21pY2lsaW8gKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvZGlyXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXRlZ29yaWFcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9hY3RkaXJcIl0pO1xyXG4gICAgfSBcclxufVxyXG4iXX0=