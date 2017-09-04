import { ListaComponent} from "./plantillas/lista/lista.component"
import { CategoriasComponent } from "./plantillas/ope/categoria.component"
import { GiroComponent } from "./plantillas/ct/giro.component"
import { ValidaComponent } from "./plantillas/sg/valida.component"
import { LoginComponent } from "./plantillas/sg/usuario.component"
import { PersonaComponent } from "./plantillas/sg/persona.component"
import { PasswordComponent } from "./plantillas/sg/contrasena.component"
import { ChanceComponent } from "./plantillas/sg/cambiocontra.component"
import { DireccionComponent } from "./plantillas/ope/direccion.component"
import { DatosComponent } from "./plantillas/ope/datos.component"


export const routes = [
    { path: "", component: ListaComponent },
    { path: "ope/categoria", component: CategoriasComponent },
    { path: "ct/giro", component: GiroComponent },
    { path: "sg/valida", component: ValidaComponent },
    { path: "sg/usuario", component: LoginComponent },
    { path: "sg/persona", component: PersonaComponent },
    { path: "sg/contrasena", component: PasswordComponent },
    { path: "sg/cambio", component: ChanceComponent },
    { path: "ope/dir",  component: DireccionComponent },
    { path: "ope/datos",  component: DatosComponent }
];

export const navigatableComponents = [
    ListaComponent,
    CategoriasComponent,
    GiroComponent,
    ValidaComponent,
    LoginComponent,
    PersonaComponent,
    PasswordComponent,
    ChanceComponent,
    DireccionComponent,
    DatosComponent

];