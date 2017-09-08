"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var categorias_1 = require("../../servicios/ope/categorias");
var page_1 = require("ui/page");
var DetProductoComponent = (function () {
    function DetProductoComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return DetProductoComponent;
}());
DetProductoComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [categorias_1.CategoriaService],
        templateUrl: "vistas/ope/actualizaDatos.html",
        styleUrls: ["vistas/css/actualizaDatos.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], DetProductoComponent);
exports.DetProductoComponent = DetProductoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0cHJvZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRwcm9kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFFekMsNkRBQWtFO0FBRWxFLGdDQUErQjtBQVcvQixJQUFhLG9CQUFvQjtJQUMvQiw4QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDdEYsQ0FBQztJQUNELDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxvQkFBb0I7SUFQaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDZCQUFnQixDQUFDO1FBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FHMEIsV0FBSSxFQUFrQixlQUFNO0dBRDNDLG9CQUFvQixDQUloQztBQUpZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvY2F0ZWdvcmlhc1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgRnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtDYXRlZ29yaWFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL2FjdHVhbGl6YURhdG9zLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvYWN0dWFsaXphRGF0b3MuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0UHJvZHVjdG9Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG59XHJcbn0iXX0=