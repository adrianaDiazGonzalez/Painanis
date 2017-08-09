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
        var _this = this;
        if (this.cp == null || this.cp == "") {
            alert("Ingrese un Código Postal");
            return;
        }
        //var result = this.validaService.getQuote(this.cp);
        console.log("vista", this.validaService.getQuote(this.cp)
            .then(function (cp) {
            _this.cp = _this.cp;
        }));
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
    __metadata("design:paramtypes", [router_1.Router,
        valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBQzFELDBDQUF5QztBQUV6QyxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBR3JDLDRDQUE0QztBQVM1QyxJQUFhLGVBQWU7SUFFMUIseUJBQW9CLE1BQWMsRUFDeEIsYUFBNEI7UUFEbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUZ0QyxPQUFFLEdBQUMsRUFBRSxDQUFDO0lBR04sQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFBQSxpQkFtQkU7UUFqQkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBRyxFQUFFLENBQUMsQ0FDbEMsQ0FBQztZQUNBLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFDRCxvREFBb0Q7UUFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNwRCxJQUFJLENBRUgsVUFBQyxFQUFFO1lBQ0QsS0FBSSxDQUFDLEVBQUUsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDO1FBRXBCLENBQUMsQ0FDRixDQUVKLENBQUE7SUFDSixDQUFDO0lBQ0osc0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBQztLQUMxQyxDQUFDO3FDQUs0QixlQUFNO1FBQ1Qsc0JBQWE7R0FIM0IsZUFBZSxDQTBCM0I7QUExQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy92YWxpZGFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgY3A9XCJcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB2YWxpZGFTZXJ2aWNlOiBWYWxpZGFTZXJ2aWNlKXsgIFxyXG4gIH1cclxuICBcclxuICB2YWxpZGFyKClcclxuICB7XHJcbiAgICAgaWYodGhpcy5jcCA9PSBudWxsIHx8IHRoaXMuY3AgPT1cIlwiKVxyXG4gICAgICB7XHJcbiAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQ8OzZGlnbyBQb3N0YWxcIik7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICAgIH0gXHJcbiAgICAgIC8vdmFyIHJlc3VsdCA9IHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwidmlzdGFcIiwgdGhpcy52YWxpZGFTZXJ2aWNlLmdldFF1b3RlKHRoaXMuY3ApXHJcbiAgICAgICAgICAudGhlblxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICAoY3ApPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY3AgPSB0aGlzLmNwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgXHJcbiAgICAgIClcclxuICAgfVxyXG59XHJcbiJdfQ==