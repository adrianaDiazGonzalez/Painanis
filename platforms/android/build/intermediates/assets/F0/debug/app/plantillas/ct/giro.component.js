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
        this.giroService.getQuote();
        this.todoList = new Array();
        this.isEditing = false;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3QyxnREFBc0Q7QUFhdEQsSUFBYSxhQUFhO0lBS3RCLHVCQUFxQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLDRCQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLCtCQUFPLEdBQWQ7UUFBQSxpQkFzQkM7UUFyQkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZ0JBQWdCLEVBQUUsVUFBVTtZQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFB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O2FBTkQsVUFBZ0IsSUFBYTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHNCQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBZ0IsT0FBZTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHlCQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVGLFVBQW1CLFVBQW1CO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLENBQUM7OztPQUpBO0lBS0wsV0FBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEdpcm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9jdC9naXJvXCI7XHJcbmltcG9ydCB7IEdpcm9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2lvcy9jdC9naXJvXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVycyA6IFtHaXJvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGxhbnRpbGxhcy9jdC92aXN0YS5odG1sXCJcclxuICAsXHJcbiAgICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL2dpcm8uY3NzXCJdXHJcbiAgICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdG9kb0xpc3Q6IEFycmF5PFRvZG8+O1xyXG4gICAgcHVibGljIGlzRWRpdGluZzogYm9vbGVhbjtcclxuICAgIGdpcm86IEdpcm87XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgZ2lyb1NlcnZpY2UgOiBHaXJvU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2lybyA9IG5ldyBHaXJvKCk7XHJcbiAgICAgICAgdGhpcy5naXJvU2VydmljZS5nZXRRdW90ZSgpO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgQXJyYXk8VG9kbz4oKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2Rvcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oZS50b2RvTmFtZSwgZS5pc0RvbmUsZS5pc0VkaXRpbmcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdUb2RvKCkge1xyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTnVldm8gR2lyb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdW4gbnVldm8gZ2lyb1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWdyZWdhclwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLnJlc3VsdCAmJiByLnRleHQgIT0gXCJcIikgeyBcclxuICAgICAgICAgICAgICAvKiBPYmpldG8gZ2lybyAqL1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRJZEdpcm8gID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgdGhpcy5naXJvLnNldEdpcm8gICAgPSByLnRleHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5naXJvLnNldEVzdEdpcm8gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdpcm8uZ2V0R2lybyk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyb1NlcnZpY2UucG9zdFF1b3RlKHRoaXMuZ2lybyk7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhyLnRleHQpKTtcclxuICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZylcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKHQgPT4geyB0LmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9uZUVkaXRpbmcodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRG9uZSh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5kb25lID0gIXRvZG8uZG9uZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgICBwcml2YXRlIGlzRG9uZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdG9kb05hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZG9uZT86IGJvb2xlYW4sIGlzRWRpdGluZz86IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lID8gZG9uZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gaXNFZGl0aW5nID8gaXNFZGl0aW5nIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkb25lKGRvbmU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IGRvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb25lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBlZGl0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRWRpdGluZztcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXQgZWRpdGluZyhuZXdFZGl0aW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBuZXdFZGl0aW5nO1xyXG4gICAgfVxyXG59Il19