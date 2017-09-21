"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var regvarios_1 = require("../../servicios/sg/regvarios");
var RegvariosComponent = (function () {
    function RegvariosComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return RegvariosComponent;
}());
RegvariosComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [regvarios_1.RegvariosService],
        templateUrl: "vistas/ope/regvarios.html",
        styleUrls: ["vistas/css/regvarios.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], RegvariosComponent);
exports.RegvariosComponent = RegvariosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVndmFyaW9zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ3Zhcmlvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBRXpDLGdDQUErQjtBQUMvQiwwREFBOEQ7QUFTOUQsSUFBYSxrQkFBa0I7SUFDM0IsNEJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO0lBQ3RGLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw0QkFBZ0IsQ0FBQztRQUM3QixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQzFDLENBQUM7cUNBRTRCLFdBQUksRUFBa0IsZUFBTTtHQUQ3QyxrQkFBa0IsQ0FJOUI7QUFKWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7UmVndmFyaW9zU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9yZWd2YXJpb3NcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVndmFyaW9zU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL3JlZ3Zhcmlvcy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvcmVndmFyaW9zLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVndmFyaW9zQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICAgIH1cclxufSJdfQ==