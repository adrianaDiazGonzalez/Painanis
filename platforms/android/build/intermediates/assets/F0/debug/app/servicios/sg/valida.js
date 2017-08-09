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
        console.log("parametro:", ipcCP);
        var retorno;
        var headers = new http_1.Headers();
        headers.append("ipcCP", ipcCP);
        this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctParametrosSis_gen", { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log(JSON.stringify(result));
            /*if(result.response.opcMensaje)
              {
                alert(result.response.opcMensaje)
              }*/
            retorno = result;
            console.log(retorno);
        }, function (error) {
            console.log("ERROR: ", error);
            retorno = error;
        });
        return retorno;
    };
    return ValidaService;
}());
ValidaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ValidaService);
exports.ValidaService = ValidaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlDQUFpQztBQUVqQyxJQUFhLGFBQWE7SUFFeEIsOENBQThDO0lBQzlDLHVCQUEyQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFekMsZ0NBQWdDO0lBQzlCLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxDQUFDO1FBQ1YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5RUFBeUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUM3RyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQzs7O2lCQUdLO1lBRUgsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QixPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUVyQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FJc0IsV0FBSTtHQUgxQixhQUFhLENBOEJ6QjtBQTlCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuLy9FeHBvcnRhY2nDs24gZGUgbGEgY2xhc2UgdXN1YXJpb1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGFTZXJ2aWNlIHtcclxuXHJcbiAgLy9jb25zdHJ1Y3RvciBkZWwgaHR0cCBwYXJhIGxvcyBzZXJ2aWNpb3MgUkVTVFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcbiAgXHJcbiAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJnZXRcIlxyXG4gICAgZ2V0UXVvdGUoaXBjQ1A6IHN0cmluZykgOlByb21pc2UgPHN0cmluZz57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1ldHJvOlwiLCBpcGNDUCk7XHJcbiAgICAgIGxldCByZXRvcm5vO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcImlwY0NQXCIsIGlwY0NQKTtcclxuICAgICAgdGhpcy5odHRwLmdldChcImh0dHA6Ly8xOTIuMTY4LjIuMTUzOjg4MTAvUGFpbmFuaXMvcmVzdC9wYWluYW5pcy9hc19jdFBhcmFtZXRyb3NTaXNfZ2VuXCIsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAvKmlmKHJlc3VsdC5yZXNwb25zZS5vcGNNZW5zYWplKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYWxlcnQocmVzdWx0LnJlc3BvbnNlLm9wY01lbnNhamUpXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldG9ybm8gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldG9ybm8pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgIHJldG9ybm8gPSBlcnJvcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmV0b3JubztcclxuXHJcbiAgICB9XHJcbn1cclxuICJdfQ==