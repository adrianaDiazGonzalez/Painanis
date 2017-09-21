"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista_component_1 = require("./componentes/lista/lista.component");
var valida_component_1 = require("./componentes/sg/valida.component");
var usuario_component_1 = require("./componentes/sg/usuario.component");
var contrasena_component_1 = require("./componentes/sg/contrasena.component");
var cambiocontra_component_1 = require("./componentes/sg/cambiocontra.component");
var elecciongiro_component_1 = require("./componentes/ope/elecciongiro.component");
var persona_component_1 = require("./componentes/sg/persona.component");
var proveedor_component_1 = require("./componentes/sg/proveedor.component");
var regvarios_component_1 = require("./componentes/sg/regvarios.component");
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
exports.routes = [
    { path: "", component: lista_component_1.ListaComponent },
    { path: "sg/valida", component: valida_component_1.ValidaComponent },
    { path: "sg/usuario", component: usuario_component_1.LoginComponent },
    { path: "sg/contrasena", component: contrasena_component_1.PasswordComponent },
    { path: "sg/cambio", component: cambiocontra_component_1.ChanceComponent },
    { path: "ope/eleccion", component: elecciongiro_component_1.EleccionComponent },
    { path: "sg/persona", component: persona_component_1.PersonaComponent },
    { path: "sg/proveedor", component: proveedor_component_1.ProveedorComponent },
    { path: "sg/regvarios", component: regvarios_component_1.RegvariosComponent },
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
    lista_component_1.ListaComponent,
    valida_component_1.ValidaComponent,
    usuario_component_1.LoginComponent,
    contrasena_component_1.PasswordComponent,
    cambiocontra_component_1.ChanceComponent,
    elecciongiro_component_1.EleccionComponent,
    persona_component_1.PersonaComponent,
    proveedor_component_1.ProveedorComponent,
    regvarios_component_1.RegvariosComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFvRTtBQUVwRSxzRUFBbUU7QUFFbkUsd0VBQW1FO0FBQ25FLDhFQUF5RTtBQUN6RSxrRkFBeUU7QUFHekUsbUZBQTRFO0FBRTVFLHdFQUFxRTtBQUNyRSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDZFQUEwRTtBQUUxRSw2RUFBMkU7QUFFM0UsU0FBUztBQUNULHFFQUFrRTtBQUNsRSxpRkFBaUY7QUFDakYsdUVBQW9FO0FBR3BFLE9BQU87QUFDUCxrRUFBK0Q7QUFDL0QsNEVBQXlFO0FBQ3pFLHlFQUFzRTtBQUN0RSx5RUFBMEU7QUFDMUUsK0VBQTRFO0FBRy9ELFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFFakQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBYyxFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsd0NBQWlCLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBZSxFQUFFO0lBRWpELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsMENBQWlCLEVBQUU7SUFFdEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFFdkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUVsRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLHlDQUFtQixFQUFFO0lBRXpELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLCtDQUF1QixFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUVsRCxPQUFPO0lBQ1AsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHdDQUFvQixFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtDQUk3RCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxnQ0FBYztJQUVkLGtDQUFlO0lBRWYsa0NBQWM7SUFDZCx3Q0FBaUI7SUFDakIsd0NBQWU7SUFFZiwwQ0FBaUI7SUFFakIsb0NBQWdCO0lBQ2hCLHdDQUFrQjtJQUNsQix3Q0FBa0I7SUFFbEIsd0NBQWtCO0lBRWxCLHlDQUFtQjtJQUVuQixnQ0FBYztJQUNkLCtDQUF1QjtJQUN2QixrQ0FBZTtJQUNmLG9DQUFnQjtJQUNoQix3Q0FBb0I7SUFDcEIsMENBQW1CO0lBRW5CLHdDQUFrQjtJQUNsQiw4QkFBYTtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnRcIlxyXG5cclxuaW1wb3J0IHsgVmFsaWRhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvdmFsaWRhLmNvbXBvbmVudFwiXHJcblxyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL3VzdWFyaW8uY29tcG9uZW50XCJcclxuaW1wb3J0IHsgUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9jb250cmFzZW5hLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IENoYW5jZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL2NhbWJpb2NvbnRyYS5jb21wb25lbnRcIlxyXG5cclxuXHJcbmltcG9ydCB7IEVsZWNjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2VsZWNjaW9uZ2lyby5jb21wb25lbnRcIlxyXG5cclxuaW1wb3J0IHsgUGVyc29uYUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL3BlcnNvbmEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgUHJvdmVlZG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvcHJvdmVlZG9yLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFJlZ3Zhcmlvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL3NnL3JlZ3Zhcmlvcy5jb21wb25lbnRcIlxyXG5cclxuaW1wb3J0IHsgRGlyZWNjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RpcmVjY2lvbi5jb21wb25lbnRcIlxyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcmlhc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9jYXRlZ29yaWEuY29tcG9uZW50XCJcclxuXHJcbi8vYWRyaWFuYVxyXG5pbXBvcnQgeyBEYXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9kYXRvcy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBBY3R1YWxpemFEYXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9hY3REYXRvc1Blci5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBBY3RkaXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9vcGUvYWN0ZGlyLmNvbXBvbmVudFwiXHJcblxyXG5cclxuLy9FZGdhclxyXG5pbXBvcnQgeyBHaXJvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvY3QvZ2lyby5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBBdHJpYnV0b3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9jdC9hdHJpYnV0b3MuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVGFyamV0YUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS90YXJqZXRhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IERldFByb2R1Y3RvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RldHByb2QuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRXZhbHVhY2lvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9ldmFsdWFjaW9uLmNvbXBvbmVudFwiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMaXN0YUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInNnL3ZhbGlkYVwiLCBjb21wb25lbnQ6IFZhbGlkYUNvbXBvbmVudCB9LFxyXG5cclxuICAgIHsgcGF0aDogXCJzZy91c3VhcmlvXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jb250cmFzZW5hXCIsIGNvbXBvbmVudDogUGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jYW1iaW9cIiwgY29tcG9uZW50OiBDaGFuY2VDb21wb25lbnQgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwib3BlL2VsZWNjaW9uXCIsIGNvbXBvbmVudDogRWxlY2Npb25Db21wb25lbnQgfSxcclxuICAgIFxyXG4gICAgeyBwYXRoOiBcInNnL3BlcnNvbmFcIiwgY29tcG9uZW50OiBQZXJzb25hQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvcHJvdmVlZG9yXCIsIGNvbXBvbmVudDogUHJvdmVlZG9yQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvcmVndmFyaW9zXCIsIGNvbXBvbmVudDogUmVndmFyaW9zQ29tcG9uZW50IH0sXHJcblxyXG4gICAgeyBwYXRoOiBcIm9wZS9kaXJcIiwgY29tcG9uZW50OiBEaXJlY2Npb25Db21wb25lbnQgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwib3BlL2NhdGVnb3JpYVwiLCBjb21wb25lbnQ6IENhdGVnb3JpYXNDb21wb25lbnQgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwib3BlL2RhdG9zXCIsIGNvbXBvbmVudDogRGF0b3NDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvYWN0RGF0UGVyXCIsIGNvbXBvbmVudDogQWN0dWFsaXphRGF0b3NDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvYWN0ZGlyXCIsIGNvbXBvbmVudDogQWN0ZGlyQ29tcG9uZW50IH0sXHJcblxyXG4gICAgLy9FZGdhclxyXG4gICAgeyBwYXRoOiBcImN0L2dpcm9cIiwgY29tcG9uZW50OiBHaXJvQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY3QvYXRyaWJ1dG9cIiwgY29tcG9uZW50OiBBdHJpYnV0b3NDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvdGFyamV0YVwiLCBjb21wb25lbnQ6IFRhcmpldGFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvZGV0cHJvZFwiLCBjb21wb25lbnQ6IERldFByb2R1Y3RvQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2V2YWx1YWNpb25cIiwgY29tcG9uZW50OiBFdmFsdWFjaW9uQ29tcG9uZW50IH1cclxuXHJcblxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgICBMaXN0YUNvbXBvbmVudCxcclxuXHJcbiAgICBWYWxpZGFDb21wb25lbnQsXHJcblxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBQYXNzd29yZENvbXBvbmVudCxcclxuICAgIENoYW5jZUNvbXBvbmVudCxcclxuXHJcbiAgICBFbGVjY2lvbkNvbXBvbmVudCxcclxuXHJcbiAgICBQZXJzb25hQ29tcG9uZW50LFxyXG4gICAgUHJvdmVlZG9yQ29tcG9uZW50LFxyXG4gICAgUmVndmFyaW9zQ29tcG9uZW50LFxyXG5cclxuICAgIERpcmVjY2lvbkNvbXBvbmVudCxcclxuXHJcbiAgICBDYXRlZ29yaWFzQ29tcG9uZW50LFxyXG5cclxuICAgIERhdG9zQ29tcG9uZW50LFxyXG4gICAgQWN0dWFsaXphRGF0b3NDb21wb25lbnQsXHJcbiAgICBBY3RkaXJDb21wb25lbnQsXHJcbiAgICBUYXJqZXRhQ29tcG9uZW50LFxyXG4gICAgRGV0UHJvZHVjdG9Db21wb25lbnQsXHJcbiAgICBFdmFsdWFjaW9uQ29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBBdHJpYnV0b3NDb21wb25lbnQsXHJcbiAgICBHaXJvQ29tcG9uZW50XHJcbl07Il19