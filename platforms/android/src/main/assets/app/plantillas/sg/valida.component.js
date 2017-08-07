"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var valida_1 = require("../../servicios/sg/valida");
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    function ValidaComponent(validaService) {
        this.validaService = validaService;
        this.cp = "";
    }
    ValidaComponent.prototype.validar = function () {
        console.log("valida", this.cp);
        this.validaService.getQuote(this.cp);
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [valida_1.ValidaService],
        template: " \n   <ScrollView>\n   <StackLayout >\n    <ActionBar title=\"Direcci\u00F3n\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/mapa.png\" class=\"cp\" horizontalAlignment=\"center\" verticalAlignment=\"center\" ></Image>\n    <TextField hint=\"CP\" [(ngModel)]=\"cp\" keyboardType= \"Number\" verticalAlignment=\"center\" ></TextField >\n    <Button text = \"Validar\" class=\"boton\" (tap)=\"validar()\"></Button>\n   \n                                   \n    </StackLayout>\n  </ScrollView>\n \n  ",
        styleUrls: ["plantillas/css/valida.css"]
    }),
    __metadata("design:paramtypes", [valida_1.ValidaService])
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0RBQTBEO0FBRzFELDRDQUE0QztBQXNCNUMsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQURoRCxPQUFFLEdBQUMsRUFBRSxDQUFDO0lBRU4sQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxzQkFBQztBQUFELENBQUMsQUFaSCxJQVlHO0FBWlUsZUFBZTtJQXJCM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHNCQUFhLENBQUM7UUFDMUIsUUFBUSxFQUNSLG1nQkFZQztRQUNBLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQzFDLENBQUM7cUNBS21DLHNCQUFhO0dBRnJDLGVBQWUsQ0FZekI7QUFaVSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZhbGlkYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3ZhbGlkYVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vL0RlY2xhcmFjacOzbiBkZSBsb3MgY29tcG9uZW50ZXMgZGUgbGEgdmlzdGFcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVmFsaWRhU2VydmljZV0sXHJcbiAgdGVtcGxhdGU6XHJcbiAgYCBcclxuICAgPFNjcm9sbFZpZXc+XHJcbiAgIDxTdGFja0xheW91dCA+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiRGlyZWNjacOzblwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL21hcGEucG5nXCIgY2xhc3M9XCJjcFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiID48L0ltYWdlPlxyXG4gICAgPFRleHRGaWVsZCBoaW50PVwiQ1BcIiBbKG5nTW9kZWwpXT1cImNwXCIga2V5Ym9hcmRUeXBlPSBcIk51bWJlclwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgPjwvVGV4dEZpZWxkID5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiIGNsYXNzPVwiYm90b25cIiAodGFwKT1cInZhbGlkYXIoKVwiPjwvQnV0dG9uPlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gXHJcbiAgYCxcclxuICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy92YWxpZGEuY3NzXCJdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgY3A9XCJcIjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYVNlcnZpY2U6IFZhbGlkYVNlcnZpY2Upe1xyXG4gIH1cclxuICBcclxuICB2YWxpZGFyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInZhbGlkYVwiLCB0aGlzLmNwKTtcclxuICAgIHRoaXMudmFsaWRhU2VydmljZS5nZXRRdW90ZSh0aGlzLmNwKTtcclxuICB9XHJcblxyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4iXX0=