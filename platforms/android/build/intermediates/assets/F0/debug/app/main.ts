import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppModule } from "./app.module";
import {NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import { GiroComponent } from "./plantillas/ct/giro.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

@NgModule ({
    declarations: [GiroComponent],
    bootstrap: [GiroComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
})
class AppComponentModule{}

platformNativeScriptDynamic().bootstrapModule(AppModule);
