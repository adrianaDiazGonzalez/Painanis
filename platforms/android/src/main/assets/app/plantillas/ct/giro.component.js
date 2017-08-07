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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQTRCN0MsSUFBYSxhQUFhO0lBS3RCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNEJBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sK0JBQU8sR0FBZDtRQUFBLGlCQWFDO1FBWkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0MsWUFBWSxFQUFFLFNBQVM7WUFDdkIsZ0JBQWdCLEVBQUUsVUFBVTtZQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENB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ZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEdpcm8gfSBmcm9tIFwiLi4vLi4vbW9kZWxvcy9jdC9naXJvXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkdpcm9zXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XHJcbiAgICAgPEFjdGlvbkl0ZW0gaW9zLnBvc2l0aW9uPVwicmlnaHRcIiBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCIgKHRhcCk9XCJuZXdUb2RvKClcIj5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIiYjeGYwNjc7XCIgY2xhc3M9XCJmYSBhY3Rpb24taXRlbVwiPjwvTGFiZWw+XHJcbiAgICA8L0FjdGlvbkl0ZW0+XHJcbjwvQWN0aW9uQmFyPlxyXG48U2Nyb2xsVmlldz5cclxuPFN0YWNrTGF5b3V0PlxyXG4gICAgPEdyaWRMYXlvdXQgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb0xpc3RcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIFt0ZXh0XT1cInRvZG8uZG9uZSA/ICcmI3hmMDVkOycgOiAnJiN4ZjEwYzsnXCIgY2xhc3M9XCJmYVwiIFtjbGFzcy5idG4tZG9uZV09XCJ0b2RvLmRvbmVcIiAodGFwKT1cInRvZ2dsZURvbmUodG9kbylcIj48L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8TGFiZWwgKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBbdGV4dF09XCJnaXJvLmNHaXJvXCIgW2NsYXNzLmRvbmVdPVwidG9kby5kb25lXCIgdGV4dFdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cclxuICAgICAgICA8VGV4dEZpZWxkICpuZ0lmPVwidG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBoaW50PVwiSW5ncmVzYSBlbCBudWV2byBub21icmVcIiBbKG5nTW9kZWwpXT1cImdpcm8uY0dpcm9cIj48L1RleHRGaWVsZD5cclxuICAgICAgICBcclxuICAgICAgICA8QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIyXCIgW3RleHRdPVwidG9kby5lZGl0aW5nID8gJyYjeGYwMGM7JyA6ICcmI3hmMDQwOydcIiBjbGFzcz1cImZhXCIgKHRhcCk9XCJ0b2RvLmVkaXRpbmcgPyBkb25lRWRpdGluZyh0b2RvKSA6IGVkaXRUb2RvKHRvZG8pXCI+PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiAqbmdJZj1cIiF0b2RvLmVkaXRpbmdcIiByb3c9XCIwXCIgY29sPVwiM1wiIHRleHQ9XCImI3hmMWY4O1wiIGNsYXNzPVwiZmEgYm9ycmFyXCIgKHRhcCk9XCJkZWxldGVUb2RvKHRvZG8pXCI+PC9CdXR0b24+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbjwvU3RhY2tMYXlvdXQ+XHJcbjwvU2Nyb2xsVmlldz5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFtcInBsYW50aWxsYXMvY3NzL2dpcm8uY3NzXCJdXHJcbiAgICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdG9kb0xpc3Q6IEFycmF5PFRvZG8+O1xyXG4gICAgcHVibGljIGlzRWRpdGluZzogYm9vbGVhbjtcclxuICAgIGdpcm86IEdpcm87XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5naXJvID0gbmV3IEdpcm8oKTsgICAgICBcclxuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gbmV3IEFycmF5PFRvZG8+KCk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UudG9kb3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKGUudG9kb05hbWUsIGUuaXNEb25lLGUuaXNFZGl0aW5nKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmV3VG9kbygpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk51ZXZvIFRvZG9cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbmdyZXNlIGVsIHRpdHVsbyBkZWwgbnVldm8gdG9kb1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLnJlc3VsdCAmJiByLnRleHQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKHIudGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnRvZG9MaXN0LmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VkaXRpbmcpXHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCh0ID0+IHsgdC5lZGl0aW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvbmVFZGl0aW5nKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURvbmUodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRvZG9OYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRWRpdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRvbmU/OiBib29sZWFuLCBpc0VkaXRpbmc/OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZSA/IGRvbmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGlzRWRpdGluZyA/IGlzRWRpdGluZyA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZG9uZShkb25lOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBkb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZG9uZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBlZGl0aW5nKG5ld0VkaXRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IG5ld0VkaXRpbmc7XHJcbiAgICB9XHJcbn0iXX0=