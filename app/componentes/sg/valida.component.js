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
        this.router.navigate(["ope/carrito"]);
        if (this.cp == null || this.cp == "") {
            alert("Ingrese un Código Postal");
            return;
        }
        var result = this.validaService.getQuote(this.cp);
    };
    ValidaComponent.prototype.sesion = function () {
        this.router.navigate(["ope/carrito"]);
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
        templateUrl: "vistas/sg/valida.html",
        styleUrls: ["vistas/css/valida.css", "app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxvREFBMEQ7QUFDMUQsMENBQXlDO0FBRXpDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFFckMsNENBQTRDO0FBUzVDLElBQWEsZUFBZTtJQUcxQixhQUFhO0lBQ2IseUJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBeEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUg1RiwwQkFBMEI7UUFDMUIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsaUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLENBQUM7S0FDaEQsQ0FBQztJQUVGLG9DQUFvQzs7cUNBS1IsV0FBSSxFQUFrQixlQUFNLEVBQXlCLHNCQUFhO0dBSmpGLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZhbGlkYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3ZhbGlkYVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtWYWxpZGFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvdmFsaWRhLmNzc1wiLCBcImFwcC5jc3NcIl1cclxufSlcclxuXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hIFxyXG5leHBvcnQgY2xhc3MgVmFsaWRhQ29tcG9uZW50IHtcclxuICAvL0RlY2xhcmFjaW9uIGRlIHZhcmlhYmxlc1xyXG4gIGNwID0gXCJcIjtcclxuICAvL2NvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHZhbGlkYVNlcnZpY2U6IFZhbGlkYVNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcbiAgLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgdmFsaWRhcigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXJyaXRvXCJdKTtcclxuICAgIGlmICh0aGlzLmNwID09IG51bGwgfHwgdGhpcy5jcCA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1biBDw7NkaWdvIFBvc3RhbFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbGlkYVNlcnZpY2UuZ2V0UXVvdGUodGhpcy5jcCk7XHJcbiAgfVxyXG4gIHNlc2lvbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXJyaXRvXCJdKTtcclxuICB9XHJcbn0iXX0=