"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var local_atributo_1 = require("./local_atributo");
var AtributosComponent = (function () {
    function AtributosComponent() {
        console.log(this.resultado);
        this.todoList = new Array();
        this.isEditing = false;
    }
    AtributosComponent.prototype.ngOnInit = function () {
        var _this = this;
        local_atributo_1.LocalStorage.atributo.forEach(function (e) {
            _this.todoList.push(new Todo(e.todoName, e.isDone, e.isEditing));
        });
    };
    AtributosComponent.prototype.newTodo = function () {
        var _this = this;
        dialogs.prompt({
            title: "Nuevo Atributo",
            message: "Ingrese un nuevo atributo",
            okButtonText: "Agregar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.result && r.text != "") {
                dialogs.prompt({
                    title: "Nuevo Atributo",
                    message: "Ingrese un nuevo atributo",
                    okButtonText: "Agregar",
                    cancelButtonText: "Cancelar",
                    inputType: dialogs.inputType.text
                }).then(function (a) {
                    if (a.result && a.text != "") {
                        dialogs.prompt({
                            title: "Nuevo Atributo",
                            message: "Ingrese un nuevo atributo",
                            okButtonText: "Agregar",
                            cancelButtonText: "Cancelar",
                            inputType: dialogs.inputType.text
                        }).then(function (b) {
                            if (b.result && b.text != "") {
                                _this.todoList.push(new Todo("Atributo1 " + r.text + "Atributo2 " + a.text + "Atributo3 " + b.text));
                                local_atributo_1.LocalStorage.atributo = _this.todoList;
                            }
                        });
                    }
                });
            }
        });
    };
    AtributosComponent.prototype.deleteTodo = function (todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        local_atributo_1.LocalStorage.atributo = this.todoList;
    };
    AtributosComponent.prototype.editTodo = function (todo) {
        if (this.isEditing)
            this.todoList.forEach(function (t) { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
        local_atributo_1.LocalStorage.atributo = this.todoList;
    };
    AtributosComponent.prototype.doneEditing = function (todo) {
        todo.editing = false;
        this.isEditing = false;
        local_atributo_1.LocalStorage.atributo = this.todoList;
    };
    AtributosComponent.prototype.toggleDone = function (todo) {
        todo.done = !todo.done;
        local_atributo_1.LocalStorage.atributo = this.todoList;
    };
    return AtributosComponent;
}());
AtributosComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "vistas/ct/vistaAtributos.html",
        styleUrls: ["vistas/css/atributos.css"]
    }),
    __metadata("design:paramtypes", [])
], AtributosComponent);
exports.AtributosComponent = AtributosComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRyaWJ1dG9zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0cmlidXRvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFFekUsb0NBQXVDO0FBQ3ZDLG1EQUFnRDtBQVdoRCxJQUFhLGtCQUFrQjtJQU0zQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUUzQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsNkJBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sb0NBQU8sR0FBZDtRQUFBLGlCQW1DQztRQWxDRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNYLEtBQUssRUFBRSxnQkFB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Z0RBQWtCO0FBbUYvQjtJQUtJLGNBQVksSUFBWSxFQUFFLElBQWMsRUFBRSxTQUFtQjtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFXLHNCQUFJO2FBSWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBTkQsVUFBZ0IsSUFBYTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHNCQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBZ0IsT0FBZTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHlCQUFPO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW1CLFVBQW1CO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLENBQUM7OztPQUpBO0lBS0wsV0FBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbF9hdHJpYnV0b1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ1aS9zd2l0Y2hcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpc3Rhcy9jdC92aXN0YUF0cmlidXRvcy5odG1sXCJcclxuICAgICxcclxuICAgIHN0eWxlVXJsczogW1widmlzdGFzL2Nzcy9hdHJpYnV0b3MuY3NzXCJdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0cmlidXRvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIHB1YmxpYyB0b2RvTGlzdDogQXJyYXk8VG9kbz47XHJcbiAgICBwdWJsaWMgaXNFZGl0aW5nOiBib29sZWFuO1xyXG4gICAgcmVzdWx0YWRvOiBTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bHRhZG8pO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgQXJyYXk8VG9kbz4oKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuYXRyaWJ1dG8uZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKGUudG9kb05hbWUsIGUuaXNEb25lLCBlLmlzRWRpdGluZykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld1RvZG8oKSB7XHJcbiAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJOdWV2byBBdHJpYnV0b1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkluZ3Jlc2UgdW4gbnVldm8gYXRyaWJ1dG9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFncmVnYXJcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5yZXN1bHQgJiYgci50ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOdWV2byBBdHJpYnV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB1biBudWV2byBhdHJpYnV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZ3JlZ2FyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5yZXN1bHQgJiYgYS50ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTnVldm8gQXRyaWJ1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW5ncmVzZSB1biBudWV2byBhdHJpYnV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFncmVnYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIucmVzdWx0ICYmIGIudGV4dCAhPSBcIlwiKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKG5ldyBUb2RvKFwiQXRyaWJ1dG8xIFwiK3IudGV4dCArIFwiQXRyaWJ1dG8yIFwiICthLnRleHQrIFwiQXRyaWJ1dG8zIFwiICtiLnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLmF0cmlidXRvID0gdGhpcy50b2RvTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmF0cmlidXRvID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFRvZG8odG9kbzogVG9kbykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZylcclxuICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKHQgPT4geyB0LmVkaXRpbmcgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IHRydWU7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmF0cmlidXRvID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG9uZUVkaXRpbmcodG9kbzogVG9kbykge1xyXG4gICAgICAgIHRvZG8uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmF0cmlidXRvID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRG9uZSh0b2RvOiBUb2RvKSB7XHJcbiAgICAgICAgdG9kby5kb25lID0gIXRvZG8uZG9uZTtcclxuXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmF0cmlidXRvID0gdGhpcy50b2RvTGlzdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gICAgcHJpdmF0ZSBpc0RvbmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRvZG9OYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRWRpdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRvbmU/OiBib29sZWFuLCBpc0VkaXRpbmc/OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZSA/IGRvbmUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IGlzRWRpdGluZyA/IGlzRWRpdGluZyA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZG9uZShkb25lOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBkb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZG9uZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudG9kb05hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBlZGl0aW5nKG5ld0VkaXRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRWRpdGluZyA9IG5ld0VkaXRpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19