"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var PersonaService = (function () {
    //constructor del http para los servicios REST y del ruteo
    function PersonaService(http, router) {
        this.http = http;
        this.router = router;
    }
    //Llamado al servicio REST "post"
    PersonaService.prototype.postQuote = function (persona) {
        var _this = this;
        var tt_ctPersona = [persona];
        console.log(JSON.stringify({
            "request": {
                "dsPersona": { tt_ctPersona: tt_ctPersona }
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen", JSON.stringify({ "request": { "dsPersona": { tt_ctPersona: tt_ctPersona } } }), { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
            if (result.response.opcMensaje != "") {
                alert("El usuario ya existe");
            }
            else {
                _this.router.navigate(["ope/categoria"]);
            }
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return PersonaService;
}());
PersonaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], PersonaService);
exports.PersonaService = PersonaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcnNvbmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLDBDQUF5QztBQUd6QyxJQUFhLGNBQWM7SUFDdkIsMERBQTBEO0lBQzFELHdCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDM0QsaUNBQWlDO0lBQ2pDLGtDQUFTLEdBQVQsVUFBVSxPQUFnQjtRQUExQixpQkE4QkM7UUE3QkcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkIsU0FBUyxFQUNUO2dCQUNJLFdBQVcsRUFDWCxFQUFFLFlBQVksY0FBQSxFQUFFO2FBQ25CO1NBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUVBQW1FLEVBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNoRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXhDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdpQixXQUFJLEVBQWtCLGVBQU07R0FGN0MsY0FBYyxDQW1DMUI7QUFuQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmFTZXJ2aWNlIHtcclxuICAgIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1QgeSBkZWwgcnV0ZW9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcInBvc3RcIlxyXG4gICAgcG9zdFF1b3RlKHBlcnNvbmE6IFBlcnNvbmEpIHtcclxuICAgICAgICB2YXIgdHRfY3RQZXJzb25hID0gW3BlcnNvbmFdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJyZXF1ZXN0XCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZHNQZXJzb25hXCI6XHJcbiAgICAgICAgICAgICAgICB7IHR0X2N0UGVyc29uYSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RQZXJzb25hX2dlblwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiOiB7IFwiZHNQZXJzb25hXCI6IHsgdHRfY3RQZXJzb25hIH0gfSB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGxSZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFbCB1c3VhcmlvIHlhIGV4aXN0ZVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==