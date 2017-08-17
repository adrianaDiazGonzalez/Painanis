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
        console.log(JSON.stringify({ "request": { "dsPersona": { tt_ctPersona: tt_ctPersona }
            } }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcnNvbmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLDBDQUF5QztBQUd6QyxJQUFhLGNBQWM7SUFDdEIsMERBQTBEO0lBQzNELHdCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFDMUQsaUNBQWlDO0lBQ2pDLGtDQUFTLEdBQVQsVUFBVSxPQUFnQjtRQUExQixpQkE0QkM7UUEzQkcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQ3RDLEVBQUMsV0FBVyxFQUNYLEVBQUMsWUFBWSxjQUFBLEVBQUM7YUFDZCxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxFQUNsRixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsWUFBWSxjQUFBLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFDckQsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FDbkMsQ0FBQztnQkFDRyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSSxFQUFrQixlQUFNO0dBRjdDLGNBQWMsQ0FpQzFCO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBQZXJzb25hIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcGVyc29uYVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hU2VydmljZSB7XHJcbiAgICAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVCB5IGRlbCBydXRlb1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gICAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJwb3N0XCJcclxuICAgIHBvc3RRdW90ZShwZXJzb25hOiBQZXJzb25hKSB7XHJcbiAgICAgICAgdmFyIHR0X2N0UGVyc29uYSA9IFtwZXJzb25hXTtcclxuICAgICAgICBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoeyBcInJlcXVlc3RcIiA6IFxyXG4gICAgICAgICB7XCJkc1BlcnNvbmFcIiA6XHJcbiAgICAgICAgICB7dHRfY3RQZXJzb25hfVxyXG4gICAgICAgICB9fSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RQZXJzb25hX2dlblwiLCBcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiIDp7XCJkc1BlcnNvbmFcIiA6e3R0X2N0UGVyc29uYX19fSksIFxyXG4gICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGxSZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRWwgdXN1YXJpbyB5YSBleGlzdGVcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL2NhdGVnb3JpYVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19