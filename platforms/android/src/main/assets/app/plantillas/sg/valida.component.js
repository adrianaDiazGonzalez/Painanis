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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxvREFBMEQ7QUFDMUQsMENBQXlDO0FBRXpDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFFckMsNENBQTRDO0FBUzVDLElBQWEsZUFBZTtJQUcxQixhQUFhO0lBQ2IseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBeEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUg1RiwwQkFBMEI7UUFDMUIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsaUNBQU8sR0FBUDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZUFBZTtJQVIzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsc0JBQWEsQ0FBQztRQUMxQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQztLQUNwRCxDQUFDO0lBRUYsb0NBQW9DOztxQ0FLUixXQUFJLEVBQWtCLGVBQU0sRUFBeUIsc0JBQWE7R0FKakYsZUFBZSxDQWtCM0I7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdmFsaWRhXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3ZhbGlkYS5jc3NcIiwgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG4vL0FjY2lvbmVzIHkgcHJvY2Vzb3MgZGUgbGEgdmVudGFuYSBcclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgLy9EZWNsYXJhY2lvbiBkZSB2YXJpYWJsZXNcclxuICBjcCA9IFwiXCI7XHJcbiAgLy9jb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB2YWxpZGFTZXJ2aWNlOiBWYWxpZGFTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG4gIC8vQWNjaW9uZXMgbyBwcm9jZXNvc1xyXG4gIHZhbGlkYXIoKSB7XHJcbiAgICBpZiAodGhpcy5jcCA9PSBudWxsIHx8IHRoaXMuY3AgPT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQ8OzZGlnbyBQb3N0YWxcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbGlkYVNlcnZpY2UuZ2V0UXVvdGUodGhpcy5jcCk7XHJcbiAgfVxyXG4gIHNlc2lvbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNnL3VzdWFyaW9cIl0pO1xyXG4gIH1cclxufVxyXG4iXX0=