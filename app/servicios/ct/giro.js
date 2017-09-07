"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
//Exportación de la clase usuario
var GiroService = (function () {
    //constructor del http para los servicios REST
    function GiroService(http) {
        this.http = http;
    }
    //Llamado al servicio REST "get"
    GiroService.prototype.getGiros = function () {
        // let headers = new Headers();
        //headers.append("Content-Type", "application/json");
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen"));
    };
    //Llamado al servicio REST "post"
    GiroService.prototype.postQuote = function (giro) {
        var tt_ctGiro = [giro];
        console.log(JSON.stringify({
            "request": {
                "dtGiro": { tt_ctGiro: tt_ctGiro }
            }
        }));
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen", JSON.stringify({
            "request": {
                "dtGiro": { tt_ctGiro: tt_ctGiro }
            }
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
    //Llamado al servicio REST "delete"
    GiroService.prototype.deleteQuote = function (ipiGiro) {
        console.log(ipiGiro);
        var headers = new http_1.Headers();
        headers.append("ipiGiro", ipiGiro);
        this.http.delete("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen", "ipiGiro = " + ipiGiro)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            console.log(result.response.oplResultado);
            console.log(result.response.opcMensaje);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return GiroService;
}());
GiroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GiroService);
exports.GiroService = GiroService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdpcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsaUNBQWlDO0FBRWpDLElBQWEsV0FBVztJQUV0Qiw4Q0FBOEM7SUFDOUMscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUdsQyxnQ0FBZ0M7SUFDaEMsOEJBQVEsR0FBUjtRQUNDLCtCQUErQjtRQUM5QixxREFBcUQ7UUFDckQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsK0JBQVMsR0FBVCxVQUFVLElBQVU7UUFDbEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekIsU0FBUyxFQUNUO2dCQUNFLFFBQVEsRUFDUixFQUFFLFNBQVMsV0FBQSxFQUFFO2FBQ2Q7U0FFRixDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsRUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFNBQVMsRUFDVDtnQkFDRSxRQUFRLEVBQ1IsRUFBRSxTQUFTLFdBQUEsRUFBRTthQUNkO1NBQ0YsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBRXBCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxpQ0FBVyxHQUFYLFVBQVksT0FBZTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0VBQWdFLEVBQy9FLFlBQVksR0FBRyxPQUFPLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDO0FBL0RZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJZSxXQUFJO0dBSG5CLFdBQVcsQ0ErRHZCO0FBL0RZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEdpcm8gfWZyb20gXCIuLi8uLi9tb2RlbG9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbi8vRXhwb3J0YWNpw7NuIGRlIGxhIGNsYXNlIHVzdWFyaW9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2lyb1NlcnZpY2Uge1xyXG5cclxuICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNUXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBcclxuICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcImdldFwiXHJcbiAgZ2V0R2lyb3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgLy8gbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgLy9oZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RHaXJvX2dlblwiKSk7XHJcbiAgfVxyXG5cclxuICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcInBvc3RcIlxyXG4gIHBvc3RRdW90ZShnaXJvOiBHaXJvKSB7XHJcbiAgICB2YXIgdHRfY3RHaXJvID0gW2dpcm9dO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBcInJlcXVlc3RcIjpcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRHaXJvXCI6XHJcbiAgICAgICAgeyB0dF9jdEdpcm8gfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSkpO1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RHaXJvX2dlblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgXCJyZXF1ZXN0XCI6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJkdEdpcm9cIjpcclxuICAgICAgICAgIHsgdHRfY3RHaXJvIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuXHJcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wbFJlc3VsdGFkbyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcImRlbGV0ZVwiXHJcbiAgZGVsZXRlUXVvdGUoaXBpR2lybzogc3RyaW5nKXtcclxuICAgIGNvbnNvbGUubG9nKGlwaUdpcm8pO1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJpcGlHaXJvXCIsIGlwaUdpcm8pO1xyXG4gICAgdGhpcy5odHRwLmRlbGV0ZShcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdEdpcm9fZ2VuXCIsICAgICAgXHJcbiAgICAgIFwiaXBpR2lybyA9IFwiICsgaXBpR2lybylcclxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzcG9uc2Uub3BsUmVzdWx0YWRvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzcG9uc2Uub3BjTWVuc2FqZSk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgICB9KTsgICAgXHJcbiAgfVxyXG5cclxufSJdfQ==