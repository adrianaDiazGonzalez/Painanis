"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var valida_1 = require("../../servicios/sg/valida");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    function ValidaComponent(page, router, validaService) {
        this.page = page;
        this.router = router;
        this.validaService = validaService;
        this.cp = "";
        page.actionBarHidden = true;
    }
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
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUEwRDtBQUMxRCwwQ0FBeUM7QUFFekMsaUNBQStCO0FBQy9CLHVDQUFxQztBQUdyQyw0Q0FBNEM7QUFTNUMsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFTLGFBQTRCO1FBQXZFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFEM0YsT0FBRSxHQUFDLEVBQUUsQ0FBQztRQUdKLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBRyxFQUFFLENBQUMsQ0FDakMsQ0FBQztZQUNDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFFRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxlQUFlO0lBUjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxzQkFBYSxDQUFDO1FBQzFCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUUsMkJBQTJCLEVBQUMsU0FBUyxDQUFDO0tBQ3BELENBQUM7cUNBSzBCLFdBQUksRUFBa0IsZUFBTSxFQUF3QixzQkFBYTtHQUZoRixlQUFlLENBcUIzQjtBQXJCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy92YWxpZGFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCIsXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgY3A9XCJcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSB2YWxpZGFTZXJ2aWNlOiBWYWxpZGFTZXJ2aWNlKVxyXG4gIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgIFxyXG4gIH1cclxuICBcclxuICB2YWxpZGFyKClcclxuICB7XHJcbiAgICBpZih0aGlzLmNwID09IG51bGwgfHwgdGhpcy5jcCA9PVwiXCIpXHJcbiAgICAgIHtcclxuICAgICAgICBhbGVydChcIkluZ3Jlc2UgdW4gQ8OzZGlnbyBQb3N0YWxcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IFxyXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWxpZGFTZXJ2aWNlLmdldFF1b3RlKHRoaXMuY3ApO1xyXG4gIH1cclxuICBcclxuICBzZXNpb24oKVxyXG4gIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy91c3VhcmlvXCJdKTtcclxuICB9XHJcbn1cclxuIl19