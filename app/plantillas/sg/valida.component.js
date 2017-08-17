"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var valida_1 = require("../../servicios/sg/valida");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    //constructor
    function ValidaComponent(page, router, validaService) {
        this.page = page;
        this.router = router;
        this.validaService = validaService;
        //Declaracion de variables
        this.cp = "";
        page.actionBarHidden = true;
    }
    //Acciones o procesos
    ValidaComponent.prototype.validar = function () {
        if (this.cp == null || this.cp == "") {
            alert("Ingrese un Código Postal");
            return;
        }
        var result = this.validaService.getQuote(this.cp);
    };
    ValidaComponent.prototype.sesion = function () {
        this.router.navigate(["sg/usuario"]);
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
        templateUrl: "plantillas/sg/valida.html",
        styleUrls: ["plantillas/css/valida.css", "app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxvREFBMEQ7QUFDMUQsMENBQXlDO0FBRXpDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFFckMsNENBQTRDO0FBUzVDLElBQWEsZUFBZTtJQUd6QixhQUFhO0lBQ2QseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVMsYUFBNEI7UUFBdkUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUgzRiwwQkFBMEI7UUFDMUIsT0FBRSxHQUFDLEVBQUUsQ0FBQztRQUlKLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsaUNBQU8sR0FBUDtRQUVFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUcsRUFBRSxDQUFDLENBQ2pDLENBQUM7WUFDQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBRUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksZUFBZTtJQVIzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsc0JBQWEsQ0FBQztRQUMxQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFFLDJCQUEyQixFQUFDLFNBQVMsQ0FBQztLQUNwRCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FLUixXQUFJLEVBQWtCLGVBQU0sRUFBd0Isc0JBQWE7R0FKaEYsZUFBZSxDQXNCM0I7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdmFsaWRhXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCIsXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZXNcclxuICBjcD1cIlwiO1xyXG4gICAvL2NvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgdmFsaWRhU2VydmljZTogVmFsaWRhU2VydmljZSlcclxuICB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7ICBcclxuICB9XHJcbiAgLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgdmFsaWRhcigpXHJcbiAge1xyXG4gICAgaWYodGhpcy5jcCA9PSBudWxsIHx8IHRoaXMuY3AgPT1cIlwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEPDs2RpZ28gUG9zdGFsXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBcclxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKTtcclxuICB9XHJcbiAgc2VzaW9uKClcclxuICB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvdXN1YXJpb1wiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==