"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
//Exportación de la clase usuario
var ValidaService = (function () {
    //constructor del http para los servicios REST, y el rouer para poder pasar a otras pantallas
    function ValidaService(router, http) {
        this.router = router;
        this.http = http;
    }
    //Llamado al servicio REST "get"
    ValidaService.prototype.getQuote = function (ipcCP) {
        var _this = this;
        var retorno;
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            //Condicion del resultado de la busqueda de los codigos postales
            if (result.response.opcMensaje != "") {
                alert(result.response.opcMensaje);
            }
            else {
                _this.router.navigate(["sg/registro"]);
            }
        }, function (error) {
            console.log("ERROR: ", error);
            retorno = error;
        });
    };
    return ValidaService;
}());
ValidaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], ValidaService);
exports.ValidaService = ValidaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLDBDQUF5QztBQUV6Qyx1Q0FBcUM7QUFDckMsaUNBQWlDO0FBR2pDLElBQWEsYUFBYTtJQUd4Qiw2RkFBNkY7SUFDN0YsdUJBQTJCLE1BQWMsRUFBUyxJQUFVO1FBQWpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVoRSxnQ0FBZ0M7SUFDMUIsZ0NBQVEsR0FBUixVQUFTLEtBQWE7UUFBdEIsaUJBcUJLO1FBcEJILElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQ3ZGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLGdFQUFnRTtZQUMvRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FDbkMsQ0FBQztnQkFDQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNuQyxDQUFDO1lBQ0EsSUFBSSxDQUFBLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDYixvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUt3QixlQUFNLEVBQWUsV0FBSTtHQUpqRCxhQUFhLENBNkJ6QjtBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG4vL0V4cG9ydGFjacOzbiBkZSBsYSBjbGFzZSB1c3VhcmlvXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGFTZXJ2aWNlXHJcbiB7XHJcblxyXG4gIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1QsIHkgZWwgcm91ZXIgcGFyYSBwb2RlciBwYXNhciBhIG90cmFzIHBhbnRhbGxhc1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuICBcclxuICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcImdldFwiXHJcbiAgICAgICAgZ2V0UXVvdGUoaXBjQ1A6IHN0cmluZykge1xyXG4gICAgICAgICAgbGV0IHJldG9ybm87XHJcbiAgICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgICBoZWFkZXJzLmFwcGVuZChcImlwY0NQXCIsIGlwY0NQKTtcclxuICAgICAgICAgIC8vbGxhbWEgYWwgc2VydmljaW8gUkVTVFxyXG4gICAgICAgICAgdGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsXHJcbiAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvL0NvbmRpY2lvbiBkZWwgcmVzdWx0YWRvIGRlIGxhIGJ1c3F1ZWRhIGRlIGxvcyBjb2RpZ29zIHBvc3RhbGVzXHJcbiAgICAgICAgICAgICBpZihyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvcmVnaXN0cm9cIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXRvcm5vID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICBcclxufSBcclxuICJdfQ==