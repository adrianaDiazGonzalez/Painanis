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
var datos_component_1 = require("./componentes/ope/datos.component");
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
    atributos_component_1.AtributosComponent,
    tarjeta_component_1.TarjetaComponent,
    detprod_component_1.DetProductoComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVFQUFrRTtBQUNsRSw2RUFBMkU7QUFDM0Usa0VBQStEO0FBQy9ELHNFQUFtRTtBQUNuRSx3RUFBbUU7QUFDbkUsd0VBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxrRkFBeUU7QUFDekUsNkVBQTBFO0FBQzFFLHFFQUFrRTtBQUNsRSw0RUFBeUU7QUFDekUseUVBQXNFO0FBQ3RFLHlFQUEwRTtBQUU3RCxRQUFBLE1BQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx5Q0FBbUIsRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDN0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWMsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsd0NBQWlCLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBZSxFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUcsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFHLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUcsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRyxTQUFTLEVBQUUsd0NBQW9CLEVBQUU7Q0FHNUQsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDakMsZ0NBQWM7SUFDZCx5Q0FBbUI7SUFDbkIsOEJBQWE7SUFDYixrQ0FBZTtJQUNmLGtDQUFjO0lBQ2Qsb0NBQWdCO0lBQ2hCLHdDQUFpQjtJQUNqQix3Q0FBZTtJQUNmLHdDQUFrQjtJQUNsQixnQ0FBYztJQUNkLHdDQUFrQjtJQUNsQixvQ0FBZ0I7SUFDaEIsd0NBQW9CO0NBRXZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RhQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDYXRlZ29yaWFzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2NhdGVnb3JpYS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBHaXJvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvY3QvZ2lyby5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBWYWxpZGFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy92YWxpZGEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy91c3VhcmlvLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFBlcnNvbmFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9wZXJzb25hLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvc2cvY29udHJhc2VuYS5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDaGFuY2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9zZy9jYW1iaW9jb250cmEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgRGlyZWNjaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RpcmVjY2lvbi5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBEYXRvc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS9kYXRvcy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBBdHJpYnV0b3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRlcy9jdC9hdHJpYnV0b3MuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVGFyamV0YUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudGVzL29wZS90YXJqZXRhLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IERldFByb2R1Y3RvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50ZXMvb3BlL2RldHByb2QuY29tcG9uZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTGlzdGFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvY2F0ZWdvcmlhXCIsIGNvbXBvbmVudDogQ2F0ZWdvcmlhc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImN0L2dpcm9cIiwgY29tcG9uZW50OiBHaXJvQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvdmFsaWRhXCIsIGNvbXBvbmVudDogVmFsaWRhQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvdXN1YXJpb1wiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwic2cvcGVyc29uYVwiLCBjb21wb25lbnQ6IFBlcnNvbmFDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jb250cmFzZW5hXCIsIGNvbXBvbmVudDogUGFzc3dvcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzZy9jYW1iaW9cIiwgY29tcG9uZW50OiBDaGFuY2VDb21wb25lbnQgfSwgXHJcbiAgICB7IHBhdGg6IFwib3BlL2RhdG9zXCIsICBjb21wb25lbnQ6IERhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL2RpclwiLCAgY29tcG9uZW50OiBEaXJlY2Npb25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvcGUvZGF0b3NcIiwgIGNvbXBvbmVudDogRGF0b3NDb21wb25lbnQgfSxcclxuICAgICB7IHBhdGg6IFwib3BlL2FjdERhdG9zXCIsICBjb21wb25lbnQ6IERhdG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY3QvYXRyaWJ1dG9cIiwgIGNvbXBvbmVudDogQXRyaWJ1dG9zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwib3BlL3RhcmpldGFcIiwgIGNvbXBvbmVudDogVGFyamV0YUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIm9wZS9kZXRwcm9kXCIsICBjb21wb25lbnQ6IERldFByb2R1Y3RvQ29tcG9uZW50IH1cclxuXHJcbiAgIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIExpc3RhQ29tcG9uZW50LFxyXG4gICAgQ2F0ZWdvcmlhc0NvbXBvbmVudCxcclxuICAgIEdpcm9Db21wb25lbnQsXHJcbiAgICBWYWxpZGFDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIFBlcnNvbmFDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZENvbXBvbmVudCxcclxuICAgIENoYW5jZUNvbXBvbmVudCxcclxuICAgIERpcmVjY2lvbkNvbXBvbmVudCxcclxuICAgIERhdG9zQ29tcG9uZW50LFxyXG4gICAgQXRyaWJ1dG9zQ29tcG9uZW50LFxyXG4gICAgVGFyamV0YUNvbXBvbmVudCxcclxuICAgIERldFByb2R1Y3RvQ29tcG9uZW50XHJcblxyXG5dOyJdfQ==