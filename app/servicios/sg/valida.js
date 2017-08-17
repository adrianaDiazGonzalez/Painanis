"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
//Exportación de clases
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
                alert("Codigo Postal no valido");
            }
            else {
                _this.router.navigate(["sg/persona"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMsdUNBQXFDO0FBQ3JDLHVCQUF1QjtBQUV2QixJQUFhLGFBQWE7SUFHeEIsNkZBQTZGO0lBQzdGLHVCQUEyQixNQUFjLEVBQVMsSUFBVTtRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFaEUsZ0NBQWdDO0lBQzFCLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQXRCLGlCQXFCSztRQXBCSCxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0Isd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlFQUF5RSxFQUN2RixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixnRUFBZ0U7WUFDL0QsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQ25DLENBQUM7Z0JBQ0MsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNBLElBQUksQ0FBQSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ2Isb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FLd0IsZUFBTSxFQUFlLFdBQUk7R0FKakQsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG4vL0V4cG9ydGFjacOzbiBkZSBjbGFzZXNcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhU2VydmljZVxyXG4ge1xyXG5cclxuICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNULCB5IGVsIHJvdWVyIHBhcmEgcG9kZXIgcGFzYXIgYSBvdHJhcyBwYW50YWxsYXNcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcbiAgXHJcbiAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJnZXRcIlxyXG4gICAgICAgIGdldFF1b3RlKGlwY0NQOiBzdHJpbmcpIHtcclxuICAgICAgICAgIGxldCByZXRvcm5vO1xyXG4gICAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJpcGNDUFwiLCBpcGNDUCk7XHJcbiAgICAgICAgICAvL2xsYW1hIGFsIHNlcnZpY2lvIFJFU1RcclxuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RQYXJhbWV0cm9zU2lzX2dlblwiLFxyXG4gICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy9Db25kaWNpb24gZGVsIHJlc3VsdGFkbyBkZSBsYSBidXNxdWVkYSBkZSBsb3MgY29kaWdvcyBwb3N0YWxlc1xyXG4gICAgICAgICAgICAgaWYocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUgIT0gXCJcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvZGlnbyBQb3N0YWwgbm8gdmFsaWRvXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvcGVyc29uYVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldG9ybm8gPSBlcnJvcjtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG59IFxyXG4gIl19