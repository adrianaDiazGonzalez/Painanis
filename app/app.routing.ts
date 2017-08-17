import { CategoriaComponent} from  "./plantillas/ope/categoria.component"
import { GiroComponent}      from  "./plantillas/ct/giro.component"
import { MenuComponent}      from  "./plantillas/menu/menu.component"
import { ValidaComponent}    from  "./plantillas/sg/valida.component"
import { LoginComponent}     from  "./plantillas/sg/usuario.component"
import { PersonaComponent}   from  "./plantillas/sg/persona.component"
import { PasswordComponent}  from  "./plantillas/sg/contrasena.component"
import { ChanceComponent}    from  "./plantillas/sg/cambiocontra.component"


export const routes = [
     { path: "",               component: MenuComponent },
     { path: "ope/categoria",  component: CategoriaComponent},
     { path: "ct/giro",        component: GiroComponent },
     { path: "sg/valida",      component: ValidaComponent},
     { path: "sg/usuario",     component: LoginComponent},
     { path: "sg/persona",     component: PersonaComponent},
     { path: "sg/contrasena",  component: PasswordComponent},
     { path: "sg/cambio",      component: ChanceComponent}
    
];

export const navigatableComponents = [
    MenuComponent,
    CategoriaComponent,
    GiroComponent,
    ValidaComponent,
    LoginComponent,
    PersonaComponent,
    PasswordComponent,
    ChanceComponent
    
];