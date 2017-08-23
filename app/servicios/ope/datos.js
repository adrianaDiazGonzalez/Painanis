"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var DatosService = (function () {
    //constructor del http para los servicios REST
    function DatosService(http, router) {
        this.http = http;
        this.router = router;
    }
    return DatosService;
}());
DatosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], DatosService);
exports.DatosService = DatosService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsMENBQXlDO0FBSXpDLElBQWEsWUFBWTtJQUVyQiw4Q0FBOEM7SUFDOUMsc0JBQXFCLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXZELENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQUlrQixXQUFJLEVBQWtCLGVBQU07R0FIOUMsWUFBWSxDQU14QjtBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRvc1NlcnZpY2Uge1xyXG4gICAgXHJcbiAgICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNUXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IFxyXG5cclxuICAgIH1cclxufSJdfQ==