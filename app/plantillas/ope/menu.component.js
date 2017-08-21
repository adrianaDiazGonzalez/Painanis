"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_1 = require("../../servicios/ope/menu");
var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.back = function () {
        this.router.navigate(["sg/usuario"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [menu_1.MenuService],
        templateUrl: "plantillas/ope/menu.html",
        styleUrls: ["plantillas/css/menu.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFHekMsaURBQXVEO0FBV3ZELElBQWEsYUFBYTtJQUN0Qix1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxrQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FHOEIsZUFBTTtHQUR6QixhQUFhLENBUXpCO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL29wZS9tZW51XCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNZW51U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL29wZS9tZW51Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvbWVudS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZy91c3VhcmlvXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=