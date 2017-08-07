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
        template: "\n     <ActionBar title=\"Giros\" class=\"action-bar\">\n     <ActionItem ios.position=\"right\" android.position=\"actionBar\" (tap)=\"newTodo()\">\n        <Label text=\"&#xf067;\" class=\"fa action-item\"></Label>\n    </ActionItem>\n</ActionBar>\n<ScrollView>\n<StackLayout>\n    <GridLayout *ngFor=\"let todo of todoList\" rows=\"auto\" columns=\"auto, *, auto, auto\">\n        <Button row=\"0\" col=\"0\" [text]=\"todo.done ? '&#xf05d;' : '&#xf10c;'\" class=\"fa\" [class.btn-done]=\"todo.done\" (tap)=\"toggleDone(todo)\"></Button>\n        \n        <Label *ngIf=\"!todo.editing\" row=\"0\" col=\"1\" [text]=\"todo.name\" [class.done]=\"todo.done\" textWrap=\"true\"></Label>\n        <TextField *ngIf=\"todo.editing\" row=\"0\" col=\"1\" hint=\"Ingresa el nuevo nombre\" [(ngModel)]=\"todo.done\"></TextField>\n        \n        <Button row=\"0\" col=\"2\" [text]=\"todo.editing ? '&#xf00c;' : '&#xf040;'\" class=\"fa\" (tap)=\"todo.editing ? doneEditing(todo) : editTodo(todo)\"></Button>\n        <Button *ngIf=\"!todo.editing\" row=\"0\" col=\"3\" text=\"&#xf1f8;\" class=\"fa borrar\" (tap)=\"deleteTodo(todo)\"></Button>\n    </GridLayout>\n</StackLayout>\n</ScrollView>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxvQ0FBdUM7QUFDdkMsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3QyxnREFBc0Q7QUE2QnRELElBQWEsYUFBYTtJQUt0Qix1QkFBb0IsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNEJBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sK0JBQU8sR0FBZDtRQUFBLGlCQW9CQztRQW5CRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxZQUFZLEVBQUUsU0FBUztZQUN2QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7U0FDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FB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TSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWdCLE9BQWU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFtQixVQUFtQjtZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQUtMLFdBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBHaXJvIH0gZnJvbSBcIi4uLy4uL21vZGVsb3MvY3QvZ2lyb1wiO1xyXG5pbXBvcnQgeyBHaXJvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNpb3MvY3QvZ2lyb1wiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnMgOiBbR2lyb1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkdpcm9zXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XHJcbiAgICAgPEFjdGlvbkl0ZW0gaW9zLnBvc2l0aW9uPVwicmlnaHRcIiBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCIgKHRhcCk9XCJuZXdUb2RvKClcIj5cclxuICAgICAgICA8TGFiZWwgdGV4dD1cIiYjeGYwNjc7XCIgY2xhc3M9XCJmYSBhY3Rpb24taXRlbVwiPjwvTGFiZWw+XHJcbiAgICA8L0FjdGlvbkl0ZW0+XHJcbjwvQWN0aW9uQmFyPlxyXG48U2Nyb2xsVmlldz5cclxuPFN0YWNrTGF5b3V0PlxyXG4gICAgPEdyaWRMYXlvdXQgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb0xpc3RcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqLCBhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIFt0ZXh0XT1cInRvZG8uZG9uZSA/ICcmI3hmMDVkOycgOiAnJiN4ZjEwYzsnXCIgY2xhc3M9XCJmYVwiIFtjbGFzcy5idG4tZG9uZV09XCJ0b2RvLmRvbmVcIiAodGFwKT1cInRvZ2dsZURvbmUodG9kbylcIj48L0J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8TGFiZWwgKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBbdGV4dF09XCJ0b2RvLm5hbWVcIiBbY2xhc3MuZG9uZV09XCJ0b2RvLmRvbmVcIiB0ZXh0V3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgIDxUZXh0RmllbGQgKm5nSWY9XCJ0b2RvLmVkaXRpbmdcIiByb3c9XCIwXCIgY29sPVwiMVwiIGhpbnQ9XCJJbmdyZXNhIGVsIG51ZXZvIG5vbWJyZVwiIFsobmdNb2RlbCldPVwidG9kby5kb25lXCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMlwiIFt0ZXh0XT1cInRvZG8uZWRpdGluZyA/ICcmI3hmMDBjOycgOiAnJiN4ZjA0MDsnXCIgY2xhc3M9XCJmYVwiICh0YXApPVwidG9kby5lZGl0aW5nID8gZG9uZUVkaXRpbmcodG9kbykgOiBlZGl0VG9kbyh0b2RvKVwiPjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gKm5nSWY9XCIhdG9kby5lZGl0aW5nXCIgcm93PVwiMFwiIGNvbD1cIjNcIiB0ZXh0PVwiJiN4ZjFmODtcIiBjbGFzcz1cImZhIGJvcnJhclwiICh0YXApPVwiZGVsZXRlVG9kbyh0b2RvKVwiPjwvQnV0dG9uPlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG48L1N0YWNrTGF5b3V0PlxyXG48L1Njcm9sbFZpZXc+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwbGFudGlsbGFzL2Nzcy9naXJvLmNzc1wiXVxyXG4gICAgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdpcm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHRvZG9MaXN0OiBBcnJheTxUb2RvPjtcclxuICAgIHB1YmxpYyBpc0VkaXRpbmc6IGJvb2xlYW47XHJcbiAgICBnaXJvOiBHaXJvO1xyXG4gICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2lyb1NlcnZpY2UgOiBHaXJvU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2lybyA9IG5ldyBHaXJvKCk7ICAgICAgXHJcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IG5ldyBBcnJheTxUb2RvPigpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9kbyhlLnRvZG9OYW1lLCBlLmlzRG9uZSxlLmlzRWRpdGluZykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld1RvZG8oKSB7XHJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOdWV2byBHaXJvXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB1biBudWV2byBnaXJvXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZ3JlZ2FyXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XHJcbiAgICAgICAgfSkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIucmVzdWx0ICYmIHIudGV4dCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgLyogT2JqZXRvIGdpcm8gKi9cclxuICAgICAgICAgICAgICB0aGlzLmdpcm8uc2V0SWRHaXJvICA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRHaXJvICAgID0gci50ZXh0O1xyXG4gICAgICAgICAgICAgIHRoaXMuZ2lyby5zZXRFc3RHaXJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5naXJvLmdldEdpcm8pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2gobmV3IFRvZG8oci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnRvZG9MaXN0LmluZGV4T2YodG9kbyk7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvKHRvZG86IFRvZG8pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VkaXRpbmcpXHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCh0ID0+IHsgdC5lZGl0aW5nID0gZmFsc2U7IH0pO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRvbmVFZGl0aW5nKHRvZG86IFRvZG8pIHtcclxuICAgICAgICB0b2RvLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS50b2RvcyA9IHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURvbmUodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZG9uZSA9ICF0b2RvLmRvbmU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnRvZG9zID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRvZG9OYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRWRpdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRvbmU/OiBib29sZWFuLCBpc0VkaXRpbmc/OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZSA/IGRvbmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGlzRWRpdGluZyA/IGlzRWRpdGluZyA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZG9uZShkb25lOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBkb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZG9uZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBlZGl0aW5nKG5ld0VkaXRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IG5ld0VkaXRpbmc7XHJcbiAgICB9XHJcbn0iXX0=