import * as ApplicationSettings from "application-settings";

export class LocalStorage {
    public static set todos(todo: any) {
        console.log("Mensaje en el local storage", JSON.stringify(todo) );
        ApplicationSettings.setString("todos", JSON.stringify(todo));
    }

    public static get todos(): any {
        var todos = ApplicationSettings.getString("todos");
        return !todos ? new Array<any>() : JSON.parse(todos);
    }
}