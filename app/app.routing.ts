import { ListaComponent } from "./componentes/lista/lista.component"

import { ValidaComponent } from "./componentes/sg/valida.component"

import { LoginComponent } from "./componentes/sg/usuario.component"
import { PasswordComponent } from "./componentes/sg/contrasena.component"
import { ChanceComponent } from "./componentes/sg/cambiocontra.component"


import { EleccionComponent } from "./componentes/ope/elecciongiro.component"

import { PersonaComponent } from "./componentes/sg/persona.component"
import { ProveedorComponent } from "./componentes/sg/proveedor.component"
import { RegvariosComponent } from "./componentes/sg/regvarios.component"

import { DireccionComponent } from "./componentes/ope/direccion.component"

import { CategoriasComponent } from "./componentes/ope/categoria.component"

//adriana
import { DatosComponent } from "./componentes/ope/datos.component"
import { ActualizaDatosComponent } from "./componentes/ope/actDatosPer.component"
import { ActdirComponent } from "./componentes/ope/actdir.component"


//Edgar
import { GiroComponent } from "./componentes/ct/giro.component"
import { AtributosComponent } from "./componentes/ct/atributos.component"
import { TarjetaComponent } from "./componentes/ope/tarjeta.component"
import { DetProductoComponent } from "./componentes/ope/detprod.component"


export const routes = [
    { path: "", component: ListaComponent },
    { path: "sg/valida", component: ValidaComponent },

    { path: "sg/usuario", component: LoginComponent },
    { path: "sg/contrasena", component: PasswordComponent },
    { path: "sg/cambio", component: ChanceComponent },

    { path: "ope/eleccion", component: EleccionComponent },
    
    { path: "sg/persona", component: PersonaComponent },
    { path: "sg/proveedor", component: ProveedorComponent },
    { path: "sg/regvarios", component: RegvariosComponent },

    { path: "ope/dir", component: DireccionComponent },

    { path: "ope/categoria", component: CategoriasComponent },

    { path: "ope/datos", component: DatosComponent },
    { path: "ope/actDatPer", component: ActualizaDatosComponent },
    { path: "ope/actdir", component: ActdirComponent },

    //Edgar
    { path: "ct/giro", component: GiroComponent },
    { path: "ct/atributo", component: AtributosComponent },
    { path: "ope/tarjeta", component: TarjetaComponent },
    { path: "ope/detprod", component: DetProductoComponent }


];

export const navigatableComponents = [
    ListaComponent,

    ValidaComponent,

    LoginComponent,
    PasswordComponent,
    ChanceComponent,

    EleccionComponent,

    PersonaComponent,
    ProveedorComponent,
    RegvariosComponent,

    DireccionComponent,

    CategoriasComponent,

    DatosComponent,
    ActualizaDatosComponent,
    ActdirComponent,
    TarjetaComponent,


    DetProductoComponent,
    AtributosComponent,
    GiroComponent
];