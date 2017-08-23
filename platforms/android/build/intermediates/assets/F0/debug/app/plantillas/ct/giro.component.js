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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3QyxnREFBc0Q7QUFVdEQsSUFBYSxhQUFhO0lBTXRCLHVCQUFxQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBQzlCLCtDQUErQztRQUMvQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRTNCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUM3QixJQUFJLENBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7SUFFVixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNEJBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sK0JBQU8sR0FBZDtRQUFBLGlCQXNCQztRQXJCRyxP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LElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0JBQVcsc0JBQUk7YUFJZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFORCxVQUFnQixJQUFhO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsc0JBQUk7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFnQixPQUFlO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUpBO0lBTUQsc0JBQVcseUJBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUYsVUFBbUIsVUFBbUI7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFLTCxXQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgR2lybyB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgR2lyb1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL2N0L2dpcm9cIjtcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzIDogW0dpcm9TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwbGFudGlsbGFzL2N0L3Zpc3RhLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL2dpcm8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdG9kb0xpc3Q6IEFycmF5PFRvZG8+O1xyXG4gICAgcHVibGljIGlzRWRpdGluZzogYm9vbGVhbjtcclxuICAgIGdpcm86IEdpcm87IFxyXG4gICAgcmVzdWx0YWRvOiBTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgZ2lyb1NlcnZpY2UgOiBHaXJvU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2lybyA9IG5ldyBHaXJvKCk7XHJcbiAgICAgICAgLy90aGlzLmdpcm9TZXJ2aWNlLmdldFF1b3RlKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlZpc3RhXCIsdGhpcy5yZXN1bHRhZG8ucmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZ2V0R2lyb3MoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdGFkbyk7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IG5ldyBBcnJheTxUb2RvPigpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEdpcm9zKCk6dm9pZHtcclxuICAgICAgICB0aGlzLmdpcm9TZXJ2aWNlLmdldFF1b3RlUmV0YXJkbygpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGdpcm9zKSA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdGFkbyA9IGdpcm9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApOyAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2Rvcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oZS50b2RvTmFtZSwgZS5pc0RvbmUsZS5pc0VkaXRpbmcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdUb2RvKCkge1xyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTnVldm8gR2lyb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdW4gbnVldm8gZ2lyb1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWdyZWdhclwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLnJlc3VsdCAmJiByLnRleHQgIT0gXCJcIikgeyBcclxuICAgICAgICAgICAgICAvKiBPYmpldG8gZ2lybyAqL1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRJZEdpcm8gID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgdGhpcy5naXJvLnNldEdpcm8gICAgPSByLnRleHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5naXJvLnNldEVzdEdpcm8gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdpcm8uZ2V0R2lybyk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyb1NlcnZpY2UucG9zdFF1b3RlKHRoaXMuZ2lybyk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhyLnRleHQpKTtcclxuICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZylcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKHQgPT4geyB0LmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9uZUVkaXRpbmcodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRG9uZSh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5kb25lID0gIXRvZG8uZG9uZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgICBwcml2YXRlIGlzRG9uZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdG9kb05hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZG9uZT86IGJvb2xlYW4sIGlzRWRpdGluZz86IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lID8gZG9uZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gaXNFZGl0aW5nID8gaXNFZGl0aW5nIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkb25lKGRvbmU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IGRvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb25lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBlZGl0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRWRpdGluZztcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXQgZWRpdGluZyhuZXdFZGl0aW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBuZXdFZGl0aW5nO1xyXG4gICAgfVxyXG59Il19