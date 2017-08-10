"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.giro = function () {
        this.router.navigate(["/ct/giro"]);
    };
    MenuComponent.prototype.validar = function () {
        this.router.navigate(["/sg/valida"]);
    };
    MenuComponent.prototype.cat = function () {
        this.router.navigate(["/ope/categoria"]);
    };
    MenuComponent.prototype.usuario = function () {
        this.router.navigate(["/sg/usuario"]);
    };
    MenuComponent.prototype.registro = function () {
        this.router.navigate(["/sg/persona"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFpQnpDLElBQWEsYUFBYTtJQUV4Qix1QkFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbkMsQ0FBQztJQUNELDRCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVILCtCQUFPLEdBQVA7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVILDJCQUFHLEdBQUg7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0EsZ0NBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGFBQWE7SUFmekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxxaUJBV1Q7S0FDRixDQUFDO3FDQUc2QixlQUFNO0dBRnhCLGFBQWEsQ0EyQnpCO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk3DqW51XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkdpcm9cIiAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJnaXJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ2YWxpZGFyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2F0ZWdvcmlhc1wiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhdCgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlVzdWFyaW9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ1c3VhcmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3RybygpXCI+PC9CdXR0b24+XHJcbiAgICAgPC9TdGFja0xheW91dD5cclxuICA8L1Njcm9sbFZpZXc+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuXHJcbiAgfVxyXG4gIGdpcm8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3QvZ2lyb1wiXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgdmFsaWRhcigpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy92YWxpZGFcIl0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgY2F0KClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL29wZS9jYXRlZ29yaWFcIl0pO1xyXG4gICAgfVxyXG4gICAgdXN1YXJpbygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy91c3VhcmlvXCJdKTtcclxuICAgIH1cclxuICAgICByZWdpc3RybygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9wZXJzb25hXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=