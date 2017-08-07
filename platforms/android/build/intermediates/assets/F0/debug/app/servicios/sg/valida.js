"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
//Exportación de la clase usuario
var ValidaService = (function () {
    //constructor del http para los servicios REST
    function ValidaService(http) {
        this.http = http;
    }
    //Llamado al servicio REST "get"
    ValidaService.prototype.getQuote = function (ipcCP) {
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        this.http.get("192.168.2.153:8810/Painanis/rest/painanis/validacp", { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return ValidaService;
}());
ValidaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ValidaService);
exports.ValidaService = ValidaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlDQUFpQztBQUVqQyxJQUFhLGFBQWE7SUFFeEIsOENBQThDO0lBQzlDLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsZ0NBQWdDO0lBQzlCLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDeEYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBSWUsV0FBSTtHQUhuQixhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuLy9FeHBvcnRhY2nDs24gZGUgbGEgY2xhc2UgdXN1YXJpb1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGFTZXJ2aWNlIHtcclxuXHJcbiAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuICBcclxuICAvL0xsYW1hZG8gYWwgc2VydmljaW8gUkVTVCBcImdldFwiXHJcbiAgICBnZXRRdW90ZShpcGNDUDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiaXBjQ1BcIiwgaXBjQ1ApO1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KFwiMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvdmFsaWRhY3BcIiwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=