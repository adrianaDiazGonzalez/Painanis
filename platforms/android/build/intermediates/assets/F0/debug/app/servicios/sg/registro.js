"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RegistroService = (function () {
    function RegistroService(http) {
        this.http = http;
    }
    RegistroService.prototype.postQuote = function (registro) {
        console.log("Entro al servicio del registro");
        console.log(registro);
        console.log(registro.nombre);
        console.log(registro.fechanac);
        console.log(registro.genero);
        console.log(JSON.stringify({ "request": { registro: registro } }));
    };
    return RegistroService;
}());
RegistroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegistroService);
exports.RegistroService = RegistroService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Ryby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUkvQixJQUFhLGVBQWU7SUFDeEIseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUNsQyxtQ0FBUyxHQUFULFVBQVUsUUFBa0I7UUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFHLEVBQUMsUUFBUSxVQUFBLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixlQUFlLENBZTNCO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcmVnaXN0cm9cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJvU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcbiAgICBwb3N0UXVvdGUocmVnaXN0cm86IFJlZ2lzdHJvKSB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJvIGFsIHNlcnZpY2lvIGRlbCByZWdpc3Ryb1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3Rybyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVnaXN0cm8ubm9tYnJlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3Ryby5mZWNoYW5hYyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVnaXN0cm8uZ2VuZXJvKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh7IFwicmVxdWVzdFwiIDoge3JlZ2lzdHJvfX0pKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcblxyXG4iXX0=