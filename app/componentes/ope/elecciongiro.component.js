"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var eleccion_1 = require("../../servicios/ope/eleccion");
var EleccionComponent = (function () {
    function EleccionComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    EleccionComponent.prototype.registro = function () {
        this.router.navigate(["/sg/persona"]);
    };
    EleccionComponent.prototype.prov = function () {
        this.router.navigate(["/sg/proveedor"]);
    };
    EleccionComponent.prototype.painani = function () {
        this.router.navigate(["/sg/regvarios"]);
    };
    EleccionComponent.prototype.sup = function () {
        this.router.navigate(["/sg/regvarios"]);
    };
    EleccionComponent.prototype.direc = function () {
        this.router.navigate(["/sg/regvarios"]);
    };
    return EleccionComponent;
}());
EleccionComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [eleccion_1.EleccionService],
        templateUrl: "vistas/ope/eleccion.html",
        styleUrls: ["vistas/css/eleccion.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], EleccionComponent);
exports.EleccionComponent = EleccionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY2Npb25naXJvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZWNjaW9uZ2lyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQix5REFBNkQ7QUFTN0QsSUFBYSxpQkFBaUI7SUFDMUIsMkJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO0lBQ3RGLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCwrQkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxpQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBZSxDQUFDO1FBQzVCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGlCQUFpQixDQXFCN0I7QUFyQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0VsZWNjaW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvZWxlY2Npb25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbRWxlY2Npb25TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9vcGUvZWxlY2Npb24uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aXN0YXMvY3NzL2VsZWNjaW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWxlY2Npb25Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJvKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3BlcnNvbmFcIl0pO1xyXG4gICAgfVxyXG4gICAgcHJvdigpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9wcm92ZWVkb3JcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhaW5hbmkoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcmVndmFyaW9zXCJdKTtcclxuICAgIH1cclxuICAgIHN1cCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9yZWd2YXJpb3NcIl0pO1xyXG4gICAgfVxyXG4gICAgZGlyZWMoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcmVndmFyaW9zXCJdKTtcclxuICAgIH1cclxufSJdfQ==