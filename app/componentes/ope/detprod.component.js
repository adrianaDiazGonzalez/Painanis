"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var categorias_1 = require("../../servicios/ope/categorias");
var page_1 = require("ui/page");
var pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];
var DetProductoComponent = (function () {
    function DetProductoComponent(page, router) {
        this.page = page;
        this.router = router;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
        this.pokemons = [];
        for (var i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
    }
    DetProductoComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        console.log("picker selection: " + picker.selectedIndex);
        this.picked = this.pokemons[picker.selectedIndex];
    };
    return DetProductoComponent;
}());
DetProductoComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [categorias_1.CategoriaService],
        templateUrl: "vistas/ope/detprod.html",
        styleUrls: ["vistas/css/detprod.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], DetProductoComponent);
exports.DetProductoComponent = DetProductoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0cHJvZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRwcm9kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFFekMsNkRBQWtFO0FBRWxFLGdDQUErQjtBQUsvQixJQUFJLFdBQVcsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTO0lBQzVFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBUy9FLElBQWEsb0JBQW9CO0lBUS9CLDhCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtRQUNsRixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDVCxDQUFDO0lBWE0sbURBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDNUIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFRSCwyQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksb0JBQW9CO0lBUGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQztRQUM3QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3RDLENBQUM7cUNBVTBCLFdBQUksRUFBa0IsZUFBTTtHQVIzQyxvQkFBb0IsQ0FlaEM7QUFmWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR2lybyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcmlhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvb3BlL2NhdGVnb3JpYXNcIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IEZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcblxyXG5sZXQgcG9rZW1vbkxpc3QgPSBbXCJCdWxiYXNhdXJcIiwgXCJQYXJhc2VjdFwiLCBcIlZlbm9uYXRcIiwgXCJWZW5vbW90aFwiLCBcIkRpZ2xldHRcIixcclxuXCJEdWd0cmlvXCIsIFwiTWVvd3RoXCIsIFwiUGVyc2lhblwiLCBcIlBzeWR1Y2tcIiwgXCJBcmNhbmluZVwiLCBcIlBvbGl3cmF0aFwiLCBcIk1hY2hva2VcIl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtDYXRlZ29yaWFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJ2aXN0YXMvb3BlL2RldHByb2QuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy9kZXRwcm9kLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERldFByb2R1Y3RvQ29tcG9uZW50IHtcclxuICBwdWJsaWMgcG9rZW1vbnM6IEFycmF5PHN0cmluZz47XHJcbiAgcHVibGljIHBpY2tlZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgY29uc29sZS5sb2coXCJwaWNrZXIgc2VsZWN0aW9uOiBcIiArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgdGhpcy5waWNrZWQgPSB0aGlzLnBva2Vtb25zW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7IC8vc2lydmUgcGFyYSBvY3VsdGFyIGxhIGJhcnJhIGRlIHRpdHVsbyBkZSBsYSB2ZW50YW5hXHJcbiAgICB0aGlzLnBva2Vtb25zID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBva2Vtb25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb2tlbW9ucy5wdXNoKHBva2Vtb25MaXN0W2ldKTtcclxuICAgICAgICAgIH1cclxuICB9XHJcbn0iXX0=