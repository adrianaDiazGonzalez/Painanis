import { CategoriaComponent} from  "./plantillas/ope/categoria.component"
import { GiroComponent}      from  "./plantillas/ct/giro.component"
import { MenuComponent}      from  "./plantillas/menu/menu.component"
import { ValidaComponent}    from  "./plantillas/sg/valida.component"


export const routes = [
     { path: "",               component: MenuComponent },
     { path: "ope/categoria",  component: CategoriaComponent },
     { path: "ct/giro",        component: GiroComponent },
     { path: "sg/valida",      component: ValidaComponent},
    
];

export const navigatableComponents = [
    MenuComponent,
    CategoriaComponent,
    GiroComponent,
    ValidaComponent,
    
];