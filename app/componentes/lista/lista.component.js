"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ListaComponent = (function () {
    function ListaComponent(router) {
        this.router = router;
    }
    ListaComponent.prototype.validar = function () {
        this.router.navigate(["/sg/valida"]);
    };
    ListaComponent.prototype.usuario = function () {
        this.router.navigate(["/sg/usuario"]);
    };
    ListaComponent.prototype.contrasena = function () {
        this.router.navigate(["/sg/contrasena"]);
    };
    ListaComponent.prototype.cambioContra = function () {
        this.router.navigate(["/sg/cambio"]);
    };
    ListaComponent.prototype.elegir = function () {
        this.router.navigate(["/ope/eleccion"]);
    };
    ListaComponent.prototype.registroC = function () {
        this.router.navigate(["/sg/persona"]);
    };
    ListaComponent.prototype.registroP = function () {
        this.router.navigate(["/sg/proveedor"]);
    };
    ListaComponent.prototype.registroV = function () {
        this.router.navigate(["/sg/regvarios"]);
    };
    ListaComponent.prototype.dirCli = function () {
        this.router.navigate(["/ope/dir"]);
    };
    ListaComponent.prototype.cat = function () {
        this.router.navigate(["/ope/categoria"]);
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
    ListaComponent.prototype.tarjeta = function () {
        this.router.navigate(["ope/tarjeta"]);
    };
    ListaComponent.prototype.detprod = function () {
        this.router.navigate(["ope/detprod"]);
    };
    ListaComponent.prototype.evaluacion = function () {
        this.router.navigate(["ope/evaluacion"]);
    };
    ListaComponent.prototype.giro = function () {
        this.router.navigate(["/ct/giro"]);
    };
    ListaComponent.prototype.atributos = function () {
        this.router.navigate(["/ct/atributo"]);
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambioContra()\"></Button>\n    \n    <Button text = \"Eleccion Giro\" class=\"boton\" (tap)=\"elegir()\"></Button>\n\n    <Button text = \"Registro cliente\" class=\"boton\" (tap)=\"registroC()\"></Button>\n    <Button text = \"Registro proveedor\" class=\"boton\" (tap)=\"registroP()\"></Button>\n    <Button text = \"Registro painani-sup-dir \" class=\"boton\" (tap)=\"registroV()\"></Button>\n\n    <Button text = \"DireccionCliente\"    class=\"boton\" (tap)=\"dirCli()\"></Button>\n    \n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    \n    <Button text = \"M\u00E9nu\"        class=\"boton\" (tap)=\"datos()\"></Button>\n    <Button text = \"Act. Datos per\"    class=\"boton\" (tap)=\"actualizadatos()\"></Button>\n    <Button text = \"Act. Dir\"    class=\"boton\" (tap)=\"actualizadir()\"></Button>\n    <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n\n    <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>  \n\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button> \n    <Button text = \"atributos\"        class=\"boton\" (tap)=\"atributos()\"></Button>\n    <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n    <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>\n    <Button text = \" Evaluacion \"        class=\"boton\" (tap)=\"evaluacion()\"></Button>\n        \n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQTZDekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0QsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0EsZ0NBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxxQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFQywrQkFBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCw0QkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7SUFDVCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVBLE9BQU87SUFDUixnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdBLDZCQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNBLGtDQUFTLEdBQVQ7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQXRFWSxjQUFjO0lBeEMxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDg1REFvQ1Q7S0FDRixDQUFDO3FDQUc0QixlQUFNO0dBRnZCLGNBQWMsQ0FzRTFCO0FBdEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IEZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk3DqW51XCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJWYWxpZGFyXCIgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInZhbGlkYXIoKVwiPjwvQnV0dG9uPlxyXG5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVXN1YXJpb1wiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInVzdWFyaW8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDb250cmFzZcOxYVwiICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjb250cmFzZW5hKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2FtYmlvIGRlIENvbnRyYXNlw7FhXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2FtYmlvQ29udHJhKClcIj48L0J1dHRvbj5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJFbGVjY2lvbiBHaXJvXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZWxlZ2lyKClcIj48L0J1dHRvbj5cclxuXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlJlZ2lzdHJvIGNsaWVudGVcIiBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3Ryb0MoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZWdpc3RybyBwcm92ZWVkb3JcIiBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJyZWdpc3Ryb1AoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZWdpc3RybyBwYWluYW5pLXN1cC1kaXIgXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwicmVnaXN0cm9WKClcIj48L0J1dHRvbj5cclxuXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkRpcmVjY2lvbkNsaWVudGVcIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkaXJDbGkoKVwiPjwvQnV0dG9uPlxyXG4gICAgXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhdGVnb3JpYXNcIiBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjYXQoKVwiPjwvQnV0dG9uPlxyXG4gICAgXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIk3DqW51XCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImRhdG9zKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQWN0LiBEYXRvcyBwZXJcIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJhY3R1YWxpemFkYXRvcygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkFjdC4gRGlyXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiYWN0dWFsaXphZGlyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwidGFyamV0YVwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ0YXJqZXRhKClcIj48L0J1dHRvbj5cclxuXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcImRldGFsbGVwcm9kXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImRldHByb2QoKVwiPjwvQnV0dG9uPiAgXHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJHaXJvXCIgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZ2lybygpXCI+PC9CdXR0b24+IFxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJhdHJpYnV0b3NcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiYXRyaWJ1dG9zKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwidGFyamV0YVwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ0YXJqZXRhKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiZGV0YWxsZXByb2RcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZGV0cHJvZCgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIiBFdmFsdWFjaW9uIFwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJldmFsdWFjaW9uKClcIj48L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvU2Nyb2xsVmlldz5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG4gIHZhbGlkYXIoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICB9XHJcbiAgIHVzdWFyaW8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdXN1YXJpb1wiXSk7XHJcbiAgfVxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY29udHJhc2VuYVwiXSk7XHJcbiAgfVxyXG4gIGNhbWJpb0NvbnRyYSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jYW1iaW9cIl0pO1xyXG4gIH1cclxuXHJcbiAgZWxlZ2lyKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2VsZWNjaW9uXCJdKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdHJvQygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9wZXJzb25hXCJdKTtcclxuICB9XHJcbiAgcmVnaXN0cm9QKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NnL3Byb3ZlZWRvclwiXSk7XHJcbiAgfVxyXG4gIHJlZ2lzdHJvVigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9yZWd2YXJpb3NcIl0pO1xyXG4gIH1cclxuXHJcbiAgICBkaXJDbGkoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2RpclwiXSk7XHJcbiAgfVxyXG4gXHJcblxyXG4gIGNhdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICB9XHJcbiBcclxuICAvL0FkcmlhbmFcclxuICBkYXRvcygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvZGF0b3NcIl0pO1xyXG4gIH1cclxuICBhY3R1YWxpemFkYXRvcygpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdERhdFBlclwiXSk7XHJcbiAgfVxyXG4gIGFjdHVhbGl6YWRpcigpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdGRpclwiXSk7XHJcbiAgfSBcclxuXHJcbiAgIC8vZWRnYXJcclxuICB0YXJqZXRhKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL3RhcmpldGFcIl0pO1xyXG4gIH1cclxuICBkZXRwcm9kKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2RldHByb2RcIl0pO1xyXG4gIH1cclxuICBldmFsdWFjaW9uKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvZXZhbHVhY2lvblwiXSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgIGdpcm8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3QvZ2lyb1wiXSk7XHJcbiAgfVxyXG4gICBhdHJpYnV0b3MoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3QvYXRyaWJ1dG9cIl0pO1xyXG4gIH1cclxufVxyXG5cclxuIl19