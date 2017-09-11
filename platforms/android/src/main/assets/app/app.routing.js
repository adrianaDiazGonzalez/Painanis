"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista_component_1 = require("./componentes/lista/lista.component");
var categoria_component_1 = require("./componentes/ope/categoria.component");
var giro_component_1 = require("./componentes/ct/giro.component");
var valida_component_1 = require("./componentes/sg/valida.component");
var usuario_component_1 = require("./componentes/sg/usuario.component");
var persona_component_1 = require("./componentes/sg/persona.component");
var contrasena_component_1 = require("./componentes/sg/contrasena.component");
var cambiocontra_component_1 = require("./componentes/sg/cambiocontra.component");
var direccion_component_1 = require("./componentes/ope/direccion.component");
//adriana
var datos_component_1 = require("./componentes/ope/datos.component");
var actDatosPer_component_1 = require("./componentes/ope/actDatosPer.component");
var actdir_component_1 = require("./componentes/ope/actdir.component");
//Edgar
var atributos_component_1 = require("./componentes/ct/atributos.component");
var tarjeta_component_1 = require("./componentes/ope/tarjeta.component");
var detprod_component_1 = require("./componentes/ope/detprod.component");
exports.routes = [
    { path: "", component: lista_component_1.ListaComponent },
    { path: "ope/categoria", component: categoria_component_1.CategoriasComponent },
    { path: "ct/giro", component: giro_component_1.GiroComponent },
    { path: "sg/valida", component: valida_component_1.ValidaComponent },
    { path: "sg/usuario", component: usuario_component_1.LoginComponent },
    { path: "sg/persona", component: persona_component_1.PersonaComponent },
    { path: "sg/contrasena", component: contrasena_component_1.PasswordComponent },
    { path: "sg/cambio", component: cambiocontra_component_1.ChanceComponent },
    { path: "ope/datos", component: datos_component_1.DatosComponent },
    { path: "ope/dir", component: direccion_component_1.DireccionComponent },
    { path: "ope/datos", component: datos_component_1.DatosComponent },
    { path: "ope/actDatos", component: datos_component_1.DatosComponent },
    { path: "ope/actDatPer", component: actDatosPer_component_1.ActualizaDatosComponent },
    { path: "ope/actdir", component: actdir_component_1.ActdirComponent },
    //Edgar
    { path: "ct/atributo", component: atributos_component_1.AtributosComponent },
    { path: "ope/tarjeta", component: tarjeta_component_1.TarjetaComponent },
    { path: "ope/detprod", component: detprod_component_1.DetProductoComponent }
];
exports.navigatableComponents = [
    lista_component_1.ListaComponent,
    categoria_component_1.CategoriasComponent,
    giro_component_1.GiroComponent,
    valida_component_1.ValidaComponent,
    usuario_component_1.LoginComponent,
    persona_component_1.PersonaComponent,
    contrasena_component_1.PasswordComponent,
    cambiocontra_component_1.ChanceComponent,
    direccion_component_1.DireccionComponent,
    datos_component_1.DatosComponent,
    actDatosPer_component_1.ActualizaDatosComponent,
    actdir_component_1.ActdirComponent,
    atributos_component_1.AtributosComponent,
    tarjeta_component_1.TarjetaComponent,
    detprod_component_1.DetProductoComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFvRTtBQUNwRSw2RUFBMkU7QUFDM0Usa0VBQStEO0FBQy9ELHNFQUFtRTtBQUNuRSx3RUFBbUU7QUFDbkUsd0VBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxrRkFBeUU7QUFDekUsNkVBQTBFO0FBQzFFLFNBQVM7QUFDVCxxRUFBa0U7QUFDbEUsaUZBQWlGO0FBQ2pGLHVFQUFvRTtBQUdwRSxPQUFPO0FBQ1AsNEVBQXlFO0FBQ3pFLHlFQUFzRTtBQUN0RSx5RUFBMEU7QUFFN0QsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUseUNBQW1CLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtDQUFjLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHdDQUFpQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWUsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsK0NBQXVCLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBR2xELE9BQU87SUFDUCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx3Q0FBb0IsRUFBRTtDQUczRCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxnQ0FBYztJQUNkLHlDQUFtQjtJQUNuQiw4QkFBYTtJQUNiLGtDQUFlO0lBQ2Ysa0NBQWM7SUFDZCxvQ0FBZ0I7SUFDaEIsd0NBQWlCO0lBQ2pCLHdDQUFlO0lBQ2Ysd0NBQWtCO0lBQ2xCLGdDQUFjO0lBQ2QsK0NBQXVCO0lBQ3ZCLGtDQUFlO0lBRWYsd0NBQWtCO0lBQ2xCLG9DQUFnQjtJQUNoQix3Q0FBb0I7Q0FFdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQ2F0ZWdvcmlhc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9jYXRlZ29yaWEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgR2lyb0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL2N0L2dpcm8uY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVmFsaWRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvdmFsaWRhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvdXN1YXJpby5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBQZXJzb25hQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvcGVyc29uYS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL2NvbnRyYXNlbmEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQ2hhbmNlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvY2FtYmlvY29udHJhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IERpcmVjY2lvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9kaXJlY2Npb24uY29tcG9uZW50XCJcclxuLy9hZHJpYW5hXHJcbmltcG9ydCB7IERhdG9zQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RhdG9zLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IEFjdHVhbGl6YURhdG9zQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2FjdERhdG9zUGVyLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IEFjdGRpckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9hY3RkaXIuY29tcG9uZW50XCJcclxuXHJcblxyXG4vL0VkZ2FyXHJcbmltcG9ydCB7IEF0cmlidXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL2N0L2F0cmlidXRvcy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBUYXJqZXRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL3RhcmpldGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRGV0UHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvZGV0cHJvZC5jb21wb25lbnRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMaXN0YUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9jYXRlZ29yaWFcIiwgY29tcG9uZW50OiBDYXRlZ29yaWFzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY3QvZ2lyb1wiLCBjb21wb25lbnQ6IEdpcm9Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy92YWxpZGFcIiwgY29tcG9uZW50OiBWYWxpZGFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy91c3VhcmlvXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9wZXJzb25hXCIsIGNvbXBvbmVudDogUGVyc29uYUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInNnL2NvbnRyYXNlbmFcIiwgY29tcG9uZW50OiBQYXNzd29yZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInNnL2NhbWJpb1wiLCBjb21wb25lbnQ6IENoYW5jZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kYXRvc1wiLCBjb21wb25lbnQ6IERhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2RpclwiLCBjb21wb25lbnQ6IERpcmVjY2lvbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kYXRvc1wiLCBjb21wb25lbnQ6IERhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2FjdERhdG9zXCIsIGNvbXBvbmVudDogRGF0b3NDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvYWN0RGF0UGVyXCIsIGNvbXBvbmVudDogQWN0dWFsaXphRGF0b3NDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvYWN0ZGlyXCIsIGNvbXBvbmVudDogQWN0ZGlyQ29tcG9uZW50IH0sXHJcblxyXG5cclxuICAgIC8vRWRnYXJcclxuICAgIHsgcGF0aDogXCJjdC9hdHJpYnV0b1wiLCBjb21wb25lbnQ6IEF0cmlidXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS90YXJqZXRhXCIsIGNvbXBvbmVudDogVGFyamV0YUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kZXRwcm9kXCIsIGNvbXBvbmVudDogRGV0UHJvZHVjdG9Db21wb25lbnQgfVxyXG5cclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gICAgTGlzdGFDb21wb25lbnQsXHJcbiAgICBDYXRlZ29yaWFzQ29tcG9uZW50LFxyXG4gICAgR2lyb0NvbXBvbmVudCxcclxuICAgIFZhbGlkYUNvbXBvbmVudCxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgUGVyc29uYUNvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgQ2hhbmNlQ29tcG9uZW50LFxyXG4gICAgRGlyZWNjaW9uQ29tcG9uZW50LFxyXG4gICAgRGF0b3NDb21wb25lbnQsXHJcbiAgICBBY3R1YWxpemFEYXRvc0NvbXBvbmVudCxcclxuICAgIEFjdGRpckNvbXBvbmVudCxcclxuICAgIFxyXG4gICAgQXRyaWJ1dG9zQ29tcG9uZW50LFxyXG4gICAgVGFyamV0YUNvbXBvbmVudCxcclxuICAgIERldFByb2R1Y3RvQ29tcG9uZW50XHJcblxyXG5dOyJdfQ==