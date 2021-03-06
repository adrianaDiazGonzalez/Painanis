"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista_component_1 = require("./componentes/lista/lista.component");
var valida_component_1 = require("./componentes/sg/valida.component");
var usuario_component_1 = require("./componentes/sg/usuario.component");
var contrasena_component_1 = require("./componentes/sg/contrasena.component");
var cambiocontra_component_1 = require("./componentes/sg/cambiocontra.component");
var elecciongiro_component_1 = require("./componentes/ope/elecciongiro.component");
var persona_component_1 = require("../app/componentes/sg/persona.component");
//import { ProveedorComponent } from "./componentes/sg/proveedor.component"
//import { RegvariosComponent } from "./componentes/sg/regvarios.component"
var direccion_component_1 = require("./componentes/ope/direccion.component");
var categoria_component_1 = require("./componentes/ope/categoria.component");
//adriana
var datos_component_1 = require("./componentes/ope/datos.component");
var actDatosPer_component_1 = require("./componentes/ope/actDatosPer.component");
var actdir_component_1 = require("./componentes/ope/actdir.component");
//Edgar
var giro_component_1 = require("./componentes/ct/giro.component");
var atributos_component_1 = require("./componentes/ct/atributos.component");
var tarjeta_component_1 = require("./componentes/ope/tarjeta.component");
var detprod_component_1 = require("./componentes/ope/detprod.component");
var evaluacion_component_1 = require("./componentes/ope/evaluacion.component");
//Pantallas documentacion
var carrito_1 = require("./componentes/ope/carrito");
exports.routes = [
    { path: "ope/carrito", component: carrito_1.CarritoComponent },
    { path: "", component: lista_component_1.ListaComponent },
    { path: "sg/valida", component: valida_component_1.ValidaComponent },
    { path: "sg/usuario", component: usuario_component_1.LoginComponent },
    { path: "sg/contrasena", component: contrasena_component_1.PasswordComponent },
    { path: "sg/cambio", component: cambiocontra_component_1.ChanceComponent },
    { path: "ope/eleccion", component: elecciongiro_component_1.EleccionComponent },
    { path: "sg/persona", component: persona_component_1.PersonaComponent },
    // { path: "sg/proveedor", component: ProveedorComponent },
    //{ path: "sg/regvarios", component: RegvariosComponent },
    { path: "ope/dir", component: direccion_component_1.DireccionComponent },
    { path: "ope/categoria", component: categoria_component_1.CategoriasComponent },
    { path: "ope/datos", component: datos_component_1.DatosComponent },
    { path: "ope/actDatPer", component: actDatosPer_component_1.ActualizaDatosComponent },
    { path: "ope/actdir", component: actdir_component_1.ActdirComponent },
    //Edgar
    { path: "ct/giro", component: giro_component_1.GiroComponent },
    { path: "ct/atributo", component: atributos_component_1.AtributosComponent },
    { path: "ope/tarjeta", component: tarjeta_component_1.TarjetaComponent },
    { path: "ope/detprod", component: detprod_component_1.DetProductoComponent },
    { path: "ope/evaluacion", component: evaluacion_component_1.EvaluacionComponent }
];
exports.navigatableComponents = [
    carrito_1.CarritoComponent,
    lista_component_1.ListaComponent,
    valida_component_1.ValidaComponent,
    usuario_component_1.LoginComponent,
    contrasena_component_1.PasswordComponent,
    cambiocontra_component_1.ChanceComponent,
    elecciongiro_component_1.EleccionComponent,
    persona_component_1.PersonaComponent,
    //ProveedorComponent,
    //RegvariosComponent,
    direccion_component_1.DireccionComponent,
    categoria_component_1.CategoriasComponent,
    datos_component_1.DatosComponent,
    actDatosPer_component_1.ActualizaDatosComponent,
    actdir_component_1.ActdirComponent,
    tarjeta_component_1.TarjetaComponent,
    detprod_component_1.DetProductoComponent,
    evaluacion_component_1.EvaluacionComponent,
    atributos_component_1.AtributosComponent,
    giro_component_1.GiroComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFvRTtBQUNwRSxzRUFBbUU7QUFDbkUsd0VBQW1FO0FBQ25FLDhFQUF5RTtBQUN6RSxrRkFBeUU7QUFDekUsbUZBQTRFO0FBQzVFLDZFQUEwRTtBQUMxRSwyRUFBMkU7QUFDM0UsMkVBQTJFO0FBQzNFLDZFQUEwRTtBQUMxRSw2RUFBMkU7QUFDM0UsU0FBUztBQUNULHFFQUFrRTtBQUNsRSxpRkFBaUY7QUFDakYsdUVBQW9FO0FBQ3BFLE9BQU87QUFDUCxrRUFBK0Q7QUFDL0QsNEVBQXlFO0FBQ3pFLHlFQUFzRTtBQUN0RSx5RUFBMEU7QUFDMUUsK0VBQTRFO0FBRzVFLHlCQUF5QjtBQUN6QixxREFBNEQ7QUFHL0MsUUFBQSxNQUFNLEdBQUc7SUFFakIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRTtJQU1yRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBRWpELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWMsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHdDQUFpQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWUsRUFBRTtJQUVqRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDBDQUFpQixFQUFFO0lBRXRELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDcEQsMkRBQTJEO0lBQzFELDBEQUEwRDtJQUUxRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBRWxELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUseUNBQW1CLEVBQUU7SUFFekQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsK0NBQXVCLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBRWxELE9BQU87SUFDUCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDN0MsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsd0NBQW9CLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO0NBSTdELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBRWpDLDBCQUFnQjtJQU9oQixnQ0FBYztJQUVkLGtDQUFlO0lBRWYsa0NBQWM7SUFDZCx3Q0FBaUI7SUFDakIsd0NBQWU7SUFFZiwwQ0FBaUI7SUFFakIsb0NBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFFckIsd0NBQWtCO0lBRWxCLHlDQUFtQjtJQUVuQixnQ0FBYztJQUNkLCtDQUF1QjtJQUN2QixrQ0FBZTtJQUNmLG9DQUFnQjtJQUNoQix3Q0FBb0I7SUFDcEIsMENBQW1CO0lBRW5CLHdDQUFrQjtJQUNsQiw4QkFBYTtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBWYWxpZGFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy92YWxpZGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy91c3VhcmlvLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvY29udHJhc2VuYS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDaGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9jYW1iaW9jb250cmEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRWxlY2Npb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvZWxlY2Npb25naXJvLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFBlcnNvbmFDb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudGVzL3NnL3BlcnNvbmEuY29tcG9uZW50XCJcclxuLy9pbXBvcnQgeyBQcm92ZWVkb3JDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9wcm92ZWVkb3IuY29tcG9uZW50XCJcclxuLy9pbXBvcnQgeyBSZWd2YXJpb3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9yZWd2YXJpb3MuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRGlyZWNjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RpcmVjY2lvbi5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDYXRlZ29yaWFzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2NhdGVnb3JpYS5jb21wb25lbnRcIlxyXG4vL2FkcmlhbmFcclxuaW1wb3J0IHsgRGF0b3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvZGF0b3MuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQWN0dWFsaXphRGF0b3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvYWN0RGF0b3NQZXIuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQWN0ZGlyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2FjdGRpci5jb21wb25lbnRcIlxyXG4vL0VkZ2FyXHJcbmltcG9ydCB7IEdpcm9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9jdC9naXJvLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IEF0cmlidXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL2N0L2F0cmlidXRvcy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBUYXJqZXRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL3RhcmpldGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRGV0UHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvZGV0cHJvZC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBFdmFsdWFjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2V2YWx1YWNpb24uY29tcG9uZW50XCJcclxuXHJcblxyXG4vL1BhbnRhbGxhcyBkb2N1bWVudGFjaW9uXHJcbmltcG9ydCB7IENhcnJpdG9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvY2Fycml0b1wiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuXHJcbiAgICAgeyBwYXRoOiBcIm9wZS9jYXJyaXRvXCIsIGNvbXBvbmVudDogQ2Fycml0b0NvbXBvbmVudCB9LFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTGlzdGFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy92YWxpZGFcIiwgY29tcG9uZW50OiBWYWxpZGFDb21wb25lbnQgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwic2cvdXN1YXJpb1wiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvY29udHJhc2VuYVwiLCBjb21wb25lbnQ6IFBhc3N3b3JkQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvY2FtYmlvXCIsIGNvbXBvbmVudDogQ2hhbmNlQ29tcG9uZW50IH0sXHJcblxyXG4gICAgeyBwYXRoOiBcIm9wZS9lbGVjY2lvblwiLCBjb21wb25lbnQ6IEVsZWNjaW9uQ29tcG9uZW50IH0sXHJcbiAgICBcclxuICAgIHsgcGF0aDogXCJzZy9wZXJzb25hXCIsIGNvbXBvbmVudDogUGVyc29uYUNvbXBvbmVudCB9LFxyXG4gICAvLyB7IHBhdGg6IFwic2cvcHJvdmVlZG9yXCIsIGNvbXBvbmVudDogUHJvdmVlZG9yQ29tcG9uZW50IH0sXHJcbiAgICAvL3sgcGF0aDogXCJzZy9yZWd2YXJpb3NcIiwgY29tcG9uZW50OiBSZWd2YXJpb3NDb21wb25lbnQgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwib3BlL2RpclwiLCBjb21wb25lbnQ6IERpcmVjY2lvbkNvbXBvbmVudCB9LFxyXG5cclxuICAgIHsgcGF0aDogXCJvcGUvY2F0ZWdvcmlhXCIsIGNvbXBvbmVudDogQ2F0ZWdvcmlhc0NvbXBvbmVudCB9LFxyXG5cclxuICAgIHsgcGF0aDogXCJvcGUvZGF0b3NcIiwgY29tcG9uZW50OiBEYXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9hY3REYXRQZXJcIiwgY29tcG9uZW50OiBBY3R1YWxpemFEYXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9hY3RkaXJcIiwgY29tcG9uZW50OiBBY3RkaXJDb21wb25lbnQgfSxcclxuXHJcbiAgICAvL0VkZ2FyXHJcbiAgICB7IHBhdGg6IFwiY3QvZ2lyb1wiLCBjb21wb25lbnQ6IEdpcm9Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjdC9hdHJpYnV0b1wiLCBjb21wb25lbnQ6IEF0cmlidXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS90YXJqZXRhXCIsIGNvbXBvbmVudDogVGFyamV0YUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kZXRwcm9kXCIsIGNvbXBvbmVudDogRGV0UHJvZHVjdG9Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvZXZhbHVhY2lvblwiLCBjb21wb25lbnQ6IEV2YWx1YWNpb25Db21wb25lbnQgfVxyXG5cclxuXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuXHJcbiAgICBDYXJyaXRvQ29tcG9uZW50LFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIExpc3RhQ29tcG9uZW50LFxyXG5cclxuICAgIFZhbGlkYUNvbXBvbmVudCxcclxuXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgQ2hhbmNlQ29tcG9uZW50LFxyXG5cclxuICAgIEVsZWNjaW9uQ29tcG9uZW50LFxyXG5cclxuICAgIFBlcnNvbmFDb21wb25lbnQsXHJcbiAgICAvL1Byb3ZlZWRvckNvbXBvbmVudCxcclxuICAgIC8vUmVndmFyaW9zQ29tcG9uZW50LFxyXG5cclxuICAgIERpcmVjY2lvbkNvbXBvbmVudCxcclxuXHJcbiAgICBDYXRlZ29yaWFzQ29tcG9uZW50LFxyXG5cclxuICAgIERhdG9zQ29tcG9uZW50LFxyXG4gICAgQWN0dWFsaXphRGF0b3NDb21wb25lbnQsXHJcbiAgICBBY3RkaXJDb21wb25lbnQsXHJcbiAgICBUYXJqZXRhQ29tcG9uZW50LFxyXG4gICAgRGV0UHJvZHVjdG9Db21wb25lbnQsXHJcbiAgICBFdmFsdWFjaW9uQ29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBBdHJpYnV0b3NDb21wb25lbnQsXHJcbiAgICBHaXJvQ29tcG9uZW50XHJcbl07Il19