"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var giro_1 = require("../../modelos/ct/giro");
var categorias_1 = require("../../servicios/ope/categorias");
var page_1 = require("ui/page");
var CategoriasComponent = (function () {
    function CategoriasComponent(page, categoriaService, router) {
        var _this = this;
        this.page = page;
        this.categoriaService = categoriaService;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.giro = new giro_1.Giro();
        this.categoriaService.getGiros().then(function (resolve) {
            _this.resultado = resolve;
            _this.resultado
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                _this.todoList = result.response.tt_ctGiro.tt_ctGiro;
            }, function (error) {
                JSON.stringify(error);
            });
        });
    }
    CategoriasComponent.prototype.back = function () {
        this.router.navigate(["sg/valida"]);
    };
    return CategoriasComponent;
}());
CategoriasComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [categorias_1.CategoriaService],
        templateUrl: "vistas/ope/categorias.html",
        styleUrls: ["vistas/css/categorias.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, categorias_1.CategoriaService, router_1.Router])
], CategoriasComponent);
exports.CategoriasComponent = CategoriasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmlhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3JpYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsMENBQXlDO0FBQ3pDLDhDQUE2QztBQUM3Qyw2REFBa0U7QUFFbEUsZ0NBQStCO0FBVy9CLElBQWEsbUJBQW1CO0lBSzlCLDZCQUFvQixJQUFVLEVBQVUsZ0JBQWtDLEVBQVUsTUFBYztRQUFsRyxpQkFpQkM7UUFqQm1CLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtRQUVsRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDbkMsVUFBQyxPQUFPO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsS0FBSSxDQUFDLFNBQVM7aUJBQ1gsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDZixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUV0RCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFDRCxrQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQztRQUM3QixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLENBQUM7cUNBTzBCLFdBQUksRUFBNEIsNkJBQWdCLEVBQWtCLGVBQU07R0FMdkYsbUJBQW1CLENBMEIvQjtBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR2lybyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcmlhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL2NhdGVnb3JpYXNcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IEZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbQ2F0ZWdvcmlhU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwidmlzdGFzL29wZS9jYXRlZ29yaWFzLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInZpc3Rhcy9jc3MvY2F0ZWdvcmlhcy5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWFzQ29tcG9uZW50IHtcclxuICBwdWJsaWMgdG9kb0xpc3Q6IGFueTtcclxuICBnaXJvOiBHaXJvO1xyXG4gIHJlc3VsdGFkbztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNhdGVnb3JpYVNlcnZpY2U6IENhdGVnb3JpYVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuXHJcbiAgICB0aGlzLmdpcm8gPSBuZXcgR2lybygpO1xyXG4gICAgdGhpcy5jYXRlZ29yaWFTZXJ2aWNlLmdldEdpcm9zKCkudGhlbihcclxuICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICB0aGlzLnJlc3VsdGFkbyA9IHJlc29sdmU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRhZG9cclxuICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0ID0gcmVzdWx0LnJlc3BvbnNlLnR0X2N0R2lyby50dF9jdEdpcm87XHJcblxyXG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuICBiYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvdmFsaWRhXCJdKTtcclxuICB9XHJcbn1cclxuIl19