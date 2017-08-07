"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var local_storage_1 = require("./local-storage");
var GiroComponent = (function () {
    function GiroComponent() {
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
            title: "Nuevo Todo",
            message: "Ingrese el titulo del nuevo todo",
            okButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.result && r.text != "") {
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
        template: "\n     <ActionBar title=\"Giros\" class=\"action-bar\">\n     <ActionItem ios.position=\"right\" android.position=\"actionBar\" (tap)=\"newTodo()\">\n        <Label text=\"&#xf067;\" class=\"fa action-item\"></Label>\n    </ActionItem>\n</ActionBar>\n<ScrollView>\n<StackLayout>\n    <GridLayout *ngFor=\"let todo of todoList\" rows=\"auto\" columns=\"auto, *, auto, auto\">\n        <Button row=\"0\" col=\"0\" [text]=\"todo.done ? '&#xf05d;' : '&#xf10c;'\" class=\"fa\" [class.btn-done]=\"todo.done\" (tap)=\"toggleDone(todo)\"></Button>\n        \n        <Label *ngIf=\"!todo.editing\" row=\"0\" col=\"1\" [text]=\"todo.name\" [class.done]=\"todo.done\" textWrap=\"true\"></Label>\n        <TextField *ngIf=\"todo.editing\" row=\"0\" col=\"1\" hint=\"Ingresa el nuevo nombre\" [(ngModel)]=\"todo.name\"></TextField>\n        \n        <Button row=\"0\" col=\"2\" [text]=\"todo.editing ? '&#xf00c;' : '&#xf040;'\" class=\"fa\" (tap)=\"todo.editing ? doneEditing(todo) : editTodo(todo)\"></Button>\n        <Button *ngIf=\"!todo.editing\" row=\"0\" col=\"3\" text=\"&#xf1f8;\" class=\"fa borrar\" (tap)=\"deleteTodo(todo)\"></Button>\n    </GridLayout>\n</StackLayout>\n</ScrollView>\n    "
    }),
    __metadata("design:paramtypes", [])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBMkIvQyxJQUFhLGFBQWE7SUFJdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLDRCQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLCtCQUFPLEdBQWQ7UUFBQSxpQkFhQztRQVpHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsNEJBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsSUFBVTtRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsNEJBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFVO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDRCQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLElBQVU7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsNEJBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsSUFBVTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2Qiw0QkFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksYUFBYTtJQTFCekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSx5cUNBbUJQO0tBRUosQ0FBQzs7R0FHVyxhQUFhLENBc0R6QjtBQXREWSxzQ0FBYTtBQXdEMUI7SUFLSSxjQUFZLElBQVksRUFBRSxJQUFjLEVBQUUsU0FBbUI7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBVyxzQkFBSTthQUlmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQU5ELFVBQWdCLElBQWE7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWdCLE9BQWU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFtQixVQUFtQjtZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQUtMLFdBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJHaXJvc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxyXG4gICAgIDxBY3Rpb25JdGVtIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiICh0YXApPVwibmV3VG9kbygpXCI+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCImI3hmMDY3O1wiIGNsYXNzPVwiZmEgYWN0aW9uLWl0ZW1cIj48L0xhYmVsPlxyXG4gICAgPC9BY3Rpb25JdGVtPlxyXG48L0FjdGlvbkJhcj5cclxuPFNjcm9sbFZpZXc+XHJcbjxTdGFja0xheW91dD5cclxuICAgIDxHcmlkTGF5b3V0ICpuZ0Zvcj1cImxldCB0b2RvIG9mIHRvZG9MaXN0XCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0bywgKiwgYXV0bywgYXV0b1wiPlxyXG4gICAgICAgIDxCdXR0b24gcm93PVwiMFwiIGNvbD1cIjBcIiBbdGV4dF09XCJ0b2RvLmRvbmUgPyAnJiN4ZjA1ZDsnIDogJyYjeGYxMGM7J1wiIGNsYXNzPVwiZmFcIiBbY2xhc3MuYnRuLWRvbmVdPVwidG9kby5kb25lXCIgKHRhcCk9XCJ0b2dnbGVEb25lKHRvZG8pXCI+PC9CdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExhYmVsICpuZ0lmPVwiIXRvZG8uZWRpdGluZ1wiIHJvdz1cIjBcIiBjb2w9XCIxXCIgW3RleHRdPVwidG9kby5uYW1lXCIgW2NsYXNzLmRvbmVdPVwidG9kby5kb25lXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkICpuZ0lmPVwidG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBoaW50PVwiSW5ncmVzYSBlbCBudWV2byBub21icmVcIiBbKG5nTW9kZWwpXT1cInRvZG8ubmFtZVwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gcm93PVwiMFwiIGNvbD1cIjJcIiBbdGV4dF09XCJ0b2RvLmVkaXRpbmcgPyAnJiN4ZjAwYzsnIDogJyYjeGYwNDA7J1wiIGNsYXNzPVwiZmFcIiAodGFwKT1cInRvZG8uZWRpdGluZyA/IGRvbmVFZGl0aW5nKHRvZG8pIDogZWRpdFRvZG8odG9kbylcIj48L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uICpuZ0lmPVwiIXRvZG8uZWRpdGluZ1wiIHJvdz1cIjBcIiBjb2w9XCIzXCIgdGV4dD1cIiYjeGYxZjg7XCIgY2xhc3M9XCJmYSBib3JyYXJcIiAodGFwKT1cImRlbGV0ZVRvZG8odG9kbylcIj48L0J1dHRvbj5cclxuICAgIDwvR3JpZExheW91dD5cclxuPC9TdGFja0xheW91dD5cclxuPC9TY3JvbGxWaWV3PlxyXG4gICAgYFxyXG4gICAgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdpcm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHRvZG9MaXN0OiBBcnJheTxUb2RvPjtcclxuICAgIHB1YmxpYyBpc0VkaXRpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IG5ldyBBcnJheTxUb2RvPigpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhlLnRvZG9OYW1lLCBlLmlzRG9uZSxlLmlzRWRpdGluZykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld1RvZG8oKSB7XHJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOdWV2byBUb2RvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSBlbCB0aXR1bG8gZGVsIG51ZXZvIHRvZG9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5yZXN1bHQgJiYgci50ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhyLnRleHQpKTtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlVG9kbyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50b2RvTGlzdC5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kbyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nKVxyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmZvckVhY2godCA9PiB7IHQuZWRpdGluZyA9IGZhbHNlOyB9KTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgdG9kby5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb25lRWRpdGluZyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEb25lKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB0b2RvLmRvbmUgPSAhdG9kby5kb25lO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICAgIHByaXZhdGUgaXNEb25lOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB0b2RvTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0VkaXRpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkb25lPzogYm9vbGVhbiwgaXNFZGl0aW5nPzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmUgPyBkb25lIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBpc0VkaXRpbmcgPyBpc0VkaXRpbmcgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGRvbmUoZG9uZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gZG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRvbmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9OYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZWRpdGluZyhuZXdFZGl0aW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBuZXdFZGl0aW5nO1xyXG4gICAgfVxyXG59Il19