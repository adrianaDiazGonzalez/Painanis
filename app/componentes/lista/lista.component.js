"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ListaComponent = (function () {
    function ListaComponent(router) {
        this.router = router;
    }
    ListaComponent.prototype.carrito = function () {
        this.router.navigate(["ope/carrito"]);
    };
    ListaComponent.prototype.pago = function () {
    };
    ListaComponent.prototype.efectivo = function () {
    };
    ListaComponent.prototype.evaluacion = function () {
        this.router.navigate(["ope/evaluacion"]);
    };
    ListaComponent.prototype.tarjeta = function () {
        this.router.navigate(["ope/tarjeta"]);
    };
    ListaComponent.prototype.detprod = function () {
        this.router.navigate(["ope/detprod"]);
    };
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
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Carrito Compra\"     class=\"boton\" (tap)=\"carrito()\"></Button>\n    <Button text = \"Tipo de Pago\"     class=\"boton\" (tap)=\"pago()\"></Button>\n    <Button text = \"Efectivo\"     class=\"boton\" (tap)=\"efectivo()\"></Button>\n    <Button text = \"Aviso\"     class=\"boton\" (tap)=\"aviso()\"></Button>\n\n    <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n    <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>\n    <Button text = \" Evaluacion \"        class=\"boton\" (tap)=\"evaluacion()\"></Button>\n        \n\n\n    <Button text = \"Usuario\"    class=\"boton\" (tap)=\"usuario()\"></Button>\n    <Button text = \"Contrase\u00F1a\"  class=\"boton\" (tap)=\"contrasena()\"></Button>\n    <Button text = \"Cambio de Contrase\u00F1a\"    class=\"boton\" (tap)=\"cambioContra()\"></Button>\n    \n    <Button text = \"Eleccion Giro\" class=\"boton\" (tap)=\"elegir()\"></Button>\n\n    <Button text = \"Registro cliente\" class=\"boton\" (tap)=\"registroC()\"></Button>\n    <Button text = \"Registro proveedor\" class=\"boton\" (tap)=\"registroP()\"></Button>\n    <Button text = \"Registro painani-sup-dir \" class=\"boton\" (tap)=\"registroV()\"></Button>\n\n    <Button text = \"DireccionCliente\"    class=\"boton\" (tap)=\"dirCli()\"></Button>\n    \n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n    \n    <Button text = \"M\u00E9nu\"        class=\"boton\" (tap)=\"datos()\"></Button>\n    <Button text = \"Act. Datos per\"    class=\"boton\" (tap)=\"actualizadatos()\"></Button>\n    <Button text = \"Act. Dir\"    class=\"boton\" (tap)=\"actualizadir()\"></Button>\n    <Button text = \"tarjeta\"        class=\"boton\" (tap)=\"tarjeta()\"></Button>\n\n    <Button text = \"detalleprod\"        class=\"boton\" (tap)=\"detprod()\"></Button>  \n\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button> \n    <Button text = \"atributos\"        class=\"boton\" (tap)=\"atributos()\"></Button>\n    \n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ListaComponent);
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQW9EekMsSUFBYSxjQUFjO0lBRXpCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0QsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBQ0QsNkJBQUksR0FBSjtJQUVBLENBQUM7SUFDRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0EsZ0NBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxxQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDQywrQkFBTSxHQUFOO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw0QkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVM7SUFDVCw4QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVBLE9BQU87SUFLUCw2QkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDQSxrQ0FBUyxHQUFUO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoRkQsSUFnRkM7QUFoRlksY0FBYztJQS9DMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSx1dkVBMkNUO0tBQ0YsQ0FBQztxQ0FHNEIsZUFBTTtHQUZ2QixjQUFjLENBZ0YxQjtBQWhGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCBGcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPFNjcm9sbFZpZXc+XHJcbiAgIDxTdGFja0xheW91dD5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNw6ludVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ2YWxpZGFyKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ2Fycml0byBDb21wcmFcIiAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2Fycml0bygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlRpcG8gZGUgUGFnb1wiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJwYWdvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiRWZlY3Rpdm9cIiAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZWZlY3Rpdm8oKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJBdmlzb1wiICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJhdmlzbygpXCI+PC9CdXR0b24+XHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJ0YXJqZXRhXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInRhcmpldGEoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJkZXRhbGxlcHJvZFwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkZXRwcm9kKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiIEV2YWx1YWNpb24gXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImV2YWx1YWNpb24oKVwiPjwvQnV0dG9uPlxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlVzdWFyaW9cIiAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJ1c3VhcmlvKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiQ29udHJhc2XDsWFcIiAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY29udHJhc2VuYSgpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhbWJpbyBkZSBDb250cmFzZcOxYVwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImNhbWJpb0NvbnRyYSgpXCI+PC9CdXR0b24+XHJcbiAgICBcclxuICAgIDxCdXR0b24gdGV4dCA9IFwiRWxlY2Npb24gR2lyb1wiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImVsZWdpcigpXCI+PC9CdXR0b24+XHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZWdpc3RybyBjbGllbnRlXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwicmVnaXN0cm9DKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm8gcHJvdmVlZG9yXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwicmVnaXN0cm9QKClcIj48L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiUmVnaXN0cm8gcGFpbmFuaS1zdXAtZGlyIFwiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInJlZ2lzdHJvVigpXCI+PC9CdXR0b24+XHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJEaXJlY2Npb25DbGllbnRlXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZGlyQ2xpKClcIj48L0J1dHRvbj5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYXRlZ29yaWFzXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwiY2F0KClcIj48L0J1dHRvbj5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJNw6ludVwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkYXRvcygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkFjdC4gRGF0b3MgcGVyXCIgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiYWN0dWFsaXphZGF0b3MoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJBY3QuIERpclwiICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImFjdHVhbGl6YWRpcigpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcInRhcmpldGFcIiAgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwidGFyamV0YSgpXCI+PC9CdXR0b24+XHJcblxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJkZXRhbGxlcHJvZFwiICAgICAgICBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJkZXRwcm9kKClcIj48L0J1dHRvbj4gIFxyXG5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiR2lyb1wiICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImdpcm8oKVwiPjwvQnV0dG9uPiBcclxuICAgIDxCdXR0b24gdGV4dCA9IFwiYXRyaWJ1dG9zXCIgICAgICAgIGNsYXNzPVwiYm90b25cIiAodGFwKT1cImF0cmlidXRvcygpXCI+PC9CdXR0b24+XHJcbiAgICBcclxuICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvU2Nyb2xsVmlldz5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHJcbiAgfVxyXG4gIGNhcnJpdG8oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9jYXJyaXRvXCJdKTtcclxuXHJcbiAgfVxyXG4gIHBhZ28oKXtcclxuXHJcbiAgfVxyXG4gIGVmZWN0aXZvKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgZXZhbHVhY2lvbigpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2V2YWx1YWNpb25cIl0pO1xyXG4gIH1cclxuXHJcbiAgdGFyamV0YSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS90YXJqZXRhXCJdKTtcclxuICB9XHJcbiAgZGV0cHJvZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm9wZS9kZXRwcm9kXCJdKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXIoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICB9XHJcbiAgIHVzdWFyaW8oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdXN1YXJpb1wiXSk7XHJcbiAgfVxyXG4gIGNvbnRyYXNlbmEoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvY29udHJhc2VuYVwiXSk7XHJcbiAgfVxyXG4gIGNhbWJpb0NvbnRyYSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9jYW1iaW9cIl0pO1xyXG4gIH1cclxuICBlbGVnaXIoKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvZWxlY2Npb25cIl0pO1xyXG4gIH1cclxuICByZWdpc3Ryb0MoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcGVyc29uYVwiXSk7XHJcbiAgfVxyXG4gIHJlZ2lzdHJvUCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZy9wcm92ZWVkb3JcIl0pO1xyXG4gIH1cclxuICByZWdpc3Ryb1YoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvcmVndmFyaW9zXCJdKTtcclxuICB9XHJcbiAgICBkaXJDbGkoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2RpclwiXSk7XHJcbiAgfVxyXG4gIGNhdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICB9XHJcbiBcclxuICAvL0FkcmlhbmFcclxuICBkYXRvcygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvZGF0b3NcIl0pO1xyXG4gIH1cclxuICBhY3R1YWxpemFkYXRvcygpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdERhdFBlclwiXSk7XHJcbiAgfVxyXG4gIGFjdHVhbGl6YWRpcigpIHtcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvb3BlL2FjdGRpclwiXSk7XHJcbiAgfSBcclxuXHJcbiAgIC8vZWRnYXJcclxuICBcclxuICBcclxuXHJcblxyXG4gICBnaXJvKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2dpcm9cIl0pO1xyXG4gIH1cclxuICAgYXRyaWJ1dG9zKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2F0cmlidXRvXCJdKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==