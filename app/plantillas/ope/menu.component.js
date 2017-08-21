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
            this.menuService.validacp(this.domicilio.cCp);
        }
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
        //Valida que se ingrese un Alias
        if (this.domicilio.iAlias == null || this.domicilio.iAlias == "") {
            bandera = true;
            alert("Ingrese un Alias por favor");
            return;
        }
        //si todas las validaciones son correctas para a la insercion de datos 
        this.menuService.postQuote(this.domicilio);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFFekMsZ0NBQStCO0FBQy9CLGlEQUF1RDtBQUN2RCwrQ0FBbUQ7QUFTbkQsSUFBYSxhQUFhO0lBRXRCLHVCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFdBQXdCO1FBQXBFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDcEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBR0QsdUJBQXVCO0lBQ3ZCLCtCQUFPLEdBQVA7UUFDSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsNEdBQTRHO1FBQzVHLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJ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QUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxrQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FJNEIsV0FBSSxFQUFrQixlQUFNLEVBQXVCLGtCQUFXO0dBRi9FLGFBQWEsQ0F5RXpCO0FBekVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvbWVudVwiO1xyXG5pbXBvcnQgeyBEb21pY2lsaW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9vcGUvbWVudVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvb3BlL21lbnUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9tZW51LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG4gICAgZG9taWNpbGlvOiBEb21pY2lsaW87XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvID0gbmV3IERvbWljaWxpbygpO1xyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvLmlEb21pY2lsaW8gPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmRvbWljaWxpby5pUGVyc29uYSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuZG9taWNpbGlvLmlUaXBvUGVyc29uYSA9IFwiMVwiO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0FjY2lvbmVzIG8gcHJvY2Vzb3MgIFxyXG4gICAgZ3VhcmRhcigpIHtcclxuICAgICAgICB2YXIgYmFuZGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIC8vQ8OzZGlnbyBxdWUgY29uZGljaW9uYSBhbCB1c3VhcmlvIGEgaW5ncmVzYXIgbG9zIGRhdG9zIHF1ZSBzb24gb2JsaWdhdG9yaW9zIHBhcmEgZWwgcmVnaXN0cm8gZGUgbGEgZGlyZWNpw7NuXHJcbiAgICAgICAgLy92YWxpZGEgcXVlIGluZ3Jlc2UgQ1BcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWljaWxpby5jQ3ApO1xyXG4gICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jQ3AgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ3AgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIENvZGlnbyBQb3N0YWwgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVTZXJ2aWNlLnZhbGlkYWNwKHRoaXMuZG9taWNpbGlvLmNDcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIENvbG9uaWFcclxuICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0NvbG9uaWEgPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jQ29sb25pYSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgQ29sb25pYSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgQ2FsbGVcclxuICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0NhbGxlID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY0NhbGxlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuYSBDYWxsZSBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gTnVtZXJvIEV4dGVyaW9yXHJcbiAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNOdW1FeHRlcmlvciA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNOdW1FeHRlcmlvciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBOdW1lcm8gRXh0ZXJpb3IgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIE11bmljaXBpb1xyXG4gICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jTXVuaWNpcGlvID09IG51bGwgfHwgdGhpcy5kb21pY2lsaW8uY011bmljaXBpbyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBNdW5pY2lwaW8gcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuYSBDaXVkYWRcclxuICAgICAgICBpZiAodGhpcy5kb21pY2lsaW8uY0NpdWRhZCA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNDaXVkYWQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW5hIENpdWRhZCBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gRXN0YWRvXHJcbiAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmNFc3RhZG8gPT0gbnVsbCB8fCB0aGlzLmRvbWljaWxpby5jRXN0YWRvID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEVzdGFkbyBwb3IgZmF2b3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9WYWxpZGEgcXVlIHNlIGluZ3Jlc2UgdW4gUGFpc1xyXG4gICAgICAgIGlmICh0aGlzLmRvbWljaWxpby5jUGFpcyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmNQYWlzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIFBhaXMgcG9yIGZhdm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRhIHF1ZSBzZSBpbmdyZXNlIHVuIEFsaWFzXHJcbiAgICAgICAgaWYgKHRoaXMuZG9taWNpbGlvLmlBbGlhcyA9PSBudWxsIHx8IHRoaXMuZG9taWNpbGlvLmlBbGlhcyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICBiYW5kZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEFsaWFzIHBvciBmYXZvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIHRvZGFzIGxhcyB2YWxpZGFjaW9uZXMgc29uIGNvcnJlY3RhcyBwYXJhIGEgbGEgaW5zZXJjaW9uIGRlIGRhdG9zIFxyXG4gICAgICAgIHRoaXMubWVudVNlcnZpY2UucG9zdFF1b3RlKHRoaXMuZG9taWNpbGlvKTtcclxuXHJcbiAgICB9XHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL3VzdWFyaW9cIl0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==