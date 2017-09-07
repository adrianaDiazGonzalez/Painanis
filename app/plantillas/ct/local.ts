import * as ApplicationSettings from "application-settings";

export class LocalStorage {
    public static set atributo(todo: Array<any>) {
        ApplicationSettings.setString("atributo", JSON.stringify(todo));
    }

    public static get atributo(): Array<any> {
        var atributo = ApplicationSettings.getString("atributo");
        return !atributo ? new Array<any>() : JSON.parse(atributo);
    }
}