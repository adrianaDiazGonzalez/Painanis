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
        templateUrl: "vistas/ct/giro.html",
        styleUrls: ["vistas/css/giro.css"]
    }),
    __metadata("design:paramtypes", [giro_2.GiroService])
], GiroComponent);
exports.GiroComponent = GiroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFFdkMsOENBQTZDO0FBQzdDLGdEQUFzRDtBQVV0RCxJQUFhLGFBQWE7SUFPdEIsdUJBQW9CLFdBQXdCO1FBQTVDLGlCQWdCQztRQWhCbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM1QixVQUFDLE9BQU87WUFDSixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixLQUFJLENBQUMsU0FBUztpQkFDVCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNoQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3hELENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FDSixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFPLEdBQWQ7UUFBQSxpQkFnQkM7UUFmRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxZQUFZLEVBQUUsU0FBUztZQUN2QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7U0FDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsaUJBQWlCO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLElBQVU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMscUJBQXFCO1FBQ3JCLCtCQUErQjtJQUVuQyxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsSUFBVTtRQUN6QiwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIseUNBQXlDO0lBQzdDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFqRVksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsa0JBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ3JDLENBQUM7cUNBU21DLGtCQUFXO0dBUG5DLGFBQWEsQ0FpRXpCO0FBakVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBHaXJvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbR2lyb1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlzdGFzL2N0L2dpcm8uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aXN0YXMvY3NzL2dpcm8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyb0NvbXBvbmVudCAgLyppbXBsZW1lbnRzIE9uSW5pdCovIHtcclxuICAgIHB1YmxpYyB0b2RvTGlzdDogYW55O1xyXG4gICAgcHVibGljIGVkaXRhcjogYm9vbGVhbjtcclxuICAgIGdpcm86IEdpcm87XHJcbiAgICByZXN1bHRhZG87XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2lyb1NlcnZpY2U6IEdpcm9TZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2lybyA9IG5ldyBHaXJvKCk7XHJcbiAgICAgICAgdGhpcy5naXJvU2VydmljZS5nZXRHaXJvcygpLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdGFkbyA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdCA9IHJlc3VsdC5yZXNwb25zZS50dF9jdEdpcm8udHRfY3RHaXJvO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuZWRpdGFyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld1RvZG8oKSB7XHJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOdWV2byBHaXJvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB1biBudWV2byBnaXJvXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZ3JlZ2FyXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XHJcbiAgICAgICAgfSkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIucmVzdWx0ICYmIHIudGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBPYmpldG8gZ2lybyAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naXJvLnNldElkR2lybyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naXJvLnNldEdpcm8gPSByLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcm8uc2V0RXN0R2lybyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcm9TZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLmdpcm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvKGdpcm86IEdpcm8pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhnaXJvLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGlmICghdGhpcy5lZGl0YXIpXHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCh0ID0+IHsgdC5lZGl0YXIgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5lZGl0YXIgPSB0cnVlO1xyXG4gICAgICAgIC8vZ2lyby5zZXRsRWRpdGFyID0gdHJ1ZTtcclxuICAgICAgICAvL0xvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICAgICAgLy90aGlzLmVkaXRhciA9IHRydWU7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnaXJvLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9uZUVkaXRpbmcoZ2lybzogR2lybykge1xyXG4gICAgICAgIC8vZ2lyby5zZXRsRWRpdGFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAvL0xvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7Z2lyb1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVUb2RvKGdpcm86IEdpcm8pIHtcclxuICAgICAgICB0aGlzLmdpcm9TZXJ2aWNlLmRlbGV0ZVF1b3RlKGdpcm8udG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==