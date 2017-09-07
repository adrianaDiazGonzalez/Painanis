"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var DireccionService = (function () {
    //constructor del http para los servicios REST
    function DireccionService(http, router) {
        this.http = http;
        this.router = router;
    }
    DireccionService.prototype.postQuote = function (domicilio) {
        var tt_ctDomicilio = [domicilio];
        console.log("Json", JSON.stringify({
            "request": {
                "dsDomicilio": { tt_ctDomicilio: tt_ctDomicilio }
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return Promise.resolve(this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctDomicilio_gen", JSON.stringify({ "request": { "dsDomicilio": { tt_ctDomicilio: tt_ctDomicilio } } }), { headers: headers }));
    };
    //Metodo para la validacion de codigo postal
    DireccionService.prototype.validacp = function (ipcCP) {
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        //llama al servicio REST
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers }));
    };
    return DireccionService;
}());
DireccionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], DireccionService);
exports.DireccionService = DireccionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWNjaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlyZWNjaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQywwQ0FBeUM7QUFJekMsSUFBYSxnQkFBZ0I7SUFFekIsOENBQThDO0lBQzlDLDBCQUFxQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDNUQsb0NBQVMsR0FBVCxVQUFVLFNBQW9CO1FBQzFCLElBQUksY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixTQUFTLEVBQ1Q7Z0JBQ0ksYUFBYSxFQUNiLEVBQUUsY0FBYyxnQkFBQSxFQUFFO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUVBQXFFLEVBQ3ZHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDcEUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDeEIsQ0FBQTtJQUNMLENBQUM7SUFFTCw0Q0FBNEM7SUFDeEMsbUNBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQix3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQzFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUlrQixXQUFJLEVBQWtCLGVBQU07R0FIOUMsZ0JBQWdCLENBNkI1QjtBQTdCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEb21pY2lsaW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9vcGUvZGlyZWNjaW9uTVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlyZWNjaW9uU2VydmljZSB7XHJcbiAgICBcclxuICAgIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1RcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gICAgcG9zdFF1b3RlKGRvbWljaWxpbzogRG9taWNpbGlvKXtcclxuICAgICAgICB2YXIgdHRfY3REb21pY2lsaW8gPSBbZG9taWNpbGlvXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkpzb25cIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcInJlcXVlc3RcIjpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJkc0RvbWljaWxpb1wiOlxyXG4gICAgICAgICAgICAgICAgeyB0dF9jdERvbWljaWxpbyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QYWluYW5pcy9yZXN0L3BhaW5hbmlzL2FzX2N0RG9taWNpbGlvX2dlblwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiOiB7IFwiZHNEb21pY2lsaW9cIjogeyB0dF9jdERvbWljaWxpbyB9IH0gfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4vL01ldG9kbyBwYXJhIGxhIHZhbGlkYWNpb24gZGUgY29kaWdvIHBvc3RhbFxyXG4gICAgdmFsaWRhY3AoaXBjQ1A6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiaXBjQ1BcIiwgaXBjQ1ApO1xyXG4gICAgICAgIC8vbGxhbWEgYWwgc2VydmljaW8gUkVTVFxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=