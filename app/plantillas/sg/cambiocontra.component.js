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
    //constructor 
    function ChanceComponent(page, router, chanceService, passwordService) {
        this.page = page;
        this.router = router;
        this.chanceService = chanceService;
        this.passwordService = passwordService;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    //Acciones o procesos
    ChanceComponent.prototype.cambiar = function () {
        if (this.contrasena == this.contrasenar) {
            this.chanceService.putQuete(this.contrasena);
        }
        else {
            alert("Las contraseñas no coinciden");
        }
    };
    return ChanceComponent;
}());
ChanceComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [cambiocontra_1.ChanceService, contrasena_1.PasswordService],
        templateUrl: "plantillas/sg/cambiocontra.html",
        styleUrls: ["plantillas/css/cambiocontrasena.css", "app.css"]
    })
    //Acciones y procesos de la ventana
    ,
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, cambiocontra_1.ChanceService, contrasena_1.PasswordService])
], ChanceComponent);
exports.ChanceComponent = ChanceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtYmlvY29udHJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWJpb2NvbnRyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxnRUFBZ0U7QUFDaEUsMENBQXlDO0FBRXpDLDREQUE2RDtBQUM3RCw0Q0FBNEM7QUFRNUMsSUFBYSxlQUFlO0lBTTVCLGNBQWM7SUFDWix5QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxhQUE0QixFQUFVLGVBQWdDO1FBQWxILFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDcEksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDcEYsQ0FBQztJQUNILHFCQUFxQjtJQUNuQixpQ0FBTyxHQUFQO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQ3RDLENBQUM7WUFDRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNDLElBQUksQ0FBQSxDQUFDO1lBQ0gsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFwQkwsSUFvQks7QUFwQlEsZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQWEsRUFBRSw0QkFBZSxDQUFDO1FBQzNDLFdBQVcsRUFBQyxpQ0FBaUM7UUFDN0MsU0FBUyxFQUFFLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO0tBQzlELENBQUM7SUFDRixtQ0FBbUM7O3FDQVFQLFdBQUksRUFBa0IsZUFBTSxFQUF5Qiw0QkFBYSxFQUEyQiw0QkFBZTtHQVAzSCxlQUFlLENBb0J2QjtBQXBCUSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGFuY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jYW1iaW9jb250cmFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL2NvbnRyYXNlbmFcIjtcclxuaW1wb3J0IHtQYXNzd29yZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3Mvc2cvY29udHJhc2VuYVwiXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtDaGFuY2VTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGxhbnRpbGxhcy9zZy9jYW1iaW9jb250cmEuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvY2FtYmlvY29udHJhc2VuYS5jc3NcIiwgXCJhcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hXHJcbmV4cG9ydCBjbGFzcyBDaGFuY2VDb21wb25lbnQge1xyXG4gIC8vRGVjbGFyYWNpb24gZGUgdmFyaWFibGVzIFxyXG4gIHVzdWFyaW86IFBhc3N3b3JkOyBcclxuICByZXN1bHRhZG87XHJcbiAgY29udHJhc2VuYTtcclxuICBjb250cmFzZW5hcjtcclxuLy9jb25zdHJ1Y3RvciBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY2hhbmNlU2VydmljZTogQ2hhbmNlU2VydmljZSwgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG4gIH1cclxuLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgY2FtYmlhcigpe1xyXG4gICAgaWYgKHRoaXMuY29udHJhc2VuYSA9PSB0aGlzLmNvbnRyYXNlbmFyKVxyXG4gICAgICB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5jZVNlcnZpY2UucHV0UXVldGUodGhpcy5jb250cmFzZW5hKTtcclxuICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBhbGVydChcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSJdfQ==