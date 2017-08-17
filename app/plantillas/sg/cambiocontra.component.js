"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var cambiocontra_1 = require("../../servicios/sg/cambiocontra");
var router_1 = require("@angular/router");
var contrasena_1 = require("../../servicios/sg/contrasena");
//Declaración de los componentes de la vista
var ChanceComponent = (function () {
    function ChanceComponent(page, router, chanceService, passwordService) {
        this.page = page;
        this.router = router;
        this.chanceService = chanceService;
        this.passwordService = passwordService;
        page.actionBarHidden = true;
    }
    ChanceComponent.prototype.cambiar = function () {
        if (this.contrasena == this.contrasenar) {
            this.chanceService.putQuete(this.contrasena);
        }
        else {
            alert("Las contraseñas no coinsiden");
        }
    };
    return ChanceComponent;
}());
ChanceComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [cambiocontra_1.ChanceService, contrasena_1.PasswordService],
        templateUrl: "plantillas/sg/cambiocontra.html",
        styleUrls: ["plantillas/css/cambiocontrasena.css"]
    })
    //Clase para las acciones de los botones
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, cambiocontra_1.ChanceService, contrasena_1.PasswordService])
], ChanceComponent);
exports.ChanceComponent = ChanceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtYmlvY29udHJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWJpb2NvbnRyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxnRUFBZ0U7QUFDaEUsMENBQXlDO0FBRXpDLDREQUE2RDtBQUM3RCw0Q0FBNEM7QUFTNUMsSUFBYSxlQUFlO0lBTTFCLHlCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLGFBQTRCLEVBQVUsZUFBZ0M7UUFBbEgsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNwSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUN0QyxDQUFDO1lBQ0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDQyxJQUFJLENBQUEsQ0FBQztZQUNILEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFJUCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGVBQWU7SUFSM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFhLEVBQUUsNEJBQWUsQ0FBQztRQUMzQyxXQUFXLEVBQUMsaUNBQWlDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO0tBQ25ELENBQUM7SUFFRix3Q0FBd0M7O3FDQU9aLFdBQUksRUFBa0IsZUFBTSxFQUF5Qiw0QkFBYSxFQUEyQiw0QkFBZTtHQU4zSCxlQUFlLENBc0IzQjtBQXRCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGFuY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jYW1iaW9jb250cmFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL2NvbnRyYXNlbmFcIjtcclxuaW1wb3J0IHtQYXNzd29yZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvY29udHJhc2VuYVwiXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtDaGFuY2VTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGxhbnRpbGxhcy9zZy9jYW1iaW9jb250cmEuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvY2FtYmlvY29udHJhc2VuYS5jc3NcIl1cclxufSlcclxuXHJcbi8vQ2xhc2UgcGFyYSBsYXMgYWNjaW9uZXMgZGUgbG9zIGJvdG9uZXNcclxuZXhwb3J0IGNsYXNzIENoYW5jZUNvbXBvbmVudCB7XHJcbiAgdXN1YXJpbzogUGFzc3dvcmQ7IFxyXG4gIHJlc3VsdGFkbztcclxuICBjb250cmFzZW5hO1xyXG4gIGNvbnRyYXNlbmFyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY2hhbmNlU2VydmljZTogQ2hhbmNlU2VydmljZSwgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2FtYmlhcigpe1xyXG4gICAgaWYgKHRoaXMuY29udHJhc2VuYSA9PSB0aGlzLmNvbnRyYXNlbmFyKVxyXG4gICAgICB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5jZVNlcnZpY2UucHV0UXVldGUodGhpcy5jb250cmFzZW5hKTtcclxuICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBhbGVydChcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbnNpZGVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgXHJcblxyXG4gIH1cclxufSJdfQ==