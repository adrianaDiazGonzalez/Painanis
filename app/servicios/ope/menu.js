"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var MenuService = (function () {
    //constructor del http para los servicios REST
    function MenuService(http) {
        this.http = http;
    }
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBSXJDLElBQWEsV0FBVztJQUVwQiw4Q0FBOEM7SUFDOUMscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUV2QyxrQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLFdBQVcsQ0FLdkI7QUFMWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIHtcclxuXHJcbiAgICAvL2NvbnN0cnVjdG9yIGRlbCBodHRwIHBhcmEgbG9zIHNlcnZpY2lvcyBSRVNUXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxufSJdfQ==