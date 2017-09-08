"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var AtributoService = (function () {
    //constructor del http para los servicios REST
    function AtributoService(http, router) {
        this.http = http;
        this.router = router;
    }
    return AtributoService;
}());
AtributoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AtributoService);
exports.AtributoService = AtributoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRyaWJ1dG9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRyaWJ1dG9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQywwQ0FBeUM7QUFJekMsSUFBYSxlQUFlO0lBRXhCLDhDQUE4QztJQUM5Qyx5QkFBcUIsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdkQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSWtCLFdBQUksRUFBa0IsZUFBTTtHQUg5QyxlQUFlLENBTTNCO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF0cmlidXRvU2VydmljZSB7XHJcbiAgICBcclxuICAgIC8vY29uc3RydWN0b3IgZGVsIGh0dHAgcGFyYSBsb3Mgc2VydmljaW9zIFJFU1RcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgXHJcblxyXG4gICAgfVxyXG59Il19