import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import dialogs = require("ui/dialogs");
import { LocalStorage } from "./local-storage";
import { Giro } from "../../modelos/ct/giro";
import { GiroService } from "../../servicios/ct/giro";
import { HttpModule, Http } from '@angular/http';

@Component({
    selector: "my-app",
    providers: [GiroService],
    templateUrl: "plantillas/ct/giro.html",
    styleUrls: ["plantillas/css/giro.css"]
})

export class GiroComponent  /*implements OnInit*/ {
    public todoList: any;
    public editar: boolean;
    giro: Giro;
    resultado;


    constructor(private giroService: GiroService) {

        this.giro = new Giro();
        this.giroService.getGiros().then(
            (resolve) => {
                this.resultado = resolve;
                this.resultado
                    .map(response => response.json())
                    .subscribe(result => {
                        this.todoList = result.response.tt_ctGiro.tt_ctGiro;
                    }, error => {
                        JSON.stringify(error);
                    });
            }
        )
        this.editar = false;
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
                this.giro.setIdGiro = "0";
                this.giro.setGiro = r.text;
                this.giro.setEstGiro = true;
                this.giroService.postQuote(this.giro);
            }
        });
    }

    public editTodo(giro: Giro) {
        console.log(giro.toString());
        if (!this.editar)
            this.todoList.forEach(t => { t.editar = false; });
        this.editar = true;
        //giro.setlEditar = true;
        //LocalStorage.todos = this.todoList;
        //this.editar = true;
        //console.log(giro.toString());

    }

    public doneEditing(giro: Giro) {
        //giro.setlEditar = false;
        this.editar = false;
        //LocalStorage.todos = this.todoList;giro
    }

    public deleteTodo(giro: Giro) {
        this.giroService.deleteQuote(giro.toString());
    }

}
