"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var local_storage_1 = require("./local-storage");
var giro_1 = require("../../modelos/ct/giro");
var GiroComponent = (function () {
    function GiroComponent() {
        this.giro = new giro_1.Giro();
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
        template: "\n     <ActionBar title=\"Giros\" class=\"action-bar\">\n     <ActionItem ios.position=\"right\" android.position=\"actionBar\" (tap)=\"newTodo()\">\n        <Label text=\"&#xf067;\" class=\"fa action-item\"></Label>\n    </ActionItem>\n</ActionBar>\n<ScrollView>\n<StackLayout>\n    <GridLayout *ngFor=\"let todo of todoList\" rows=\"auto\" columns=\"auto, *, auto, auto\">\n        <Button row=\"0\" col=\"0\" [text]=\"todo.done ? '&#xf05d;' : '&#xf10c;'\" class=\"fa\" [class.btn-done]=\"todo.done\" (tap)=\"toggleDone(todo)\"></Button>\n        \n        <Label *ngIf=\"!todo.editing\" row=\"0\" col=\"1\" [text]=\"giro.cGiro\" [class.done]=\"todo.done\" textWrap=\"true\"></Label>\n        <TextField *ngIf=\"todo.editing\" row=\"0\" col=\"1\" hint=\"Ingresa el nuevo nombre\" [(ngModel)]=\"giro.cGiro\"></TextField>\n        \n        <Button row=\"0\" col=\"2\" [text]=\"todo.editing ? '&#xf00c;' : '&#xf040;'\" class=\"fa\" (tap)=\"todo.editing ? doneEditing(todo) : editTodo(todo)\"></Button>\n        <Button *ngIf=\"!todo.editing\" row=\"0\" col=\"3\" text=\"&#xf1f8;\" class=\"fa borrar\" (tap)=\"deleteTodo(todo)\"></Button>\n    </GridLayout>\n</StackLayout>\n</ScrollView>\n    ",
        styleUrls: ["plantillas/css/giro.css"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQTRCN0MsSUFBYSxhQUFhO0lBS3RCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNEJBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sK0JBQU8sR0FBZDtRQUFBLGlCQWFDO1FBWkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZ0JBQWdCLEVBQUUsVUFBVTtZQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENB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ZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEdpcm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9jdC9naXJvXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkdpcm9zXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XHJcbiAgICAgPEFjdGlvbkl0ZW0gaW9zLnBvc2l0aW9uPVwicmlnaHRcIiBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCIgKHRhcCk9XCJuZXdUb2RvKClcIj5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIiYjeGYwNjc7XCIgY2xhc3M9XCJmYSBhY3Rpb24taXRlbVwiPjwvTGFiZWw+XHJcbiAgICA8L0FjdGlvbkl0ZW0+XHJcbjwvQWN0aW9uQmFyPlxyXG48U2Nyb2xsVmlldz5cclxuPFN0YWNrTGF5b3V0PlxyXG4gICAgPEdyaWRMYXlvdXQgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb0xpc3RcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIFt0ZXh0XT1cInRvZG8uZG9uZSA/ICcmI3hmMDVkOycgOiAnJiN4ZjEwYzsnXCIgY2xhc3M9XCJmYVwiIFtjbGFzcy5idG4tZG9uZV09XCJ0b2RvLmRvbmVcIiAodGFwKT1cInRvZ2dsZURvbmUodG9kbylcIj48L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8TGFiZWwgKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBbdGV4dF09XCJnaXJvLmNHaXJvXCIgW2NsYXNzLmRvbmVdPVwidG9kby5kb25lXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkICpuZ0lmPVwidG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBoaW50PVwiSW5ncmVzYSBlbCBudWV2byBub21icmVcIiBbKG5nTW9kZWwpXT1cImdpcm8uY0dpcm9cIj48L1RleHRGaWVsZD5cclxuICAgICAgICBcclxuICAgICAgICA8QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIyXCIgW3RleHRdPVwidG9kby5lZGl0aW5nID8gJyYjeGYwMGM7JyA6ICcmI3hmMDQwOydcIiBjbGFzcz1cImZhXCIgKHRhcCk9XCJ0b2RvLmVkaXRpbmcgPyBkb25lRWRpdGluZyh0b2RvKSA6IGVkaXRUb2RvKHRvZG8pXCI+PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiAqbmdJZj1cIiF0b2RvLmVkaXRpbmdcIiByb3c9XCIwXCIgY29sPVwiM1wiIHRleHQ9XCImI3hmMWY4O1wiIGNsYXNzPVwiZmEgYm9ycmFyXCIgKHRhcCk9XCJkZWxldGVUb2RvKHRvZG8pXCI+PC9CdXR0b24+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbjwvU3RhY2tMYXlvdXQ+XHJcbjwvU2Nyb2xsVmlldz5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL2dpcm8uY3NzXCJdXHJcbiAgICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdG9kb0xpc3Q6IEFycmF5PFRvZG8+O1xyXG4gICAgcHVibGljIGlzRWRpdGluZzogYm9vbGVhbjtcclxuICAgIGdpcm86IEdpcm87XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5naXJvID0gbmV3IEdpcm8oKTsgICAgICBcclxuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IEFycmF5PFRvZG8+KCk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKGUudG9kb05hbWUsIGUuaXNEb25lLGUuaXNFZGl0aW5nKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3VG9kbygpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk51ZXZvIEdpcm9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIHVuIG51ZXZvIGdpcm9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFncmVnYXJcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5yZXN1bHQgJiYgci50ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhyLnRleHQpKTtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlVG9kbyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy50b2RvTGlzdC5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kbyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nKVxyXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmZvckVhY2godCA9PiB7IHQuZWRpdGluZyA9IGZhbHNlOyB9KTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgdG9kby5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb25lRWRpdGluZyh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MgPSB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEb25lKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB0b2RvLmRvbmUgPSAhdG9kby5kb25lO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICAgIHByaXZhdGUgaXNEb25lOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB0b2RvTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0VkaXRpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkb25lPzogYm9vbGVhbiwgaXNFZGl0aW5nPzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmUgPyBkb25lIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBpc0VkaXRpbmcgPyBpc0VkaXRpbmcgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGRvbmUoZG9uZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNEb25lID0gZG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRvbmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9OYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRvZG9OYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGVkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZWRpdGluZyhuZXdFZGl0aW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBuZXdFZGl0aW5nO1xyXG4gICAgfVxyXG59Il19