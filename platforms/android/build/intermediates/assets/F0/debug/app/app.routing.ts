import { ListaComponent} from "./componentes/lista/lista.component"
import { CategoriasComponent } from "./componentes/ope/categoria.component"
import { GiroComponent } from "./componentes/ct/giro.component"
import { ValidaComponent } from "./componentes/sg/valida.component"
import { LoginComponent } from "./componentes/sg/usuario.component"
import { PersonaComponent } from "./componentes/sg/persona.component"
import { PasswordComponent } from "./componentes/sg/contrasena.component"
import { ChanceComponent } from "./componentes/sg/cambiocontra.component"
import { DireccionComponent } from "./componentes/ope/direccion.component"
import { DatosComponent } from "./componentes/ope/datos.component"
import { ActualizaDatosComponent } from "./componentes/ope/ActualizaDatos.component"


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
    { path: "ope/datos",  component: DatosComponent },
    { path: "ope/actDatos",  component: ActualizaDatosComponent }
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
    DatosComponent,
    ActualizaDatosComponent

];