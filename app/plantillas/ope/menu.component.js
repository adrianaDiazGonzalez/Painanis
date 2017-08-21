"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var menu_1 = require("../../servicios/ope/menu");
var router_1 = require("@angular/router");
//Declaración de los componentes de la vista
var MenuComponent = (function () {
    function MenuComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [menu_1.MenuService],
        templateUrl: "plantillas/ope/men.html",
        styleUrls: ["../css/men.css", "../../app.css"]
    })
    //Acciones y procesos de la ventana 
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLGlEQUFzRDtBQUN0RCwwQ0FBeUM7QUFFekMsNENBQTRDO0FBUTVDLElBQWEsYUFBYTtJQUN0Qix1QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDMUQsQ0FBQztJQUNELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxrQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0tBQ2pELENBQUM7SUFDRixvQ0FBb0M7O3FDQUVOLFdBQUksRUFBa0IsZUFBTTtHQUQ3QyxhQUFhLENBR3pCO0FBSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWVudVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL21lbnVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtNZW51U2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL29wZS9tZW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9jc3MvbWVuLmNzc1wiLCBcIi4uLy4uL2FwcC5jc3NcIl1cclxufSlcclxuLy9BY2Npb25lcyB5IHByb2Nlc29zIGRlIGxhIHZlbnRhbmEgXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG59XHJcbn1cclxuIl19