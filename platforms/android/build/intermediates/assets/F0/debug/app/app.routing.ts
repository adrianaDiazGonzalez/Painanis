import { CategoriaComponent} from  "./plantillas/ope/categoria.component"
import { GiroComponent}      from  "./plantillas/ct/giro.component"
import { MenuComponent}      from  "./plantillas/menu/menu.component"
import { ValidaComponent}    from  "./plantillas/sg/valida.component"
import { Agregar}             from "./plantillas/ct/agregar"

export const routes = [
     { path: "",               component: MenuComponent },
     { path: "ope/categoria",  component: CategoriaComponent },
     { path: "ct/giro",        component: GiroComponent },
     { path: "sg/valida",      component: ValidaComponent},
<<<<<<< HEAD
     { path: "ct/agregar",     component: Agregar}
=======
    
>>>>>>> 36fff9ecce2f4d4db4956a620442dd9aef33cc3b
];

export const navigatableComponents = [
    MenuComponent,
    CategoriaComponent,
    GiroComponent,
    ValidaComponent,
<<<<<<< HEAD
    Agregar
=======
    
>>>>>>> 36fff9ecce2f4d4db4956a620442dd9aef33cc3b
];