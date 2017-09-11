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
    //Adriana
    ListaComponent.prototype.datos = function () {
        this.router.navigate(["/ope/datos"]);
    };
    ListaComponent.prototype.actualizadatos = function () {
        this.router.navigate(["/ope/actDatPer"]);
    };
    ListaComponent.prototype.actualizadir = function () {
        this.router.navigate(["/ope/actdir"]);
    };
    //edgar
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
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambio()\"></Button>\n    <Button text = \"Direccion\"    class=\"boton\" (tap)=\"dir()\"></Button>\n    <Button text = \"M\u00E9nu\"        class=\"boton\" (tap)=\"datos()\"></Button>\n    <Button text = \"Act. Datos per\"    class=\"boton\" (tap)=\"actualizadatos()\"></Button>\n    <Button text = \"Act. Dir\"    class=\"boton\" (tap)=\"actualizadir()\"></Button>\n    <Button text = \"atributos\"        class=\"boton\" (tap)=\"atributos()\"></Button>\n     <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n     <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>   \n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQTBCekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDRCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7SUFDVCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU1BLE9BQU87SUFDUixrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksY0FBYztJQXhCMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSx1MENBb0JUO0tBQ0YsQ0FBQztxQ0FHNEIsZUFBTTtHQUZ2QixjQUFjLENBeUQxQjtBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPFNjcm9sbFZpZXc+XHJcbiAgIDxTdGFja0xheW91dD5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNw6ludVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJHaXJvXCIgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZ2lybygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlZhbGlkYXJcIiAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwidmFsaWRhcigpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhdGVnb3JpYXNcIiBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjYXQoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJVc3VhcmlvXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwidXN1YXJpbygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlJlZ2lzdHJvXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwicmVnaXN0cm8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDb250cmFzZcOxYVwiICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjb250cmFzZW5hKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2FtYmlvIGRlIENvbnRyYXNlw7FhXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2FtYmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiRGlyZWNjaW9uXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZGlyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiTcOpbnVcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZGF0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJBY3QuIERhdG9zIHBlclwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImFjdHVhbGl6YWRhdG9zKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQWN0LiBEaXJcIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJhY3R1YWxpemFkaXIoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJhdHJpYnV0b3NcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiYXRyaWJ1dG9zKClcIj48L0J1dHRvbj5cclxuICAgICA8QnV0dG9uIHRleHQgPSBcInRhcmpldGFcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwidGFyamV0YSgpXCI+PC9CdXR0b24+XHJcbiAgICAgPEJ1dHRvbiB0ZXh0ID0gXCJkZXRhbGxlcHJvZFwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkZXRwcm9kKClcIj48L0J1dHRvbj4gICBcclxuICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvU2Nyb2xsVmlldz5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG4gIGdpcm8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3QvZ2lyb1wiXSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGFyKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3ZhbGlkYVwiXSk7XHJcbiAgfVxyXG5cclxuICBjYXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgfVxyXG4gIHVzdWFyaW8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdXN1YXJpb1wiXSk7XHJcbiAgfVxyXG4gIHJlZ2lzdHJvKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3BlcnNvbmFcIl0pO1xyXG4gIH1cclxuICBjb250cmFzZW5hKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL2NvbnRyYXNlbmFcIl0pO1xyXG4gIH1cclxuICBjYW1iaW8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY2FtYmlvXCJdKTtcclxuICB9XHJcbiAgZGlyKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL29wZS9kaXJcIl0pO1xyXG4gIH1cclxuICBcclxuICAvL0FkcmlhbmFcclxuICBkYXRvcygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvZGF0b3NcIl0pO1xyXG4gIH1cclxuICBhY3R1YWxpemFkYXRvcygpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdERhdFBlclwiXSk7XHJcbiAgfVxyXG4gIGFjdHVhbGl6YWRpcigpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdGRpclwiXSk7XHJcbiAgfSBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAvL2VkZ2FyXHJcbiAgYXRyaWJ1dG9zKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2F0cmlidXRvXCJdKTtcclxuICB9XHJcbiAgdGFyamV0YSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS90YXJqZXRhXCJdKTtcclxuICB9XHJcbiAgZGV0cHJvZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9kZXRwcm9kXCJdKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==