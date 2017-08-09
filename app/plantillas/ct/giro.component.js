"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var local_storage_1 = require("./local-storage");
var giro_1 = require("../../modelos/ct/giro");
var giro_2 = require("../../servicios/ct/giro");
var GiroComponent = (function () {
    function GiroComponent(giroService) {
        this.giroService = giroService;
        this.giro = new giro_1.Giro();
        //this.giroService.getQuote();
        //console.log("Vista",this.resultado.response);
        this.getGiros();
        console.log(this.resultado);
        this.todoList = new Array();
        this.isEditing = false;
    }
    GiroComponent.prototype.getGiros = function () {
        var _this = this;
        this.giroService.getQuoteRetardo()
            .then(function (giros) {
            _this.resultado = giros;
        });
    };
    GiroComponent.prototype.ngOnInit = function () {
        var _this = this;
        local_storage_1.LocalStorage.todos.forEach(function (e) {
            _this.todoList.push(new Todo(e.todoName, e.isDone, e.isEditing));
        });
    };
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
                console.log(_this.giro.getGiro);
                _this.giroService.postQuote(_this.giro);
                _this.todoList.push(new Todo(r.text));
                local_storage_1.LocalStorage.todos = _this.todoList;
            }
        });
    };
    GiroComponent.prototype.deleteTodo = function (todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        local_storage_1.LocalStorage.todos = this.todoList;
    };
    GiroComponent.prototype.editTodo = function (todo) {
        if (this.isEditing)
            this.todoList.forEach(function (t) { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
        local_storage_1.LocalStorage.todos = this.todoList;
    };
    GiroComponent.prototype.doneEditing = function (todo) {
        todo.editing = false;
        this.isEditing = false;
        local_storage_1.LocalStorage.todos = this.todoList;
    };
    GiroComponent.prototype.toggleDone = function (todo) {
        todo.done = !todo.done;
        local_storage_1.LocalStorage.todos = this.todoList;
    };
    return GiroComponent;
}());
GiroComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [giro_2.GiroService],
        templateUrl: "plantillas/ct/vista.html",
        styleUrls: ["plantillas/css/giro.css"]
    }),
    __metadata("design:paramtypes", [giro_2.GiroService])
], GiroComponent);
exports.GiroComponent = GiroComponent;
var Todo = (function () {
    function Todo(name, done, isEditing) {
        this.todoName = name;
        this.done = done ? done : false;
        this.isEditing = isEditing ? isEditing : false;
    }
    Object.defineProperty(Todo.prototype, "done", {
        get: function () {
            return this.isDone;
        },
        set: function (done) {
            this.isDone = done;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "name", {
        get: function () {
            return this.todoName;
        },
        set: function (newName) {
            this.todoName = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "editing", {
        get: function () {
            return this.isEditing;
        },
        set: function (newEditing) {
            this.isEditing = newEditing;
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3QyxnREFBc0Q7QUFZdEQsSUFBYSxhQUFhO0lBTXRCLHVCQUFxQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBQzlCLCtDQUErQztRQUMvQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRTNCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUM3QixJQUFJLENBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7SUFFVixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNEJBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sK0JBQU8sR0FBZDtRQUFBLGlCQXNCQztRQXJCRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxZQUFZLEVBQUUsU0FBUztZQUN2QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7U0FDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsaUJBQWlCO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBSSxHQUFHLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyw0QkFBWSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQiw0QkFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLElBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsNEJBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsSUFBVTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2Qiw0QkFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLDRCQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQWpGRCxJQWlGQztBQWpGWSxhQUFhO0lBVHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUcsQ0FBQyxrQkFBVyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7UUFFckMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FFekMsQ0FBQztxQ0FRcUMsa0JBQVc7R0FOckMsYUFBYSxDQWlGekI7QUFqRlksc0NBQWE7QUFtRjFCO0lBS0ksY0FBWSxJQUFZLEVBQUUsSUFBYyxFQUFFLFNBQW1CO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0JBQVcsc0JBQUk7YUFJZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFORCxVQUFnQixJQUFhO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsc0JBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFnQixPQUFlO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUpBO0lBTUQsc0JBQVcseUJBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUYsVUFBbUIsVUFBbUI7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFLTCxXQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgR2lybyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgR2lyb1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzIDogW0dpcm9TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL2N0L3Zpc3RhLmh0bWxcIlxyXG4gICxcclxuICAgIHN0eWxlVXJsczogW1wicGxhbnRpbGxhcy9jc3MvZ2lyby5jc3NcIl1cclxuICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdpcm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHRvZG9MaXN0OiBBcnJheTxUb2RvPjtcclxuICAgIHB1YmxpYyBpc0VkaXRpbmc6IGJvb2xlYW47XHJcbiAgICBnaXJvOiBHaXJvOyBcclxuICAgIHJlc3VsdGFkbzogU3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGdpcm9TZXJ2aWNlIDogR2lyb1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmdpcm8gPSBuZXcgR2lybygpO1xyXG4gICAgICAgIC8vdGhpcy5naXJvU2VydmljZS5nZXRRdW90ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJWaXN0YVwiLHRoaXMucmVzdWx0YWRvLnJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmdldEdpcm9zKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHRhZG8pO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgQXJyYXk8VG9kbz4oKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRHaXJvcygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5naXJvU2VydmljZS5nZXRRdW90ZVJldGFyZG8oKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChnaXJvcykgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG8gPSBnaXJvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTsgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKGUudG9kb05hbWUsIGUuaXNEb25lLGUuaXNFZGl0aW5nKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3VG9kbygpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk51ZXZvIEdpcm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHVuIG51ZXZvIGdpcm9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFncmVnYXJcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5yZXN1bHQgJiYgci50ZXh0ICE9IFwiXCIpIHsgXHJcbiAgICAgICAgICAgICAgLyogT2JqZXRvIGdpcm8gKi9cclxuICAgICAgICAgICAgICB0aGlzLmdpcm8uc2V0SWRHaXJvICA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRHaXJvICAgID0gci50ZXh0O1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRFc3RHaXJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5naXJvLmdldEdpcm8pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmdpcm9TZXJ2aWNlLnBvc3RRdW90ZSh0aGlzLmdpcm8pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnRvZG9MaXN0LmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VkaXRpbmcpXHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCh0ID0+IHsgdC5lZGl0aW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvbmVFZGl0aW5nKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURvbmUodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRvZG9OYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRWRpdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRvbmU/OiBib29sZWFuLCBpc0VkaXRpbmc/OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZSA/IGRvbmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGlzRWRpdGluZyA/IGlzRWRpdGluZyA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZG9uZShkb25lOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBkb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZG9uZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICBwdWJsaWMgc2V0IGVkaXRpbmcobmV3RWRpdGluZzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gbmV3RWRpdGluZztcclxuICAgIH1cclxufSJdfQ==