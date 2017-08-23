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
        console.log("Json", JSON.stringify({
            "request": {
                "dsDomicilio": { tt_ctDomicilio: tt_ctDomicilio }
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctDomicilio_gen", JSON.stringify({ "request": { "dsDomicilio": { tt_ctDomicilio: tt_ctDomicilio } } }), { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
            if (result.response.opcMensaje != "") {
                alert("estoy en post");
            }
            else {
                _this.router.navigate(["ope/menu"]);
            }
        }, function (error) {
            console.log("ERROR: ", error);
        });
        /* return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctDomicilio_gen",
             JSON.stringify({ "request": { "dsDomicilio": { tt_ctDomicilio } } }),
             { headers: headers }));*/
    };
    //Metodo para la validacion de codigo postal
    MenuService.prototype.validacp = function (ipcCP) {
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers }));
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBQ3JDLDBDQUF5QztBQUl6QyxJQUFhLFdBQVc7SUFFcEIsOENBQThDO0lBQzlDLHFCQUFxQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDNUQsK0JBQVMsR0FBVCxVQUFVLFNBQW9CO1FBQTlCLGlCQW9DQztRQW5DRyxJQUFJLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0IsU0FBUyxFQUNUO2dCQUNJLGFBQWEsRUFDYixFQUFFLGNBQWMsZ0JBQUEsRUFBRTthQUNyQjtTQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxFQUNoRixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3BFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQzFCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFFRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUdSOztzQ0FFOEI7SUFFakMsQ0FBQztJQUVMLDRDQUE0QztJQUN4Qyw4QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLHdCQUF3QjtRQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5RUFBeUUsRUFDMUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUlrQixXQUFJLEVBQWtCLGVBQU07R0FIOUMsV0FBVyxDQWtEdkI7QUFsRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEb21pY2lsaW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9vcGUvbWVudVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNUXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuICAgIHBvc3RRdW90ZShkb21pY2lsaW86IERvbWljaWxpbyl7XHJcbiAgICAgICAgdmFyIHR0X2N0RG9taWNpbGlvID0gW2RvbWljaWxpb107XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJKc29uXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJyZXF1ZXN0XCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZHNEb21pY2lsaW9cIjpcclxuICAgICAgICAgICAgICAgIHsgdHRfY3REb21pY2lsaW8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3REb21pY2lsaW9fZ2VuXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgXCJyZXF1ZXN0XCI6IHsgXCJkc0RvbWljaWxpb1wiOiB7IHR0X2N0RG9taWNpbGlvIH0gfSB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGxSZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlc3RveSBlbiBwb3N0XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJvcGUvbWVudVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIC8qIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3REb21pY2lsaW9fZ2VuXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgXCJyZXF1ZXN0XCI6IHsgXCJkc0RvbWljaWxpb1wiOiB7IHR0X2N0RG9taWNpbGlvIH0gfSB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pKTsqL1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4vL01ldG9kbyBwYXJhIGxhIHZhbGlkYWNpb24gZGUgY29kaWdvIHBvc3RhbFxyXG4gICAgdmFsaWRhY3AoaXBjQ1A6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiaXBjQ1BcIiwgaXBjQ1ApO1xyXG4gICAgICAgIC8vbGxhbWEgYWwgc2VydmljaW8gUkVTVFxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=