"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var categorias_1 = require("../../servicios/ope/categorias");
var page_1 = require("ui/page");
var TarjetaComponent = (function () {
    function TarjetaComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return TarjetaComponent;
}());
TarjetaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [categorias_1.CategoriaService],
        templateUrl: "vistas/ope/actualizaDatos.html",
        styleUrls: ["vistas/css/actualizaDatos.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], TarjetaComponent);
exports.TarjetaComponent = TarjetaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyamV0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXJqZXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFFekMsNkRBQWtFO0FBRWxFLGdDQUErQjtBQVcvQixJQUFhLGdCQUFnQjtJQUMzQiwwQkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDdEYsQ0FBQztJQUNELHVCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxnQkFBZ0I7SUFQNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDZCQUFnQixDQUFDO1FBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztxQ0FHMEIsV0FBSSxFQUFrQixlQUFNO0dBRDNDLGdCQUFnQixDQUk1QjtBQUpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9vcGUvY2F0ZWdvcmlhc1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgRnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtDYXRlZ29yaWFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL2FjdHVhbGl6YURhdG9zLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvYWN0dWFsaXphRGF0b3MuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFyamV0YUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbn1cclxufSJdfQ==