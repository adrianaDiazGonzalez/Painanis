"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var PersonaService = (function () {
    //constructor del http para los servicios REST y del ruteo
    function PersonaService(http, router) {
        this.http = http;
        this.router = router;
    }
    //Llamado al servicio REST "post"
    PersonaService.prototype.postQuote = function (persona) {
        var tt_ctPersona = [persona];
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        //guardamos el usuario en cada pantalla
        return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen", JSON.stringify({ "request": { "dsPersona": { tt_ctPersona: tt_ctPersona } } }), { headers: headers }));
    };
    return PersonaService;
}());
PersonaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], PersonaService);
exports.PersonaService = PersonaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmVlZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmVlZG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFFckMsMENBQXlDO0FBS3pDLElBQWEsY0FBYztJQUV2QiwwREFBMEQ7SUFDMUQsd0JBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUUzRCxpQ0FBaUM7SUFDakMsa0NBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3RCLElBQUksWUFBWSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELHVDQUF1QztRQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtRUFBbUUsRUFDckcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2hFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQ3hCLENBQUM7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FJaUIsV0FBSSxFQUFrQixlQUFNO0dBSDdDLGNBQWMsQ0FnQjFCO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9zZy9wZXJzb25hXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy9pbXBvcnRhY2lvbiBwYXJhIG1hbnRlbmVyIGxhIHNlc2lvbiBhY3RpdmFcclxuaW1wb3J0IHsgU2VzaW9uQWN0aXZhIH0gZnJvbSBcIi4uLy4uL3Nlc2lvbkFjdGl2YVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGVyc29uYVNlcnZpY2Uge1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1QgeSBkZWwgcnV0ZW9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJwb3N0XCJcclxuICAgIHBvc3RRdW90ZShwZXJzb25hOiBQZXJzb25hKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB2YXIgdHRfY3RQZXJzb25hID0gW3BlcnNvbmFdO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgLy9ndWFyZGFtb3MgZWwgdXN1YXJpbyBlbiBjYWRhIHBhbnRhbGxhXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBlcnNvbmFfZ2VuXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgXCJyZXF1ZXN0XCI6IHsgXCJkc1BlcnNvbmFcIjogeyB0dF9jdFBlcnNvbmEgfSB9IH0pLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==