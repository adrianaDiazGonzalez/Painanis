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
var evaluacion_component_1 = require("./componentes/ope/evaluacion.component");
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
    { path: "ope/detprod", component: detprod_component_1.DetProductoComponent },
    { path: "ope/evaluacion", component: evaluacion_component_1.EvaluacionComponent }
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
    detprod_component_1.DetProductoComponent,
    evaluacion_component_1.EvaluacionComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFvRTtBQUNwRSw2RUFBMkU7QUFDM0Usa0VBQStEO0FBQy9ELHNFQUFtRTtBQUNuRSx3RUFBbUU7QUFDbkUsd0VBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxrRkFBeUU7QUFDekUsNkVBQTBFO0FBQzFFLFNBQVM7QUFDVCxxRUFBa0U7QUFDbEUsaUZBQWlGO0FBQ2pGLHVFQUFvRTtBQUdwRSxPQUFPO0FBQ1AsNEVBQXlFO0FBQ3pFLHlFQUFzRTtBQUN0RSx5RUFBMEU7QUFDMUUsK0VBQTRFO0FBRS9ELFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFO0lBQ3pELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUM3QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBYyxFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFDbkQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx3Q0FBaUIsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFlLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLCtDQUF1QixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUdsRCxPQUFPO0lBQ1AsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsd0NBQW9CLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO0NBSTdELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLGdDQUFjO0lBQ2QseUNBQW1CO0lBQ25CLDhCQUFhO0lBQ2Isa0NBQWU7SUFDZixrQ0FBYztJQUNkLG9DQUFnQjtJQUNoQix3Q0FBaUI7SUFDakIsd0NBQWU7SUFDZix3Q0FBa0I7SUFDbEIsZ0NBQWM7SUFDZCwrQ0FBdUI7SUFDdkIsa0NBQWU7SUFFZix3Q0FBa0I7SUFDbEIsb0NBQWdCO0lBQ2hCLHdDQUFvQjtJQUNwQiwwQ0FBbUI7Q0FFdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQ2F0ZWdvcmlhc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9jYXRlZ29yaWEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgR2lyb0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL2N0L2dpcm8uY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVmFsaWRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvdmFsaWRhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvdXN1YXJpby5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBQZXJzb25hQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvcGVyc29uYS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL2NvbnRyYXNlbmEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQ2hhbmNlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvY2FtYmlvY29udHJhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IERpcmVjY2lvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9kaXJlY2Npb24uY29tcG9uZW50XCJcclxuLy9hZHJpYW5hXHJcbmltcG9ydCB7IERhdG9zQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RhdG9zLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IEFjdHVhbGl6YURhdG9zQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2FjdERhdG9zUGVyLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IEFjdGRpckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9hY3RkaXIuY29tcG9uZW50XCJcclxuXHJcblxyXG4vL0VkZ2FyXHJcbmltcG9ydCB7IEF0cmlidXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL2N0L2F0cmlidXRvcy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBUYXJqZXRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL3RhcmpldGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRGV0UHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvZGV0cHJvZC5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBFdmFsdWFjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2V2YWx1YWNpb24uY29tcG9uZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTGlzdGFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvY2F0ZWdvcmlhXCIsIGNvbXBvbmVudDogQ2F0ZWdvcmlhc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImN0L2dpcm9cIiwgY29tcG9uZW50OiBHaXJvQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvdmFsaWRhXCIsIGNvbXBvbmVudDogVmFsaWRhQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvdXN1YXJpb1wiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvcGVyc29uYVwiLCBjb21wb25lbnQ6IFBlcnNvbmFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jb250cmFzZW5hXCIsIGNvbXBvbmVudDogUGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jYW1iaW9cIiwgY29tcG9uZW50OiBDaGFuY2VDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvZGF0b3NcIiwgY29tcG9uZW50OiBEYXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kaXJcIiwgY29tcG9uZW50OiBEaXJlY2Npb25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvZGF0b3NcIiwgY29tcG9uZW50OiBEYXRvc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9hY3REYXRvc1wiLCBjb21wb25lbnQ6IERhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2FjdERhdFBlclwiLCBjb21wb25lbnQ6IEFjdHVhbGl6YURhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2FjdGRpclwiLCBjb21wb25lbnQ6IEFjdGRpckNvbXBvbmVudCB9LFxyXG4gICAgXHJcblxyXG4gICAgLy9FZGdhclxyXG4gICAgeyBwYXRoOiBcImN0L2F0cmlidXRvXCIsIGNvbXBvbmVudDogQXRyaWJ1dG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL3RhcmpldGFcIiwgY29tcG9uZW50OiBUYXJqZXRhQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2RldHByb2RcIiwgY29tcG9uZW50OiBEZXRQcm9kdWN0b0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9ldmFsdWFjaW9uXCIsIGNvbXBvbmVudDogRXZhbHVhY2lvbkNvbXBvbmVudCB9XHJcblxyXG5cclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xyXG4gICAgTGlzdGFDb21wb25lbnQsXHJcbiAgICBDYXRlZ29yaWFzQ29tcG9uZW50LFxyXG4gICAgR2lyb0NvbXBvbmVudCxcclxuICAgIFZhbGlkYUNvbXBvbmVudCxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgUGVyc29uYUNvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgQ2hhbmNlQ29tcG9uZW50LFxyXG4gICAgRGlyZWNjaW9uQ29tcG9uZW50LFxyXG4gICAgRGF0b3NDb21wb25lbnQsXHJcbiAgICBBY3R1YWxpemFEYXRvc0NvbXBvbmVudCxcclxuICAgIEFjdGRpckNvbXBvbmVudCxcclxuICAgIFxyXG4gICAgQXRyaWJ1dG9zQ29tcG9uZW50LFxyXG4gICAgVGFyamV0YUNvbXBvbmVudCxcclxuICAgIERldFByb2R1Y3RvQ29tcG9uZW50LFxyXG4gICAgRXZhbHVhY2lvbkNvbXBvbmVudFxyXG5cclxuXTsiXX0=