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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBQ3JDLDBDQUF5QztBQUl6QyxJQUFhLFdBQVc7SUFFcEIsOENBQThDO0lBQzlDLHFCQUFxQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDNUQsK0JBQVMsR0FBVCxVQUFVLFNBQW9CO1FBQTlCLGlCQThCQztRQTdCRyxJQUFJLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0IsU0FBUyxFQUNUO2dCQUNJLGFBQWEsRUFDYixFQUFFLGNBQWMsZ0JBQUEsRUFBRTthQUNyQjtTQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxFQUNoRixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3BFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQzFCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFFRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTCw0Q0FBNEM7SUFDeEMsOEJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQix3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQzFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJa0IsV0FBSSxFQUFrQixlQUFNO0dBSDlDLFdBQVcsQ0E0Q3ZCO0FBNUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRG9taWNpbGlvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvb3BlL21lbnVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgICBwb3N0UXVvdGUoZG9taWNpbGlvOiBEb21pY2lsaW8pe1xyXG4gICAgICAgIHZhciB0dF9jdERvbWljaWxpbyA9IFtkb21pY2lsaW9dO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSnNvblwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFwicmVxdWVzdFwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImRzRG9taWNpbGlvXCI6XHJcbiAgICAgICAgICAgICAgICB7IHR0X2N0RG9taWNpbGlvIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QYWluYW5pcy9yZXN0L3BhaW5hbmlzL2FzX2N0RG9taWNpbGlvX2dlblwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiOiB7IFwiZHNEb21pY2lsaW9cIjogeyB0dF9jdERvbWljaWxpbyB9IH0gfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzcG9uc2Uub3BsUmVzdWx0YWRvKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXN0b3kgZW4gcG9zdFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wib3BlL21lbnVcIl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4vL01ldG9kbyBwYXJhIGxhIHZhbGlkYWNpb24gZGUgY29kaWdvIHBvc3RhbFxyXG4gICAgdmFsaWRhY3AoaXBjQ1A6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiaXBjQ1BcIiwgaXBjQ1ApO1xyXG4gICAgICAgIC8vbGxhbWEgYWwgc2VydmljaW8gUkVTVFxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=