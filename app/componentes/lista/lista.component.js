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
    ListaComponent.prototype.evaluacion = function () {
        this.router.navigate(["ope/evaluacion"]);
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Registro\"    class=\"boton\" (tap)=\"registro()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambio()\"></Button>\n    <Button text = \"Direccion\"    class=\"boton\" (tap)=\"dir()\"></Button>\n    <Button text = \"M\u00E9nu\"        class=\"boton\" (tap)=\"datos()\"></Button>\n    <Button text = \"Act. Datos per\"    class=\"boton\" (tap)=\"actualizadatos()\"></Button>\n    <Button text = \"Act. Dir\"    class=\"boton\" (tap)=\"actualizadir()\"></Button>\n    <Button text = \"atributos\"        class=\"boton\" (tap)=\"atributos()\"></Button>\n    <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n    <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>\n    <Button text = \" Evaluacion \"        class=\"boton\" (tap)=\"evaluacion()\"></Button>\n        \n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQStCekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELDRCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7SUFDVCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVBLE9BQU87SUFDUixrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxjQUFjO0lBMUIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLHk2Q0FzQlQ7S0FDRixDQUFDO3FDQUc0QixlQUFNO0dBRnZCLGNBQWMsQ0F3RDFCO0FBeERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IEZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk3DqW51XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkdpcm9cIiAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJnaXJvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ2YWxpZGFyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2F0ZWdvcmlhc1wiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhdCgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlVzdWFyaW9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ1c3VhcmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3RybygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNvbnRyYXNlw7FhXCIgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNvbnRyYXNlbmEoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYW1iaW8gZGUgQ29udHJhc2XDsWFcIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjYW1iaW8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJEaXJlY2Npb25cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkaXIoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJNw6ludVwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkYXRvcygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkFjdC4gRGF0b3MgcGVyXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiYWN0dWFsaXphZGF0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJBY3QuIERpclwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImFjdHVhbGl6YWRpcigpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcImF0cmlidXRvc1wiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJhdHJpYnV0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJ0YXJqZXRhXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInRhcmpldGEoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJkZXRhbGxlcHJvZFwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkZXRwcm9kKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiIEV2YWx1YWNpb24gXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImV2YWx1YWNpb24oKVwiPjwvQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RhQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICB9XHJcbiAgZ2lybygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdC9naXJvXCJdKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXIoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICB9XHJcblxyXG4gIGNhdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICB9XHJcbiAgdXN1YXJpbygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy91c3VhcmlvXCJdKTtcclxuICB9XHJcbiAgcmVnaXN0cm8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcGVyc29uYVwiXSk7XHJcbiAgfVxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY29udHJhc2VuYVwiXSk7XHJcbiAgfVxyXG4gIGNhbWJpbygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jYW1iaW9cIl0pO1xyXG4gIH1cclxuICBkaXIoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2RpclwiXSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vQWRyaWFuYVxyXG4gIGRhdG9zKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL29wZS9kYXRvc1wiXSk7XHJcbiAgfVxyXG4gIGFjdHVhbGl6YWRhdG9zKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvYWN0RGF0UGVyXCJdKTtcclxuICB9XHJcbiAgYWN0dWFsaXphZGlyKCkge1xyXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvYWN0ZGlyXCJdKTtcclxuICB9IFxyXG5cclxuICAgLy9lZGdhclxyXG4gIGF0cmlidXRvcygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdC9hdHJpYnV0b1wiXSk7XHJcbiAgfVxyXG4gIHRhcmpldGEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvdGFyamV0YVwiXSk7XHJcbiAgfVxyXG4gIGRldHByb2QoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvZGV0cHJvZFwiXSk7XHJcbiAgfVxyXG4gIGV2YWx1YWNpb24oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9ldmFsdWFjaW9uXCJdKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==