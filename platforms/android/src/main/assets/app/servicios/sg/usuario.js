"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importaciones de recursos que se usan en el código
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
//Exportación de la clase usuario
var UserService = (function () {
    //constructor del http para los servicios REST
    function UserService(http, router) {
        this.http = http;
        this.router = router;
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
        var _this = this;
        var ttctPersona = [usuario];
        console.log(ttctPersona);
        console.log(JSON.stringify({
            "request": {
                "ipcUsuario": usuario.cUsuario,
                "ipcContrasena": usuario.cContrasena
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_sgSesion_gen", JSON.stringify({
            "request": {
                "ipcUsuario": usuario.cUsuario,
                "ipcContrasena": usuario.cContrasena
            }
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
            if (result.response.opcMensaje != "") {
                alert("Usuario y/o contraseña incorrectos");
                return;
            }
            else {
                _this.router.navigate(["ope/categoria"]);
            }
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBb0Q7QUFDcEQsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLDBDQUF5QztBQUN6QyxpQ0FBaUM7QUFFakMsSUFBYSxXQUFXO0lBRXRCLDhDQUE4QztJQUM5QyxxQkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRTNELGdDQUFnQztJQUNoQyw4QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUM7YUFDaEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG1DQUFtQztJQUNuQywrQkFBUyxHQUFULFVBQVUsT0FBb0I7UUFBOUIsaUJBeUNDO1FBeENDLElBQUksV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUd4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekIsU0FBUyxFQUNUO2dCQUNFLFlBQVksRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDOUIsZUFBZSxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDLENBQUE7UUFDSCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0VBQWtFLEVBQy9FLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQ1Q7Z0JBQ0UsWUFBWSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUM5QixlQUFlLEVBQUUsT0FBTyxDQUFDLFdBQVc7YUFDckM7U0FDRixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFFcEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBRUgsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBSWUsV0FBSSxFQUFrQixlQUFNO0dBSDNDLFdBQVcsQ0EwRHZCO0FBMURZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy9JbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIHF1ZSBzZSB1c2FuIGVuIGVsIGPDs2RpZ29cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyB0dGN0UGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3VzdWFyaW9cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vL0V4cG9ydGFjacOzbiBkZSBsYSBjbGFzZSB1c3VhcmlvXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIC8vTGxhbWFkbyBhbCBzZXJ2aWNpbyBSRVNUIFwiZ2V0XCJcclxuICBnZXRRdW90ZSgpIHtcclxuICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BydWViYXMvcmVzdC9FdmVudG8vUG9zdFwiKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIC8vTGxhbWFkbyBhbCBzZXJ2aWNpbyBSRVNUIFwicG9zdFwiICBcclxuICBwb3N0UXVvdGUodXN1YXJpbzogdHRjdFBlcnNvbmEpIHtcclxuICAgIHZhciB0dGN0UGVyc29uYSA9IFt1c3VhcmlvXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0dGN0UGVyc29uYSlcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBcInJlcXVlc3RcIjpcclxuICAgICAge1xyXG4gICAgICAgIFwiaXBjVXN1YXJpb1wiOiB1c3VhcmlvLmNVc3VhcmlvLFxyXG4gICAgICAgIFwiaXBjQ29udHJhc2VuYVwiOiB1c3VhcmlvLmNDb250cmFzZW5hXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfc2dTZXNpb25fZ2VuXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcInJlcXVlc3RcIjpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlwY1VzdWFyaW9cIjogdXN1YXJpby5jVXN1YXJpbyxcclxuICAgICAgICAgIFwiaXBjQ29udHJhc2VuYVwiOiB1c3VhcmlvLmNDb250cmFzZW5hXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcblxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGxSZXN1bHRhZG8pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplKTtcclxuICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgYWxlcnQoXCJVc3VhcmlvIHkvbyBjb250cmFzZcOxYSBpbmNvcnJlY3Rvc1wiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvY2F0ZWdvcmlhXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==