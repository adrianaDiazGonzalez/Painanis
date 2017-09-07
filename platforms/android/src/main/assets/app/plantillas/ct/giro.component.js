"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var giro_1 = require("../../modelos/ct/giro");
var giro_2 = require("../../servicios/ct/giro");
var GiroComponent = (function () {
    function GiroComponent(giroService) {
        var _this = this;
        this.giroService = giroService;
        this.giro = new giro_1.Giro();
        this.giroService.getGiros().then(function (resolve) {
            _this.resultado = resolve;
            _this.resultado
                .map(function (response) { return response.json(); })
                .subscribe(function (result) {
                _this.todoList = result.response.tt_ctGiro.tt_ctGiro;
            }, function (error) {
                JSON.stringify(error);
            });
        });
        this.editar = false;
    }
    GiroComponent.prototype.newTodo = function () {
        var _this = this;
        dialogs.prompt({
            title: "Nuevo Giro",
            message: "Ingrese un nuevo giro",
            okButtonText: "Agregar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.result && r.text != "") {
                /* Objeto giro */
                _this.giro.setIdGiro = "0";
                _this.giro.setGiro = r.text;
                _this.giro.setEstGiro = true;
                _this.giroService.postQuote(_this.giro);
            }
        });
    };
    GiroComponent.prototype.editTodo = function (giro) {
        console.log(giro.toString());
        if (!this.editar)
            this.todoList.forEach(function (t) { t.editar = false; });
        this.editar = true;
        //giro.setlEditar = true;
        //LocalStorage.todos = this.todoList;
        //this.editar = true;
        //console.log(giro.toString());
    };
    GiroComponent.prototype.doneEditing = function (giro) {
        //giro.setlEditar = false;
        this.editar = false;
        //LocalStorage.todos = this.todoList;giro
    };
    GiroComponent.prototype.deleteTodo = function (giro) {
        this.giroService.deleteQuote(giro.toString());
    };
    return GiroComponent;
}());
GiroComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [giro_2.GiroService],
        templateUrl: "plantillas/ct/giro.html",
        styleUrls: ["plantillas/css/giro.css"]
    }),
    __metadata("design:paramtypes", [giro_2.GiroService])
], GiroComponent);
exports.GiroComponent = GiroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFFdkMsOENBQTZDO0FBQzdDLGdEQUFzRDtBQVV0RCxJQUFhLGFBQWE7SUFPdEIsdUJBQW9CLFdBQXdCO1FBQTVDLGlCQWdCQztRQWhCbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM1QixVQUFDLE9BQU87WUFDSixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixLQUFJLENBQUMsU0FBUztpQkFDVCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3hELENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FDSixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFPLEdBQWQ7UUFBQSxpQkFnQkM7UUFmRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxZQUFZLEVBQUUsU0FBUztZQUN2QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7U0FDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsaUJBQWlCO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLElBQVU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMscUJBQXFCO1FBQ3JCLCtCQUErQjtJQUVuQyxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsSUFBVTtRQUN6QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIseUNBQXlDO0lBQzdDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFqRVksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsa0JBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBU21DLGtCQUFXO0dBUG5DLGFBQWEsQ0FpRXpCO0FBakVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBHaXJvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbR2lyb1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGxhbnRpbGxhcy9jdC9naXJvLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvZ2lyby5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHaXJvQ29tcG9uZW50ICAvKmltcGxlbWVudHMgT25Jbml0Ki8ge1xyXG4gICAgcHVibGljIHRvZG9MaXN0OiBhbnk7XHJcbiAgICBwdWJsaWMgZWRpdGFyOiBib29sZWFuO1xyXG4gICAgZ2lybzogR2lybztcclxuICAgIHJlc3VsdGFkbztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnaXJvU2VydmljZTogR2lyb1NlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5naXJvID0gbmV3IEdpcm8oKTtcclxuICAgICAgICB0aGlzLmdpcm9TZXJ2aWNlLmdldEdpcm9zKCkudGhlbihcclxuICAgICAgICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0YWRvID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0YWRvXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0ID0gcmVzdWx0LnJlc3BvbnNlLnR0X2N0R2lyby50dF9jdEdpcm87XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3VG9kbygpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk51ZXZvIEdpcm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHVuIG51ZXZvIGdpcm9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFncmVnYXJcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5yZXN1bHQgJiYgci50ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIC8qIE9iamV0byBnaXJvICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcm8uc2V0SWRHaXJvID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcm8uc2V0R2lybyA9IHIudGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRFc3RHaXJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2lyb1NlcnZpY2UucG9zdFF1b3RlKHRoaXMuZ2lybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFRvZG8oZ2lybzogR2lybykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdpcm8udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVkaXRhcilcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKHQgPT4geyB0LmVkaXRhciA9IGZhbHNlOyB9KTtcclxuICAgICAgICB0aGlzLmVkaXRhciA9IHRydWU7XHJcbiAgICAgICAgLy9naXJvLnNldGxFZGl0YXIgPSB0cnVlO1xyXG4gICAgICAgIC8vTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgICAgICAvL3RoaXMuZWRpdGFyID0gdHJ1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdpcm8udG9TdHJpbmcoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb25lRWRpdGluZyhnaXJvOiBHaXJvKSB7XHJcbiAgICAgICAgLy9naXJvLnNldGxFZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgIC8vTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtnaXJvXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVRvZG8oZ2lybzogR2lybykge1xyXG4gICAgICAgIHRoaXMuZ2lyb1NlcnZpY2UuZGVsZXRlUXVvdGUoZ2lyby50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19