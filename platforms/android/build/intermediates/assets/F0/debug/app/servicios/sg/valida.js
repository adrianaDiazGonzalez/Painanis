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
    //constructor del http para los servicios REST
    function ValidaService(router, http) {
        this.router = router;
        this.http = http;
    }
    //Llamado al servicio REST "get"
    //getQuote(ipcCP: string) :Promise <string>{
    ValidaService.prototype.getQuote = function (ipcCP) {
        var retorno;
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log("json", JSON.stringify(result));
            retorno = result;
            console.log("retorno", retorno);
        }, function (error) {
            console.log("ERROR: ", error);
            retorno = error;
        });
        return Promise.resolve(retorno);
    };
    return ValidaService;
}());
ValidaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], ValidaService);
exports.ValidaService = ValidaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLDBDQUF5QztBQUV6Qyx1Q0FBcUM7QUFDckMsaUNBQWlDO0FBR2pDLElBQWEsYUFBYTtJQUV4Qiw4Q0FBOEM7SUFDOUMsdUJBQTJCLE1BQWMsRUFBUyxJQUFVO1FBQWpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVoRSxnQ0FBZ0M7SUFFNUIsNENBQTRDO0lBQzFDLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBRXRCLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5RUFBeUUsRUFDdEYsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDckIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFaEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdCLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFbEIsQ0FBQyxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUcvQixDQUFDO0lBQ1gsb0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FJd0IsZUFBTSxFQUFlLFdBQUk7R0FIakQsYUFBYSxDQThCekI7QUE5Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuLy9FeHBvcnRhY2nDs24gZGUgbGEgY2xhc2UgdXN1YXJpb1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhU2VydmljZSB7XHJcblxyXG4gIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1RcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcbiAgXHJcbiAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJnZXRcIlxyXG4gICAgXHJcbiAgICAgIC8vZ2V0UXVvdGUoaXBjQ1A6IHN0cmluZykgOlByb21pc2UgPHN0cmluZz57XHJcbiAgICAgICAgZ2V0UXVvdGUoaXBjQ1A6IHN0cmluZykgOlByb21pc2UgPHtpcGNDUDpzdHJpbmd9PntcclxuICAgICAgXHJcbiAgICAgICAgbGV0IHJldG9ybm87XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiaXBjQ1BcIiwgaXBjQ1ApO1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovLzE5Mi4xNjguMi4xNTM6ODgxMC9QYWluYW5pcy9yZXN0L3BhaW5hbmlzL2FzX2N0UGFyYW1ldHJvc1Npc19nZW5cIixcclxuICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJqc29uXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgcmV0b3JubyA9IHJlc3VsdDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3Jub1wiLCByZXRvcm5vKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICByZXRvcm5vID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJldG9ybm8pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxufSBcclxuICJdfQ==