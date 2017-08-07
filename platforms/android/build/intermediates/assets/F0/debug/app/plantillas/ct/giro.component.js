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
        template: "\n     <ActionBar title=\"Giros\" class=\"action-bar\">\n     <ActionItem ios.position=\"right\" android.position=\"actionBar\" (tap)=\"newTodo()\">\n        <Label text=\"&#xf067;\" class=\"fa action-item\"></Label>\n    </ActionItem>\n</ActionBar>\n<StackLayout>\n    <GridLayout *ngFor=\"let todo of todoList\" rows=\"auto\" columns=\"auto, *, auto, auto\">\n        <Button row=\"0\" col=\"0\" [text]=\"todo.done ? '&#xf05d;' : '&#xf10c;'\" class=\"fa\" [class.btn-done]=\"todo.done\" (tap)=\"toggleDone(todo)\"></Button>\n        \n        <Label *ngIf=\"!todo.editing\" row=\"0\" col=\"1\" [text]=\"todo.name\" [class.done]=\"todo.done\" textWrap=\"true\"></Label>\n        <TextField *ngIf=\"todo.editing\" row=\"0\" col=\"1\" hint=\"Ingresa el nuevo nombre\" [(ngModel)]=\"todo.name\"></TextField>\n        \n        <Button row=\"0\" col=\"2\" [text]=\"todo.editing ? '&#xf00c;' : '&#xf040;'\" class=\"fa\" (tap)=\"todo.editing ? doneEditing(todo) : editTodo(todo)\"></Button>\n        <Button *ngIf=\"!todo.editing\" row=\"0\" col=\"3\" text=\"&#xf1f8;\" class=\"fa borrar\" (tap)=\"deleteTodo(todo)\"></Button>\n    </GridLayout>\n</StackLayout>\n\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBMEIvQyxJQUFhLGFBQWE7SUFJdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLDRCQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLCtCQUFPLEdBQWQ7UUFBQSxpQkFhQztRQVpHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsNEJBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsSUFBVTtRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsNEJBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFVO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDRCQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLElBQVU7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsNEJBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsSUFBVTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2Qiw0QkFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksYUFBYTtJQXpCekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSw4b0NBa0JQO0tBRUosQ0FBQzs7R0FHVyxhQUFhLENBc0R6QjtBQXREWSxzQ0FBYTtBQXdEMUI7SUFLSSxjQUFZLElBQVksRUFBRSxJQUFjLEVBQUUsU0FBbUI7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBVyxzQkFBSTthQUlmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQU5ELFVBQWdCLElBQWE7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWdCLE9BQWU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFtQixVQUFtQjtZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQUtMLFdBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJHaXJvc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxyXG4gICAgIDxBY3Rpb25JdGVtIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiICh0YXApPVwibmV3VG9kbygpXCI+XHJcbiAgICAgICAgPExhYmVsIHRleHQ9XCImI3hmMDY3O1wiIGNsYXNzPVwiZmEgYWN0aW9uLWl0ZW1cIj48L0xhYmVsPlxyXG4gICAgPC9BY3Rpb25JdGVtPlxyXG48L0FjdGlvbkJhcj5cclxuPFN0YWNrTGF5b3V0PlxyXG4gICAgPEdyaWRMYXlvdXQgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb0xpc3RcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIFt0ZXh0XT1cInRvZG8uZG9uZSA/ICcmI3hmMDVkOycgOiAnJiN4ZjEwYzsnXCIgY2xhc3M9XCJmYVwiIFtjbGFzcy5idG4tZG9uZV09XCJ0b2RvLmRvbmVcIiAodGFwKT1cInRvZ2dsZURvbmUodG9kbylcIj48L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8TGFiZWwgKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBbdGV4dF09XCJ0b2RvLm5hbWVcIiBbY2xhc3MuZG9uZV09XCJ0b2RvLmRvbmVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGQgKm5nSWY9XCJ0b2RvLmVkaXRpbmdcIiByb3c9XCIwXCIgY29sPVwiMVwiIGhpbnQ9XCJJbmdyZXNhIGVsIG51ZXZvIG5vbWJyZVwiIFsobmdNb2RlbCldPVwidG9kby5uYW1lXCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMlwiIFt0ZXh0XT1cInRvZG8uZWRpdGluZyA/ICcmI3hmMDBjOycgOiAnJiN4ZjA0MDsnXCIgY2xhc3M9XCJmYVwiICh0YXApPVwidG9kby5lZGl0aW5nID8gZG9uZUVkaXRpbmcodG9kbykgOiBlZGl0VG9kbyh0b2RvKVwiPjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjNcIiB0ZXh0PVwiJiN4ZjFmODtcIiBjbGFzcz1cImZhIGJvcnJhclwiICh0YXApPVwiZGVsZXRlVG9kbyh0b2RvKVwiPjwvQnV0dG9uPlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG48L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgIGBcclxuICAgIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHaXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyB0b2RvTGlzdDogQXJyYXk8VG9kbz47XHJcbiAgICBwdWJsaWMgaXNFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgQXJyYXk8VG9kbz4oKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2Rvcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oZS50b2RvTmFtZSwgZS5pc0RvbmUsZS5pc0VkaXRpbmcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZXdUb2RvKCkge1xyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTnVldm8gVG9kb1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgZWwgdGl0dWxvIGRlbCBudWV2byB0b2RvXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XHJcbiAgICAgICAgfSkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIucmVzdWx0ICYmIHIudGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZylcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKHQgPT4geyB0LmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9uZUVkaXRpbmcodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRG9uZSh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5kb25lID0gIXRvZG8uZG9uZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgICBwcml2YXRlIGlzRG9uZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdG9kb05hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZG9uZT86IGJvb2xlYW4sIGlzRWRpdGluZz86IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lID8gZG9uZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gaXNFZGl0aW5nID8gaXNFZGl0aW5nIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkb25lKGRvbmU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRG9uZSA9IGRvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb25lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBlZGl0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRWRpdGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGVkaXRpbmcobmV3RWRpdGluZzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gbmV3RWRpdGluZztcclxuICAgIH1cclxufSJdfQ==