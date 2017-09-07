import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import dialogs = require("ui/dialogs");
import { LocalStorage } from "./local";
import { HttpModule, Http } from '@angular/http';
import { Switch } from "ui/switch";
@Component({
    selector: "my-app",
    templateUrl: "plantillas/ct/vistaAtributos.html"
    ,
    styleUrls: ["plantillas/css/atributos.css"]

})

export class AtributoComponent implements OnInit {
    
    public todoList: Array<Todo>;
    public isEditing: boolean;
    resultado: String;

    constructor() {
        console.log(this.resultado);
        this.todoList = new Array<Todo>();
        this.isEditing = false;

    }

    ngOnInit() {
        LocalStorage.atributo.forEach(e => {
            this.todoList.push(new Todo(e.todoName, e.isDone, e.isEditing));
        });
    }
    public newTodo() {
        dialogs.prompt({
            title: "Nuevo Atributo",
            message: "Ingrese un nuevo atributo",
            okButtonText: "Agregar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result && r.text != "") {
                dialogs.prompt({
                    title: "Nuevo Atributo",
                    message: "Ingrese un nuevo atributo",
                    okButtonText: "Agregar",
                    cancelButtonText: "Cancelar",
                    inputType: dialogs.inputType.text
                }).then(a => {
                    if (a.result && a.text != "") {
                        dialogs.prompt({
                            title: "Nuevo Atributo",
                            message: "Ingrese un nuevo atributo",
                            okButtonText: "Agregar",
                            cancelButtonText: "Cancelar",
                            inputType: dialogs.inputType.text
                        }).then(b => {
                            if (b.result && b.text != "") {
 
                        this.todoList.push(new Todo("Atributo1 "+r.text + "Atributo2 " +a.text+ "Atributo3 " +b.text));
                        LocalStorage.atributo = this.todoList;
                         }
                        });
                    }
                });
            }
        });

    }

    public deleteTodo(todo: Todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        LocalStorage.atributo = this.todoList;
    }

    public editTodo(todo: Todo) {
        if (this.isEditing)
            this.todoList.forEach(t => { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
        LocalStorage.atributo = this.todoList;
    }

    public doneEditing(todo: Todo) {
        todo.editing = false;
        this.isEditing = false;
        LocalStorage.atributo = this.todoList;
    }

    public toggleDone(todo: Todo) {
        todo.done = !todo.done;

        LocalStorage.atributo = this.todoList;
    }

}

class Todo {
    private isDone: boolean;
    private todoName: string;
    private isEditing: boolean;

    constructor(name: string, done?: boolean, isEditing?: boolean) {
        this.todoName = name;
        this.done = done ? done : false;
        this.isEditing = isEditing ? isEditing : false;
    }

    public set done(done: boolean) {
        this.isDone = done;
    }

    public get done(): boolean {
        return this.isDone;
    }

    public get name(): string {
        return this.todoName;
    }

    public set name(newName: string) {
        this.todoName = newName;
    }

    public get editing(): boolean {
        return this.isEditing;
    }

    public set editing(newEditing: boolean) {
        this.isEditing = newEditing;
    }
}
