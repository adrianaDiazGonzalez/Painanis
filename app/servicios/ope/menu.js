"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var MenuService = (function () {
    //constructor del http para los servicios REST
    function MenuService(http, router) {
        this.http = http;
        this.router = router;
    }
    MenuService.prototype.postQuote = function (domicilio) {
        var _this = this;
        var tt_ctDomicilio = [domicilio];
        console.log(JSON.stringify({
            "request": {
                "dsDomicilio": { tt_ctDomicilio: tt_ctDomicilio }
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctPersona_gen", JSON.stringify({ "request": { "dsPersona": { tt_ctDomicilio: tt_ctDomicilio } } }), { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
            if (result.response.opcMensaje != "") {
                alert("Datos incorrectos");
            }
            else {
                alert("Desea ingresar otra dirección ");
                _this.router.navigate(["ope/menu"]);
            }
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    MenuService.prototype.validacp = function (ipcCP) {
        var retorno;
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            //Condicion del resultado de la busqueda de los codigos postales
            if (result.response.opcMensaje != "") {
                alert("Codigo Postal no valido");
                return;
            }
        }, function (error) {
            console.log("ERROR: ", error);
            retorno = error;
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBQ3JDLDBDQUF5QztBQUl6QyxJQUFhLFdBQVc7SUFFcEIsOENBQThDO0lBQzlDLHFCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDM0QsK0JBQVMsR0FBVCxVQUFVLFNBQW9CO1FBQTlCLGlCQStCQztRQTlCRyxJQUFJLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QixTQUFTLEVBQ1Q7Z0JBQ0ksYUFBYSxFQUNiLEVBQUUsY0FBYyxnQkFBQSxFQUFFO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUVBQW1FLEVBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbEUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQ25GLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLGdFQUFnRTtZQUNoRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUksRUFBa0IsZUFBTTtHQUg3QyxXQUFXLENBd0R2QjtBQXhEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERvbWljaWxpbyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL29wZS9tZW51XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XHJcblxyXG4gICAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuICAgIHBvc3RRdW90ZShkb21pY2lsaW86IERvbWljaWxpbykge1xyXG4gICAgICAgIHZhciB0dF9jdERvbWljaWxpbyA9IFtkb21pY2lsaW9dO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJyZXF1ZXN0XCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZHNEb21pY2lsaW9cIjpcclxuICAgICAgICAgICAgICAgIHsgdHRfY3REb21pY2lsaW8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QYWluYW5pcy9yZXN0L3BhaW5hbmlzL2FzX2N0UGVyc29uYV9nZW5cIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBcInJlcXVlc3RcIjogeyBcImRzUGVyc29uYVwiOiB7IHR0X2N0RG9taWNpbGlvIH0gfSB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGxSZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJEYXRvcyBpbmNvcnJlY3Rvc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGVzZWEgaW5ncmVzYXIgb3RyYSBkaXJlY2Npw7NuIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvbWVudVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYWNwKGlwY0NQOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmV0b3JubztcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJpcGNDUFwiLCBpcGNDUCk7XHJcbiAgICAgICAgLy9sbGFtYSBhbCBzZXJ2aWNpbyBSRVNUXHJcbiAgICAgICAgdGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9Db25kaWNpb24gZGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYSBkZSBsb3MgY29kaWdvcyBwb3N0YWxlc1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkNvZGlnbyBQb3N0YWwgbm8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8gPSBlcnJvcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==