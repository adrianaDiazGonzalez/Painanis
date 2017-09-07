"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importaciones de recursos que se usan en el código
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
//Exportación de la clase usuario
var UserService = (function () {
    //constructor del http para los servicios REST
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    /*Llamado al servicio REST "get"
    getQuote() {
      this.http.get("http://192.168.2.153:8810/Pruebas/rest/Evento/Post")
        .map(response => response.json())
        .subscribe(result => {
          console.log(JSON.stringify(result));
        }, error => {
          console.log("ERROR: ", error);
        });
    }*/
    //Llamado al servicio REST "post"  
    UserService.prototype.postQuote = function (usuario) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        //guardamos el usuario en cada pantalla
        return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen", JSON.stringify({
            "request": {
                "ipcUsuario": usuario.cUsuario,
                "ipcContrasena": usuario.cContrasena
            }
        }), { headers: headers }));
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBb0Q7QUFDcEQsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHVDQUFxQztBQUVyQywwQ0FBeUM7QUFJekMsaUNBQWlDO0FBRWpDLElBQWEsV0FBVztJQUV0Qiw4Q0FBOEM7SUFDOUMscUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUUzRDs7Ozs7Ozs7O09BU0c7SUFFSCxtQ0FBbUM7SUFDbkMsK0JBQVMsR0FBVCxVQUFVLE9BQW9CO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCx1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0VBQWtFLEVBQ3RHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQUU7Z0JBQ1QsWUFBWSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUM5QixlQUFlLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDckM7U0FDRixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUllLFdBQUksRUFBa0IsZUFBTTtHQUgzQyxXQUFXLENBK0J2QjtBQS9CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBxdWUgc2UgdXNhbiBlbiBlbCBjw7NkaWdvXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vL2ltcG9ydGFjaW9uIHBhcmEgbWFudGVuZXIgbGEgc2VzaW9uIGFjdGl2YVxyXG5pbXBvcnQgeyBTZXNpb25BY3RpdmEgfSBmcm9tIFwiLi4vLi4vc2VzaW9uQWN0aXZhXCI7XHJcblxyXG4vL0V4cG9ydGFjacOzbiBkZSBsYSBjbGFzZSB1c3VhcmlvXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIC8qTGxhbWFkbyBhbCBzZXJ2aWNpbyBSRVNUIFwiZ2V0XCJcclxuICBnZXRRdW90ZSgpIHtcclxuICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BydWViYXMvcmVzdC9FdmVudG8vUG9zdFwiKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSovXHJcblxyXG4gIC8vTGxhbWFkbyBhbCBzZXJ2aWNpbyBSRVNUIFwicG9zdFwiICBcclxuICBwb3N0UXVvdGUodXN1YXJpbzogdHRjdFBlcnNvbmEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgLy9ndWFyZGFtb3MgZWwgdXN1YXJpbyBlbiBjYWRhIHBhbnRhbGxhXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QYWluYW5pcy9yZXN0L3BhaW5hbmlzL2FzX3NnU2VzaW9uX2dlblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcclxuICAgICAgICAgIFwiaXBjVXN1YXJpb1wiOiB1c3VhcmlvLmNVc3VhcmlvLFxyXG4gICAgICAgICAgXCJpcGNDb250cmFzZW5hXCI6IHVzdWFyaW8uY0NvbnRyYXNlbmFcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==