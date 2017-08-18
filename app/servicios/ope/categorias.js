"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var CategoriaService = (function () {
    //constructor del http para los servicios REST
    function CategoriaService(http) {
        this.http = http;
    }
    //Llamado al servicio REST "get"
    CategoriaService.prototype.getGiros = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return Promise.resolve(this.http.get("http://192.168.2.153:8810/Painanis/rest/painanis/as_ctGiro_gen"));
    };
    return CategoriaService;
}());
CategoriaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoriaService);
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmlhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3JpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBSXJDLElBQWEsZ0JBQWdCO0lBRXpCLDhDQUE4QztJQUM5QywwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLGdDQUFnQztJQUVoQyxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLGdCQUFnQixDQVk1QjtBQVpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpYVNlcnZpY2Uge1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1RcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgLy9MbGFtYWRvIGFsIHNlcnZpY2lvIFJFU1QgXCJnZXRcIlxyXG5cclxuICAgIGdldEdpcm9zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vMTkyLjE2OC4yLjE1Mzo4ODEwL1BhaW5hbmlzL3Jlc3QvcGFpbmFuaXMvYXNfY3RHaXJvX2dlblwiKSk7XHJcbiAgICB9XHJcbn0iXX0=