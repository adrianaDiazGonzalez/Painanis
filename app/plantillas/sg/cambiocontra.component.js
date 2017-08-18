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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtYmlvY29udHJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWJpb2NvbnRyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsZ0NBQStCO0FBQy9CLHNDQUEwQztBQUMxQyxnRUFBZ0U7QUFDaEUsMENBQXlDO0FBRXpDLDREQUErRDtBQUMvRCw0Q0FBNEM7QUFRNUMsSUFBYSxlQUFlO0lBTTFCLGNBQWM7SUFDZCx5QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxhQUE0QixFQUFVLGVBQWdDO1FBQWxILFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDcEksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7SUFDcEYsQ0FBQztJQUNELHFCQUFxQjtJQUNyQixpQ0FBTyxHQUFQO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsNEJBQWEsRUFBRSw0QkFBZSxDQUFDO1FBQzNDLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsU0FBUyxFQUFFLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDO0tBQzlELENBQUM7SUFDRixtQ0FBbUM7O3FDQVFQLFdBQUksRUFBa0IsZUFBTSxFQUF5Qiw0QkFBYSxFQUEyQiw0QkFBZTtHQVAzSCxlQUFlLENBbUIzQjtBQW5CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGFuY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jYW1iaW9jb250cmFcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL2NvbnRyYXNlbmFcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9jb250cmFzZW5hXCJcclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW0NoYW5jZVNlcnZpY2UsIFBhc3N3b3JkU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGxhbnRpbGxhcy9zZy9jYW1iaW9jb250cmEuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvY2FtYmlvY29udHJhc2VuYS5jc3NcIiwgXCJhcHAuY3NzXCJdXHJcbn0pXHJcbi8vQWNjaW9uZXMgeSBwcm9jZXNvcyBkZSBsYSB2ZW50YW5hXHJcbmV4cG9ydCBjbGFzcyBDaGFuY2VDb21wb25lbnQge1xyXG4gIC8vRGVjbGFyYWNpb24gZGUgdmFyaWFibGVzIFxyXG4gIHVzdWFyaW86IFBhc3N3b3JkO1xyXG4gIHJlc3VsdGFkbztcclxuICBjb250cmFzZW5hO1xyXG4gIGNvbnRyYXNlbmFyO1xyXG4gIC8vY29uc3RydWN0b3IgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNoYW5jZVNlcnZpY2U6IENoYW5jZVNlcnZpY2UsIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9zaXJ2ZSBwYXJhIG9jdWx0YXIgbGEgYmFycmEgZGUgdGl0dWxvIGRlIGxhIHZlbnRhbmFcclxuICB9XHJcbiAgLy9BY2Npb25lcyBvIHByb2Nlc29zXHJcbiAgY2FtYmlhcigpIHtcclxuICAgIGlmICh0aGlzLmNvbnRyYXNlbmEgPT0gdGhpcy5jb250cmFzZW5hcikge1xyXG4gICAgICB0aGlzLmNoYW5jZVNlcnZpY2UucHV0UXVldGUodGhpcy5jb250cmFzZW5hKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhbGVydChcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==