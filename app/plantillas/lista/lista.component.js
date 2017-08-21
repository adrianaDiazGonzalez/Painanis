"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ListaComponent = (function () {
    function ListaComponent(router) {
        this.router = router;
    }
    ListaComponent.prototype.giro = function () {
        this.router.navigate(["/ct/giro"]);
    };
    ListaComponent.prototype.validar = function () {
        this.router.navigate(["/sg/valida"]);
    };
    ListaComponent.prototype.cat = function () {
        this.router.navigate(["/ope/categoria"]);
    };
    ListaComponent.prototype.usuario = function () {
        this.router.navigate(["/sg/usuario"]);
    };
    ListaComponent.prototype.registro = function () {
        this.router.navigate(["/sg/persona"]);
    };
    ListaComponent.prototype.contrasena = function () {
        this.router.navigate(["/sg/contrasena"]);
    };
    ListaComponent.prototype.cambio = function () {
        this.router.navigate(["/sg/cambio"]);
    };
    ListaComponent.prototype.menu = function () {
        this.router.navigate(["/ope/menu"]);
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambio()\"></Button>\n    <Button text = \"Menu\"        class=\"boton\" (tap)=\"menu()\"></Button>\n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQW9CekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVuQyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsZ0NBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsNEJBQUcsR0FBSDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDQSxpQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNBLCtCQUFNLEdBQU47UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDZCQUFJLEdBQUo7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxjQUFjO0lBbEIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGd6QkFjVDtLQUNGLENBQUM7cUNBRzZCLGVBQU07R0FGeEIsY0FBYyxDQXVDMUI7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxTY3JvbGxWaWV3PlxyXG4gICA8U3RhY2tMYXlvdXQ+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTcOpbnVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiR2lyb1wiICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImdpcm8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJWYWxpZGFyXCIgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInZhbGlkYXIoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYXRlZ29yaWFzXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2F0KClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVXN1YXJpb1wiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInVzdWFyaW8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZWdpc3Ryb1wiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInJlZ2lzdHJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ29udHJhc2XDsWFcIiAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY29udHJhc2VuYSgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhbWJpbyBkZSBDb250cmFzZcOxYVwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhbWJpbygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIk1lbnVcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwibWVudSgpXCI+PC9CdXR0b24+XHJcbiAgICAgPC9TdGFja0xheW91dD5cclxuICA8L1Njcm9sbFZpZXc+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGFDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG4gIH1cclxuICBnaXJvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2dpcm9cIl0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHZhbGlkYXIoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICAgIH1cclxuICAgIFxyXG4gIGNhdCgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICAgIH1cclxuICAgIHVzdWFyaW8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdXN1YXJpb1wiXSk7XHJcbiAgICB9XHJcbiAgICAgcmVnaXN0cm8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcGVyc29uYVwiXSk7XHJcbiAgICB9XHJcbiAgICBjb250cmFzZW5hKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL2NvbnRyYXNlbmFcIl0pO1xyXG4gICAgfVxyXG4gICAgIGNhbWJpbygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jYW1iaW9cIl0pO1xyXG4gICAgfVxyXG4gICAgbWVudSgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvbWVudVwiXSk7XHJcbiAgICB9XHJcbn1cclxuIl19