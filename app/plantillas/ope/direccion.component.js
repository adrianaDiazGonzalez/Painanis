"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var direccion_1 = require("../../servicios/ope/direccion");
var direccionM_1 = require("../../modelos/ope/direccionM");
var dialogs = require("ui/dialogs");
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
    DireccionComponent.prototype.back = function () {
        this.router.navigate(["sg/usuario"]);
    };
    DireccionComponent.prototype.id1 = function () {
    };
    DireccionComponent.prototype.id2 = function () {
    };
    DireccionComponent.prototype.id3 = function () {
    };
    DireccionComponent.prototype.id4 = function () {
    };
    DireccionComponent.prototype.id5 = function () {
    };
    return DireccionComponent;
}());
DireccionComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [direccion_1.DireccionService],
        templateUrl: "plantillas/ope/menu.html",
        styleUrls: ["plantillas/css/menu.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, direccion_1.DireccionService])
], DireccionComponent);
exports.DireccionComponent = DireccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjY2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQiwyREFBaUU7QUFDakUsMkRBQXlEO0FBQ3pELG9DQUF1QztBQVN2QyxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxXQUE2QjtRQUF6RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUN6RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtRQUNsRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFDRCx1QkFBdUI7SUFDdkIsb0NBQU8sR0FBUDtRQUFBLGlCQW9GQztRQW5GRyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsNEdBQTRHO1FBQzVHLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLEtBQUssQ0FBQyxvQ0FBb0MsQ0FB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OUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFnQixDQUFDO1FBQzdCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FVNEIsV0FBSSxFQUFrQixlQUFNLEVBQXVCLDRCQUFnQjtHQVRwRixrQkFBa0IsQ0F3SDlCO0FBeEhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGlyZWNjaW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL2RpcmVjY2lvblwiO1xyXG5pbXBvcnQgeyBEb21pY2lsaW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9vcGUvZGlyZWNjaW9uTVwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtEaXJlY2Npb25TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvb3BlL21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9tZW51LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWNjaW9uQ29tcG9uZW50IHtcclxuICAgIGRvbWljaWxpbzogRG9taWNpbGlvO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlQWxpZ24/OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWVzc2FnZUFsaWduPzogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ0bk9rVGV4dD86IHN0cmluZztcclxuICAgIHB1YmxpYyBidG5DYW5jZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBtZW51U2VydmljZTogRGlyZWNjaW9uU2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgICAgICB0aGlzLmRvbWljaWxpbyA9IG5ldyBEb21pY2lsaW8oKTtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pRG9taWNpbGlvID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5kb21pY2lsaW8uaVBlcnNvbmEgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgIH1cclxuICAgIC8vQWNjaW9uZXMgbyBwcm9jZXNvcyAgXHJcbiAgICBndWFyZGFyKCkge1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3RybyBkZSBsYSBkaXJlY2nDs25cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgaW5ncmVzZSBDUFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9taWNpbGlvLmNDcCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNDcCA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDcCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQ29kaWdvIFBvc3RhbCBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudVNlcnZpY2UudmFsaWRhY3AodGhpcy5kb21pY2lsaW8uY0NwKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb2RpZ28gUG9zdGFsIGludmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSBDb2xvbmlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNDb2xvbmlhID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NvbG9uaWEgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENvbG9uaWEgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIENhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNDYWxsZSA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDYWxsZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ2FsbGUgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE51bWVybyBFeHRlcmlvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jTnVtRXh0ZXJpb3IgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jTnVtRXh0ZXJpb3IgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTnVtZXJvIEV4dGVyaW9yIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBNdW5pY2lwaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY011bmljaXBpbyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNNdW5pY2lwaW8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gTXVuaWNpcGlvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1bmEgQ2l1ZGFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNDaXVkYWQgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ2l1ZGFkID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDaXVkYWQgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIEVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jRXN0YWRvID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0VzdGFkbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBFc3RhZG8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIFBhaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY1BhaXMgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jUGFpcyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBQYWlzIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBBbGlhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlmICh0aGlzLmRvbWljaWxpby5pQWxpYXMgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5pQWxpYXMgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZGVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQWxpYXMgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFibGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5kb21pY2lsaW8pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVNlcnZpY2UucG9zdFF1b3RlKHRoaXMuZG9taWNpbGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLCv0Rlc2VhIGluZ3Jlc2FyIG90cmEgZGlyZWNjaW9uP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU2lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL21lbnVcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL3VzdWFyaW9cIl0pO1xyXG4gICAgfVxyXG4gICAgaWQxKCl7XHJcblxyXG4gICAgfVxyXG4gICAgaWQyKCl7XHJcblxyXG4gICAgfVxyXG4gICAgaWQzKCl7XHJcblxyXG4gICAgfVxyXG4gICAgaWQ0KCl7XHJcblxyXG4gICAgfVxyXG4gICAgaWQ1KCl7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==