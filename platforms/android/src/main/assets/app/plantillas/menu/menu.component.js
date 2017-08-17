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
    MenuComponent.prototype.contrasena = function () {
        this.router.navigate(["/sg/contrasena"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"contrasena()\"></Button>\n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFrQnpDLElBQWEsYUFBYTtJQUV4Qix1QkFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbkMsQ0FBQztJQUNELDRCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVILCtCQUFPLEdBQVA7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVILDJCQUFHLEdBQUg7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0EsZ0NBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsa0NBQVUsR0FBVjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksYUFBYTtJQWhCekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSwyb0JBWVQ7S0FDRixDQUFDO3FDQUc2QixlQUFNO0dBRnhCLGFBQWEsQ0ErQnpCO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk3DqW51XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkdpcm9cIiAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJnaXJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ2YWxpZGFyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2F0ZWdvcmlhc1wiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhdCgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlVzdWFyaW9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ1c3VhcmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3RybygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhbWJpbyBkZSBDb250cmFzZcOxYVwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNvbnRyYXNlbmEoKVwiPjwvQnV0dG9uPlxyXG4gICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG4gIH1cclxuICBnaXJvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2dpcm9cIl0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHZhbGlkYXIoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICAgIH1cclxuICAgIFxyXG4gIGNhdCgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICAgIH1cclxuICAgIHVzdWFyaW8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdXN1YXJpb1wiXSk7XHJcbiAgICB9XHJcbiAgICAgcmVnaXN0cm8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcGVyc29uYVwiXSk7XHJcbiAgICB9XHJcbiAgICBjb250cmFzZW5hKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL2NvbnRyYXNlbmFcIl0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==