"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var datos_1 = require("../../servicios/ope/datos");
var DatosComponent = (function () {
    function DatosComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return DatosComponent;
}());
DatosComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [datos_1.DatosService],
        templateUrl: "plantillas/ope/datos.html",
        styleUrls: ["plantillas/css/datos.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], DatosComponent);
exports.DatosComponent = DatosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFDL0IsbURBQXlEO0FBVXpELElBQWEsY0FBYztJQUN0Qix3QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDdEYsQ0FBQztJQUNELHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxvQkFBWSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDMUMsQ0FBQztxQ0FFNkIsV0FBSSxFQUFrQixlQUFNO0dBRDlDLGNBQWMsQ0FJMUI7QUFKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0b3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvZGF0b3NcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW0RhdG9zU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL29wZS9kYXRvcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL2RhdG9zLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0b3NDb21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG59XHJcbn0iXX0=