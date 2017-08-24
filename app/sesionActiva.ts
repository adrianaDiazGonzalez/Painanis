import * as ApplicationSettings from "application-settings";
//sirve para generar que la sesion del usuario permanesca activa
export class SesionActiva {
    public static set sesion (sesion:any) {
        console.log("jason",JSON.stringify(sesion));
        ApplicationSettings.setString("sesion", JSON.stringify(sesion));
    }
    public static get sesion(): any {
        var sesion = ApplicationSettings.getString("sesion");
        return !sesion ? new Array<any>() : JSON.parse(sesion);
    }
}