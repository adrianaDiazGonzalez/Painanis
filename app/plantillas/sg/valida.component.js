"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var valida_1 = require("../../servicios/sg/valida");
var router_1 = require("@angular/router");
//import * as XmlObjects from "@angular/xmlobjects";
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    function ValidaComponent(router, validaService) {
        this.router = router;
        this.validaService = validaService;
        this.cp = "";
    }
    ValidaComponent.prototype.validar = function () {
        if (this.cp == null || this.cp == "") {
            alert("Ingrese un Código Postal");
            return;
        }
        //var result = this.validaService.getQuote(this.cp);
        console.log("resultado lado vista", this.validaService.getQuote(this.cp));
        /*if(result.opcMensaje)
              {
                alert(result.response.opcMensaje)
              }
      */
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
        templateUrl: "plantillas/sg/valida.xml",
        styleUrls: ["plantillas/css/valida.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBQzFELDBDQUF5QztBQUd6QyxvREFBb0Q7QUFHcEQsNENBQTRDO0FBUzVDLElBQWEsZUFBZTtJQUUxQix5QkFBb0IsTUFBYyxFQUFTLGFBQTRCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUR2RSxPQUFFLEdBQUMsRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFHLEVBQUUsQ0FBQyxDQUNsQyxDQUFDO1lBQ0EsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUNELG9EQUFvRDtRQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXpFOzs7O1FBSUE7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBQztLQUMxQyxDQUFDO3FDQUs0QixlQUFNLEVBQXdCLHNCQUFhO0dBRjVELGVBQWUsQ0FzQjNCO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdmFsaWRhXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuLy9pbXBvcnQgKiBhcyBYbWxPYmplY3RzIGZyb20gXCJAYW5ndWxhci94bWxvYmplY3RzXCI7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLnhtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcInBsYW50aWxsYXMvY3NzL3ZhbGlkYS5jc3NcIl1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhQ29tcG9uZW50IHtcclxuICBjcD1cIlwiO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSB2YWxpZGFTZXJ2aWNlOiBWYWxpZGFTZXJ2aWNlKXtcclxuICB9XHJcbiAgXHJcbiAgdmFsaWRhcigpXHJcbiAge1xyXG4gICAgIGlmKHRoaXMuY3AgPT0gbnVsbCB8fCB0aGlzLmNwID09XCJcIilcclxuICAgICAge1xyXG4gICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEPDs2RpZ28gUG9zdGFsXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgICB9IFxyXG4gICAgICAvL3ZhciByZXN1bHQgPSB0aGlzLnZhbGlkYVNlcnZpY2UuZ2V0UXVvdGUodGhpcy5jcCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdGFkbyBsYWRvIHZpc3RhXCIsIHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKSlcclxuXHJcbiAgICAgIC8qaWYocmVzdWx0Lm9wY01lbnNhamUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbGVydChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgKi9cclxuICB9XHJcbn1cclxuIl19