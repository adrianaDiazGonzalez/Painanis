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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY2Npb25naXJvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZWNjaW9uZ2lyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQix5REFBNkQ7QUFTN0QsSUFBYSxpQkFBaUI7SUFDMUIsMkJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO0lBQ3RGLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBZSxDQUFDO1FBQzVCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FFNEIsV0FBSSxFQUFrQixlQUFNO0dBRDdDLGlCQUFpQixDQUk3QjtBQUpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtFbGVjY2lvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL2VsZWNjaW9uXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW0VsZWNjaW9uU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL2VsZWNjaW9uLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy9lbGVjY2lvbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVsZWNjaW9uQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgIH1cclxufSJdfQ==