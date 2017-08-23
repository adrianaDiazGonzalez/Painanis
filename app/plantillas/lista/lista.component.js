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
    ListaComponent.prototype.datos = function () {
        this.router.navigate(["/ope/datos"]);
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambio()\"></Button>\n    <Button text = \"Menu\"        class=\"boton\" (tap)=\"menu()\"></Button>\n    <Button text = \"Datos\"       class=\"boton\" (tap)=\"datos()\"></Button>\n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQXFCekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVuQyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsZ0NBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsNEJBQUcsR0FBSDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDQSxpQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNBLCtCQUFNLEdBQU47UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDZCQUFJLEdBQUo7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSxjQUFjO0lBbkIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGc0QkFlVDtLQUNGLENBQUM7cUNBRzZCLGVBQU07R0FGeEIsY0FBYyxDQTJDMUI7QUEzQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxTY3JvbGxWaWV3PlxyXG4gICA8U3RhY2tMYXlvdXQ+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTcOpbnVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiR2lyb1wiICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImdpcm8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJWYWxpZGFyXCIgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInZhbGlkYXIoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYXRlZ29yaWFzXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2F0KClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVXN1YXJpb1wiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInVzdWFyaW8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZWdpc3Ryb1wiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInJlZ2lzdHJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ29udHJhc2XDsWFcIiAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY29udHJhc2VuYSgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhbWJpbyBkZSBDb250cmFzZcOxYVwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhbWJpbygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIk1lbnVcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwibWVudSgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkRhdG9zXCIgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZGF0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RhQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xyXG5cclxuICB9XHJcbiAgZ2lybygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdC9naXJvXCJdKTtcclxuICAgIH1cclxuICBcclxuICB2YWxpZGFyKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3ZhbGlkYVwiXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICBjYXQoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICB9XHJcbiAgICB1c3VhcmlvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3VzdWFyaW9cIl0pO1xyXG4gICAgfVxyXG4gICAgIHJlZ2lzdHJvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3BlcnNvbmFcIl0pO1xyXG4gICAgfVxyXG4gICAgY29udHJhc2VuYSgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jb250cmFzZW5hXCJdKTtcclxuICAgIH1cclxuICAgICBjYW1iaW8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY2FtYmlvXCJdKTtcclxuICAgIH1cclxuICAgIG1lbnUoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL21lbnVcIl0pO1xyXG4gICAgfVxyXG4gICAgZGF0b3MoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2RhdG9zXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=