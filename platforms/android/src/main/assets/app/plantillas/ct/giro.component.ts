import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import dialogs = require("ui/dialogs");
import { LocalStorage } from "./local-storage";
import { Giro } from "../../modelos/ct/giro";
import { GiroService } from "../../servicios/ct/giro";
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: "my-app",
  providers : [GiroService],
  templateUrl: "plantillas/ct/vista.html"
  ,
    styleUrls: ["plantillas/css/giro.css"]
    
})


export class GiroComponent implements OnInit {
    public todoList: Array<Todo>;
    public isEditing: boolean;
    giro: Giro;
    mensaje: GiroService;
    constructor(private getquot: GiroService, private giroService : GiroService) {
        this.giro = new Giro();
        this.giroService.getQuote();
        this.todoList = new Array<Todo>();
        this.isEditing = false;
    }

    ngOnInit() {
        LocalStorage.todos.forEach(e => {
            this.todoList.push(new Todo(e.todoName, e.isDone,e.isEditing));
        });
    }
    public newTodo() {
        dialogs.prompt({
            title: "Nuevo Giro",
            message: "Ingrese un nuevo giro",
            okButtonText: "Agregar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result && r.text != "") { 
              /* Objeto giro */
              this.giro.setIdGiro  = "0";
              this.giro.setGiro    = r.text;
              this.giro.setEstGiro = true;

              console.log(this.giro.getGiro);

              this.giroService.postQuote(this.giro);

              this.todoList.push(new Todo(r.text));
              LocalStorage.todos = this.todoList;
            }
        });
    }

    public deleteTodo(todo: Todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        LocalStorage.todos = this.todoList;
    }

    public editTodo(todo: Todo) {
        if (this.isEditing)
            this.todoList.forEach(t => { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
        LocalStorage.todos = this.todoList;
    }

    public doneEditing(todo: Todo) {
        todo.editing = false;
        this.isEditing = false;
        LocalStorage.todos = this.todoList;
    }

    public toggleDone(todo: Todo) {
        todo.done = !todo.done;
        LocalStorage.todos = this.todoList;
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