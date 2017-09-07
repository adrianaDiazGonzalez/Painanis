<<<<<<< HEAD
import {ListaComponent} from "./plantillas/lista/lista.component"
import { CategoriasComponent } from "./plantillas/ope/categoria.component"
import { GiroComponent } from "./plantillas/ct/giro.component"
import { ValidaComponent } from "./plantillas/sg/valida.component"
import { LoginComponent } from "./plantillas/sg/usuario.component"
import { PersonaComponent } from "./plantillas/sg/persona.component"
import { PasswordComponent } from "./plantillas/sg/contrasena.component"
import { ChanceComponent } from "./plantillas/sg/cambiocontra.component"
import { MenuComponent } from "./plantillas/ope/menu.component"
import { DatosComponent } from "./plantillas/ope/datos.component"
import { AtributoComponent } from "./plantillas/ct/atributo"
=======
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

>>>>>>> 40a02424e6a4d2992c9fd6fdd23c0e0cf3f5db70

export const routes = [
    { path: "", component: ListaComponent },
    { path: "ope/categoria", component: CategoriasComponent },
    { path: "ct/giro", component: GiroComponent },
    { path: "sg/valida", component: ValidaComponent },
    { path: "sg/usuario", component: LoginComponent },
    { path: "sg/persona", component: PersonaComponent },
    { path: "sg/contrasena", component: PasswordComponent },
    { path: "sg/cambio", component: ChanceComponent },
<<<<<<< HEAD
    { path: "ope/menu",  component: MenuComponent },
    { path: "ope/datos",  component: DatosComponent },
    { path: "ct/atributo",  component: AtributoComponent }


=======
    { path: "ope/dir",  component: DireccionComponent },
    { path: "ope/datos",  component: DatosComponent },
    { path: "ope/actDatos",  component: ActualizaDatosComponent },
    { path: "ope/atributos",  component: ActualizaDatosComponent },
    { path: "ope/tarjeta",  component: ActualizaDatosComponent },
    { path: "ope/detprod",  component: ActualizaDatosComponent }
>>>>>>> 40a02424e6a4d2992c9fd6fdd23c0e0cf3f5db70
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
<<<<<<< HEAD
    MenuComponent,
    DatosComponent,
    AtributoComponent
=======
    DireccionComponent,
    DatosComponent,
    ActualizaDatosComponent
>>>>>>> 40a02424e6a4d2992c9fd6fdd23c0e0cf3f5db70

];