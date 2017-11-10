"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var carrito_1 = require("../../servicios/ope/carrito");
var CarritoComponent = (function () {
    function CarritoComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return CarritoComponent;
}());
CarritoComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [carrito_1.CarritoService],
        templateUrl: "vistas/ope/carrito.html",
        styleUrls: ["vistas/css/carrito.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], CarritoComponent);
exports.CarritoComponent = CarritoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycml0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnJpdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQix1REFBNEQ7QUFXNUQsSUFBYSxnQkFBZ0I7SUFDekIsMEJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO0lBQ3RGLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyx3QkFBYyxDQUFDO1FBQzNCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDeEMsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGdCQUFnQixDQUk1QjtBQUpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ2Fycml0b1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL29wZS9jYXJyaXRvXCJcclxuaW1wb3J0IHsgRGlyZWNjaW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL2RpcmVjY2lvblwiO1xyXG5pbXBvcnQgeyBEb21pY2lsaW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9vcGUvZGlyZWNjaW9uTVwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW0NhcnJpdG9TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9vcGUvY2Fycml0by5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvY2Fycml0by5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnJpdG9Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gICAgfVxyXG59Il19