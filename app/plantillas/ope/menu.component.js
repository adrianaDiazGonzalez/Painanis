"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var menu_1 = require("../../servicios/ope/menu");
var menu_2 = require("../../modelos/ope/menu");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFFekMsZ0NBQStCO0FBQy9CLGlEQUF1RDtBQUN2RCwrQ0FBbUQ7QUFTbkQsSUFBYSxhQUFhO0lBRXRCLHVCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFdBQXdCO1FBQXBFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDcEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsdUJBQXVCO0lBQ3ZCLCtCQUFPLEdBQVA7UUFBQSxpQkEwRUM7UUF6RUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLDRHQUE0RztRQUM1Ryx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUM7UUFD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QUE7d0JBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFL0MsQ0FBQztnQkFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO29CQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO0lBRUwsQ0FBQztJQUNELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXhGRCxJQXdGQztBQXhGWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxrQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FJNEIsV0FBSSxFQUFrQixlQUFNLEVBQXVCLGtCQUFXO0dBRi9FLGFBQWEsQ0F3RnpCO0FBeEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL21lbnVcIjtcclxuaW1wb3J0IHsgRG9taWNpbGlvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvb3BlL21lbnVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNZW51U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL29wZS9tZW51Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvbWVudS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGRvbWljaWxpbzogRG9taWNpbGlvO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSkge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgICAgICB0aGlzLmRvbWljaWxpbyA9IG5ldyBEb21pY2lsaW8oKTtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pRG9taWNpbGlvID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5kb21pY2lsaW8uaVBlcnNvbmEgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pVGlwb1BlcnNvbmEgPSBcIjFcIjtcclxuICAgIH1cclxuICAgIC8vQWNjaW9uZXMgbyBwcm9jZXNvcyAgXHJcbiAgICBndWFyZGFyKCkge1xyXG4gICAgICAgIHZhciBiYW5kZXJhID0gZmFsc2U7XHJcbiAgICAgICAgLy9Dw7NkaWdvIHF1ZSBjb25kaWNpb25hIGFsIHVzdWFyaW8gYSBpbmdyZXNhciBsb3MgZGF0b3MgcXVlIHNvbiBvYmxpZ2F0b3Jpb3MgcGFyYSBlbCByZWdpc3RybyBkZSBsYSBkaXJlY2nDs25cclxuICAgICAgICAvL3ZhbGlkYSBxdWUgaW5ncmVzZSBDUFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9taWNpbGlvLmNDcCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNDcCA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDcCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGJhbmRlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQ29kaWdvIFBvc3RhbCBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudVNlcnZpY2UudmFsaWRhY3AodGhpcy5kb21pY2lsaW8uY0NwKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29kaWdvIFBvc3RhbCBpbnZhbGlkb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgQ29sb25pYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ29sb25pYSA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDb2xvbmlhID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDb2xvbmlhIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSBDYWxsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ2FsbGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENhbGxlIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBOdW1lcm8gRXh0ZXJpb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY051bUV4dGVyaW9yID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE51bWVybyBFeHRlcmlvciBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNNdW5pY2lwaW8gPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jTXVuaWNpcGlvID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIE11bmljaXBpbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW5hIENpdWRhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ2l1ZGFkID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NpdWRhZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ2l1ZGFkIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBFc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0VzdGFkbyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNFc3RhZG8gPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gRXN0YWRvIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhbGlkYSBxdWUgc2UgaW5ncmVzZSB1biBQYWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNQYWlzID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY1BhaXMgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gUGFpcyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gQWxpYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlmICh0aGlzLmRvbWljaWxpby5pQWxpYXMgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5pQWxpYXMgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFsaWFzIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2kgdG9kYXMgbGFzIHZhbGlkYWNpb25lcyBzb24gY29ycmVjdGFzIHBhcmEgYSBsYSBpbnNlcmNpb24gZGUgZGF0b3MgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YWJsYVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRvbWljaWxpbykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U2VydmljZS5wb3N0UXVvdGUodGhpcy5kb21pY2lsaW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy91c3VhcmlvXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=