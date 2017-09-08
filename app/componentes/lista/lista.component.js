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
    ListaComponent.prototype.dir = function () {
        this.router.navigate(["/ope/dir"]);
    };
    ListaComponent.prototype.datos = function () {
        this.router.navigate(["/ope/datos"]);
    };
    ListaComponent.prototype.atributos = function () {
        this.router.navigate(["/ct/atributo"]);
    };
    ListaComponent.prototype.tarjeta = function () {
        this.router.navigate(["ope/tarjeta"]);
    };
    ListaComponent.prototype.detprod = function () {
        this.router.navigate(["ope/detprod"]);
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambio()\"></Button>\n    <Button text = \"Direccion\"    class=\"boton\" (tap)=\"dir()\"></Button>\n    <Button text = \"Datos\"        class=\"boton\" (tap)=\"datos()\"></Button>\n    <Button text = \"Act. Datos per\"        class=\"boton\" (tap)=\"actualizadatos()\"></Button>\n     <Button text = \"atributos\"        class=\"boton\" (tap)=\"atributos()\"></Button>\n     <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n     <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>   \n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQXlCekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVuQyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsZ0NBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsNEJBQUcsR0FBSDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDQSxpQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNBLCtCQUFNLEdBQU47UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDRCQUFHLEdBQUg7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNBLGtDQUFTLEdBQVQ7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNBLGdDQUFPLEdBQVA7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNBLGdDQUFPLEdBQVA7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxjQUFjO0lBdkIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGl2Q0FtQlQ7S0FDRixDQUFDO3FDQUc2QixlQUFNO0dBRnhCLGNBQWMsQ0F1RDFCO0FBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk3DqW51XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkdpcm9cIiAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJnaXJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ2YWxpZGFyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2F0ZWdvcmlhc1wiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhdCgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlVzdWFyaW9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ1c3VhcmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3RybygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNvbnRyYXNlw7FhXCIgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNvbnRyYXNlbmEoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYW1iaW8gZGUgQ29udHJhc2XDsWFcIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjYW1iaW8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJEaXJlY2Npb25cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkaXIoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJEYXRvc1wiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkYXRvcygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkFjdC4gRGF0b3MgcGVyXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImFjdHVhbGl6YWRhdG9zKClcIj48L0J1dHRvbj5cclxuICAgICA8QnV0dG9uIHRleHQgPSBcImF0cmlidXRvc1wiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJhdHJpYnV0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgIDxCdXR0b24gdGV4dCA9IFwidGFyamV0YVwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ0YXJqZXRhKClcIj48L0J1dHRvbj5cclxuICAgICA8QnV0dG9uIHRleHQgPSBcImRldGFsbGVwcm9kXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImRldHByb2QoKVwiPjwvQnV0dG9uPiAgIFxyXG4gICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RhQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xyXG5cclxuICB9XHJcbiAgZ2lybygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdC9naXJvXCJdKTtcclxuICAgIH1cclxuICBcclxuICB2YWxpZGFyKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3ZhbGlkYVwiXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICBjYXQoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICB9XHJcbiAgICB1c3VhcmlvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3VzdWFyaW9cIl0pO1xyXG4gICAgfVxyXG4gICAgIHJlZ2lzdHJvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3BlcnNvbmFcIl0pO1xyXG4gICAgfVxyXG4gICAgY29udHJhc2VuYSgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jb250cmFzZW5hXCJdKTtcclxuICAgIH1cclxuICAgICBjYW1iaW8oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY2FtYmlvXCJdKTtcclxuICAgIH1cclxuICAgIGRpcigpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvZGlyXCJdKTtcclxuICAgIH1cclxuICAgIGRhdG9zKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL29wZS9kYXRvc1wiXSk7XHJcbiAgICB9XHJcbiAgICAgYXRyaWJ1dG9zKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2F0cmlidXRvXCJdKTtcclxuICAgIH1cclxuICAgICB0YXJqZXRhKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL3RhcmpldGFcIl0pO1xyXG4gICAgfVxyXG4gICAgIGRldHByb2QoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvZGV0cHJvZFwiXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==