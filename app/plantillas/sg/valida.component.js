"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var valida_1 = require("../../servicios/sg/valida");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    function ValidaComponent(router, validaService) {
        this.router = router;
        this.validaService = validaService;
        this.cp = "";
    }
    ValidaComponent.prototype.validar = function () {
        if (this.cp == null || this.cp == "") {
            alert("Ingrese un Código Postal");
            return;
        }
        var result = this.validaService.getQuote(this.cp);
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
        templateUrl: "plantillas/sg/valida.html",
        styleUrls: ["plantillas/css/valida.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBQzFELDBDQUF5QztBQUV6QyxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBR3JDLDRDQUE0QztBQVM1QyxJQUFhLGVBQWU7SUFFMUIseUJBQW9CLE1BQWMsRUFBUyxhQUE0QjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFEdkUsT0FBRSxHQUFDLEVBQUUsQ0FBQztJQUVOLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBRyxFQUFFLENBQUMsQ0FDakMsQ0FBQztZQUNDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxlQUFlO0lBUjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxzQkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUUsMkJBQTJCLENBQUM7S0FDMUMsQ0FBQztxQ0FLNEIsZUFBTSxFQUF3QixzQkFBYTtHQUY1RCxlQUFlLENBYzNCO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy92YWxpZGFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgY3A9XCJcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgdmFsaWRhU2VydmljZTogVmFsaWRhU2VydmljZSl7ICBcclxuICB9XHJcbiAgXHJcbiAgdmFsaWRhcigpXHJcbiAge1xyXG4gICAgaWYodGhpcy5jcCA9PSBudWxsIHx8IHRoaXMuY3AgPT1cIlwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEPDs2RpZ28gUG9zdGFsXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBcclxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKTtcclxuICB9XHJcbn1cclxuIl19