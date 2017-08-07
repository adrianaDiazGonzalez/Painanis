import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import dialogs = require("ui/dialogs");
import { LocalStorage } from "./local-storage";
@Component({
  selector: "my-app",
  template: `
     <ActionBar title="Giros" class="action-bar">
     <ActionItem ios.position="right" android.position="actionBar" (tap)="newTodo()">
        <Label text="&#xf067;" class="fa action-item"></Label>
    </ActionItem>
</ActionBar>
<StackLayout>
    <GridLayout *ngFor="let todo of todoList" rows="auto" columns="auto, *, auto, auto">
        <Button row="0" col="0" [text]="todo.done ? '&#xf05d;' : '&#xf10c;'" class="fa" [class.btn-done]="todo.done" (tap)="toggleDone(todo)"></Button>
        
        <Label *ngIf="!todo.editing" row="0" col="1" [text]="todo.name" [class.done]="todo.done" textWrap="true"></Label>
        <TextField *ngIf="todo.editing" row="0" col="1" hint="Ingresa el nuevo nombre" [(ngModel)]="todo.name"></TextField>
        
        <Button row="0" col="2" [text]="todo.editing ? '&#xf00c;' : '&#xf040;'" class="fa" (tap)="todo.editing ? doneEditing(todo) : editTodo(todo)"></Button>
        <Button *ngIf="!todo.editing" row="0" col="3" text="&#xf1f8;" class="fa borrar" (tap)="deleteTodo(todo)"></Button>
    </GridLayout>
</StackLayout>

    `
    
})


export class GiroComponent implements OnInit {
    public todoList: Array<Todo>;
    public isEditing: boolean;

    constructor() {
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
            title: "Nuevo Todo",
            message: "Ingrese el titulo del nuevo todo",
            okButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result && r.text != "") {
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