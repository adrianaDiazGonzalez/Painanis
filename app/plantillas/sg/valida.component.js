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
<<<<<<< HEAD
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
=======
        console.log("valida", this.cp);
        this.validaService.getQuote(this.cp);
>>>>>>> aa42dc6c87aaa6d5b7de4fab9f580c69ee57537d
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
<<<<<<< HEAD
        templateUrl: "plantillas/sg/valida.xml",
=======
        template: " \n   <ScrollView>\n   <StackLayout >\n    <ActionBar title=\"Direcci\u00F3n\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/mapa.png\" class=\"cp\" horizontalAlignment=\"center\" verticalAlignment=\"center\" ></Image>\n    <TextField hint=\"CP\" [(ngModel)]=\"cp\" keyboardType= \"Number\" verticalAlignment=\"center\" ></TextField >\n    <Button text = \"Validar\" class=\"boton\" (tap)=\"validar()\"></Button>\n   </StackLayout>\n  </ScrollView>\n \n  ",
>>>>>>> aa42dc6c87aaa6d5b7de4fab9f580c69ee57537d
        styleUrls: ["plantillas/css/valida.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBQzFELDBDQUF5QztBQUd6QyxvREFBb0Q7QUFHcEQsNENBQTRDO0FBUzVDLElBQWEsZUFBZTtJQUUxQix5QkFBb0IsTUFBYyxFQUFTLGFBQTRCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUR2RSxPQUFFLEdBQUMsRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFHLEVBQUUsQ0FBQyxDQUNsQyxDQUFDO1lBQ0EsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBQ1IsQ0FBQztRQUNELG9EQUFvRDtRQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXpFOzs7O1FBSUE7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBQztLQUMxQyxDQUFDO3FDQUs0QixlQUFNLEVBQXdCLHNCQUFhO0dBRjVELGVBQWUsQ0FzQjNCO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdmFsaWRhXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuLy9pbXBvcnQgKiBhcyBYbWxPYmplY3RzIGZyb20gXCJAYW5ndWxhci94bWxvYmplY3RzXCI7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1ZhbGlkYVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBsYW50aWxsYXMvc2cvdmFsaWRhLnhtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcInBsYW50aWxsYXMvY3NzL3ZhbGlkYS5jc3NcIl1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhQ29tcG9uZW50IHtcclxuICBjcD1cIlwiO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSB2YWxpZGFTZXJ2aWNlOiBWYWxpZGFTZXJ2aWNlKXtcclxuICB9XHJcbiAgXHJcbiAgdmFsaWRhcigpXHJcbiAge1xyXG4gICAgIGlmKHRoaXMuY3AgPT0gbnVsbCB8fCB0aGlzLmNwID09XCJcIilcclxuICAgICAge1xyXG4gICAgICAgYWxlcnQoXCJJbmdyZXNlIHVuIEPDs2RpZ28gUG9zdGFsXCIpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICAgICB9IFxyXG4gICAgICAvL3ZhciByZXN1bHQgPSB0aGlzLnZhbGlkYVNlcnZpY2UuZ2V0UXVvdGUodGhpcy5jcCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdGFkbyBsYWRvIHZpc3RhXCIsIHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKSlcclxuXHJcbiAgICAgIC8qaWYocmVzdWx0Lm9wY01lbnNhamUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbGVydChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgKi9cclxuICB9XHJcbn1cclxuIl19
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBRzFELDRDQUE0QztBQW9CNUMsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQURoRCxPQUFFLEdBQUMsRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksZUFBZTtJQW5CM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsUUFBUSxFQUNSLHdkQVVDO1FBQ0EsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDMUMsQ0FBQztxQ0FLbUMsc0JBQWE7R0FGckMsZUFBZSxDQVMzQjtBQVRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvdmFsaWRhXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtWYWxpZGFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZTpcclxuICBgIFxyXG4gICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0ID5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJEaXJlY2Npw7NuXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbWFwYS5wbmdcIiBjbGFzcz1cImNwXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgPjwvSW1hZ2U+XHJcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJDUFwiIFsobmdNb2RlbCldPVwiY3BcIiBrZXlib2FyZFR5cGU9IFwiTnVtYmVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiA+PC9UZXh0RmllbGQgPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJWYWxpZGFyXCIgY2xhc3M9XCJib3RvblwiICh0YXApPVwidmFsaWRhcigpXCI+PC9CdXR0b24+XHJcbiAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gXHJcbiAgYCxcclxuICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgY3A9XCJcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYVNlcnZpY2U6IFZhbGlkYVNlcnZpY2Upe1xyXG4gIH1cclxuICBcclxuICB2YWxpZGFyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbGlkYVwiLCB0aGlzLmNwKTtcclxuICAgIHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKTtcclxuICB9XHJcbn1cclxuIl19
>>>>>>> aa42dc6c87aaa6d5b7de4fab9f580c69ee57537d
