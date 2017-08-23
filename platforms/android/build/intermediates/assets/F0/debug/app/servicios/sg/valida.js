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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMsdUNBQXFDO0FBQ3JDLHVCQUF1QjtBQUV2QixJQUFhLGFBQWE7SUFFeEIsNkZBQTZGO0lBQzdGLHVCQUEyQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbEUsZ0NBQWdDO0lBQ2hDLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQXRCLGlCQW9CQztRQW5CQyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0Isd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHlFQUF5RSxFQUNyRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixnRUFBZ0U7WUFDaEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FJd0IsZUFBTSxFQUFnQixXQUFJO0dBSGxELGFBQWEsQ0EyQnpCO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnRhY2lvbmVzIGRlIHJlY3Vyc29zIGEgdXRpbGl6YXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuLy9FeHBvcnRhY2nDs24gZGUgY2xhc2VzXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZhbGlkYVNlcnZpY2Uge1xyXG5cclxuICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNULCB5IGVsIHJvdWVyIHBhcmEgcG9kZXIgcGFzYXIgYSBvdHJhcyBwYW50YWxsYXNcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJnZXRcIlxyXG4gIGdldFF1b3RlKGlwY0NQOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXRvcm5vO1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJpcGNDUFwiLCBpcGNDUCk7XHJcbiAgICAvL2xsYW1hIGFsIHNlcnZpY2lvIFJFU1RcclxuICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RQYXJhbWV0cm9zU2lzX2dlblwiLFxyXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAvL0NvbmRpY2lvbiBkZWwgcmVzdWx0YWRvIGRlIGxhIGJ1c3F1ZWRhIGRlIGxvcyBjb2RpZ29zIHBvc3RhbGVzXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplICE9IFwiXCIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiQ29kaWdvIFBvc3RhbCBubyB2YWxpZG9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2cvcGVyc29uYVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgICAgICByZXRvcm5vID0gZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=