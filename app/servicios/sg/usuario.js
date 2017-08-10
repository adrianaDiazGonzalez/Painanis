"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importaciones de recursos que se usan en el código
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
//Exportación de la clase usuario
var UserService = (function () {
    //constructor del http para los servicios REST
    function UserService(http) {
        this.http = http;
    }
    //Llamado al servicio REST "get"
    UserService.prototype.getQuote = function () {
        this.http.get("http://192.168.2.153:8810/Pruebas/rest/Evento/Post")
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    //Llamado al servicio REST "post"  
    UserService.prototype.postQuote = function (usuario) {
        var ttctPersona = [usuario];
        console.log(ttctPersona);
        console.log(JSON.stringify({ "request": { "ipcUsuario": usuario.cUsuario,
                "ipcContrasena": usuario.cContrasena }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen", JSON.stringify({ "request": { "ipcUsuario": usuario.cUsuario,
                "ipcContrasena": usuario.cContrasena }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBb0Q7QUFDcEQsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLGlDQUFpQztBQUVqQyxJQUFhLFdBQVc7SUFFdEIsOENBQThDO0lBQzlDLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQWdDO0lBQzlCLDhCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQzthQUNsRSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbUNBQW1DO0lBQ25DLCtCQUFTLEdBQVQsVUFBVSxPQUFvQjtRQUMzQixJQUFJLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFHekIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUNuQixFQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDOUIsZUFBZSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUM7U0FDdkMsQ0FBQyxDQUFDLENBQUE7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxFQUNsRixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUNQLEVBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUM5QixlQUFlLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBQztTQUN2QyxDQUFDLEVBQ1osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFFcEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUxQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBSWUsV0FBSTtHQUhuQixXQUFXLENBOEN2QjtBQTlDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBxdWUgc2UgdXNhbiBlbiBlbCBjw7NkaWdvXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgdHRjdFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy91c3VhcmlvXCI7XHJcbi8vRXhwb3J0YWNpw7NuIGRlIGxhIGNsYXNlIHVzdWFyaW9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNUXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG4gIFxyXG4gIC8vTGxhbWFkbyBhbCBzZXJ2aWNpbyBSRVNUIFwiZ2V0XCJcclxuICAgIGdldFF1b3RlKCkge1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QcnVlYmFzL3Jlc3QvRXZlbnRvL1Bvc3RcIilcclxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJwb3N0XCIgIFxyXG4gICAgcG9zdFF1b3RlKHVzdWFyaW86IHR0Y3RQZXJzb25hKSB7XHJcbiAgICAgICB2YXIgdHRjdFBlcnNvbmEgPSBbdXN1YXJpb107XHJcbiAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2codHRjdFBlcnNvbmEpXHJcbiAgICAgICBcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiaXBjVXN1YXJpb1wiOiB1c3VhcmlvLmNVc3VhcmlvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcGNDb250cmFzZW5hXCI6IHVzdWFyaW8uY0NvbnRyYXNlbmF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfc2dTZXNpb25fZ2VuXCIsIFxyXG4gICAgICAgSlNPTi5zdHJpbmdpZnkoeyBcInJlcXVlc3RcIiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcImlwY1VzdWFyaW9cIjogdXN1YXJpby5jVXN1YXJpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXBjQ29udHJhc2VuYVwiOiB1c3VhcmlvLmNDb250cmFzZW5hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgXHJcbiAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wbFJlc3VsdGFkbyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==