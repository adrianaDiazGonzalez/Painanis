"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var core_1 = require("@angular/core");
var registro_1 = require("../../modelos/sg/registro");
var registro_2 = require("../../servicios/sg/registro");
//Declaración de los componentes de la vista
var RegistroComponent = (function () {
    function RegistroComponent(registroService) {
        this.registroService = registroService;
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        this.registro = new registro_1.Registro();
        this.registro.genero = false;
    }
    RegistroComponent.prototype.submit = function () {
        console.log("HOLA");
        this.registroService.postQuote(this.registro);
    };
    RegistroComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        }
        else {
            this.secondSwitchState = true;
        }
    };
    RegistroComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;
    };
    RegistroComponent.prototype.onDateChanged = function (args) {
        /*console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    };
    RegistroComponent.prototype.onDayChanged = function (args) {
        /*console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    };
    RegistroComponent.prototype.onMonthChanged = function (args) {
        /* console.log("Month changed");
         console.log("New value: " + args.value);
         console.log("Old value: " + args.oldValue);*/
    };
    RegistroComponent.prototype.onYearChanged = function (args) {
        /*   console.log("Year changed");
           console.log("New value: " + args.value);
           console.log("Old value: " + args.oldValue);*/
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [registro_2.RegistroService],
        templateUrl: "plantillas/sg/registro.html",
        styleUrls: ["plantillas/css/registro.css"]
    }),
    __metadata("design:paramtypes", [registro_2.RegistroService])
], RegistroComponent);
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUEwQztBQUMxQyxzREFBcUQ7QUFDckQsd0RBQThEO0FBTzlELDRDQUE0QztBQVE1QyxJQUFhLGlCQUFpQjtJQUsxQiwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSjdDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFJNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZDs7cURBRTZDO0lBQ2pELENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiOztxREFFNkM7SUFDakQsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2hCOztzREFFOEM7SUFDakQsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2pCOzt3REFFZ0Q7SUFDakQsQ0FBQztJQUdMLHdCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxpQkFBaUI7SUFQN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFlLENBQUM7UUFDNUIsV0FBVyxFQUFDLDZCQUE2QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMzQyxDQUFDO3FDQU91QywwQkFBZTtHQUwzQyxpQkFBaUIsQ0F3RDdCO0FBeERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YWNpb25lcyBkZSByZWN1cnNvcyBhIHV0aWxpemFyXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3Mvc2cvcmVnaXN0cm9cIjtcclxuaW1wb3J0IHsgUmVnaXN0cm9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9zZy9yZWdpc3Ryb1wiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcblxyXG5cclxuLy9EZWNsYXJhY2nDs24gZGUgbG9zIGNvbXBvbmVudGVzIGRlIGxhIHZpc3RhXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1JlZ2lzdHJvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwbGFudGlsbGFzL3NnL3JlZ2lzdHJvLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL3JlZ2lzdHJvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJvQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgcmVnaXN0cm86IFJlZ2lzdHJvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaXN0cm9TZXJ2aWNlOiBSZWdpc3Ryb1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJvID0gbmV3IFJlZ2lzdHJvKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Ryby5nZW5lcm89ZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSE9MQVwiKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJvU2VydmljZS5wb3N0UXVvdGUodGhpcy5yZWdpc3Rybyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IHRydWU7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTcwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJEYXRlIGNoYW5nZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgdmFsdWU6IFwiICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7Ki9cclxuICAgIH1cclxuXHJcbiAgICBvbkRheUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJEYXkgY2hhbmdlZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgIC8qIGNvbnNvbGUubG9nKFwiTW9udGggY2hhbmdlZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNoYW5nZWQoYXJncykge1xyXG4gICAgIC8qICAgY29uc29sZS5sb2coXCJZZWFyIGNoYW5nZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgdmFsdWU6IFwiICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7Ki9cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==