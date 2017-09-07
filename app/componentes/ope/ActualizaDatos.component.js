"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var categorias_1 = require("../../servicios/ope/categorias");
var page_1 = require("ui/page");
var ActualizaDatosComponent = (function () {
    function ActualizaDatosComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return ActualizaDatosComponent;
}());
ActualizaDatosComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [categorias_1.CategoriaService],
        templateUrl: "vistas/ope/actualizaDatos.html",
        styleUrls: ["vistas/css/actualizaDatos.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], ActualizaDatosComponent);
exports.ActualizaDatosComponent = ActualizaDatosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0dWFsaXphRGF0b3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWN0dWFsaXphRGF0b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLDBDQUF5QztBQUV6Qyw2REFBa0U7QUFFbEUsZ0NBQStCO0FBVy9CLElBQWEsdUJBQXVCO0lBQ2xDLGlDQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtJQUN0RixDQUFDO0lBQ0QsOEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHVCQUF1QjtJQVBuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNkJBQWdCLENBQUM7UUFDN0IsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO3FDQUcwQixXQUFJLEVBQWtCLGVBQU07R0FEM0MsdUJBQXVCLENBSW5DO0FBSlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdpcm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9jdC9naXJvXCI7XHJcbmltcG9ydCB7IENhdGVnb3JpYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL29wZS9jYXRlZ29yaWFzXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCBGcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW0NhdGVnb3JpYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9vcGUvYWN0dWFsaXphRGF0b3MuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy9hY3R1YWxpemFEYXRvcy5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3R1YWxpemFEYXRvc0NvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbn1cclxufSJdfQ==