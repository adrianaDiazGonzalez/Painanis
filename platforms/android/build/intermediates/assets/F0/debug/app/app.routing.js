"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoria_component_1 = require("./plantillas/ope/categoria.component");
var giro_component_1 = require("./plantillas/ct/giro.component");
var menu_component_1 = require("./plantillas/menu/menu.component");
var valida_component_1 = require("./plantillas/sg/valida.component");
exports.routes = [
    { path: "", component: menu_component_1.MenuComponent },
    { path: "ope/categoria", component: categoria_component_1.CategoriaComponent },
    { path: "ct/giro", component: giro_component_1.GiroComponent },
    { path: "sg/valida", component: valida_component_1.ValidaComponent },
];
exports.navigatableComponents = [
    menu_component_1.MenuComponent,
    categoria_component_1.CategoriaComponent,
    giro_component_1.GiroComponent,
    valida_component_1.ValidaComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUF5RTtBQUN6RSxpRUFBbUU7QUFDbkUsbUVBQXFFO0FBQ3JFLHFFQUFxRTtBQUV4RCxRQUFBLE1BQU0sR0FBRztJQUNqQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQWdCLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRyxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFTLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBTyxTQUFTLEVBQUUsa0NBQWUsRUFBQztDQUV6RCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyw4QkFBYTtJQUNiLHdDQUFrQjtJQUNsQiw4QkFBYTtJQUNiLGtDQUFlO0NBRWxCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yaWFDb21wb25lbnR9IGZyb20gIFwiLi9wbGFudGlsbGFzL29wZS9jYXRlZ29yaWEuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgR2lyb0NvbXBvbmVudH0gICAgICBmcm9tICBcIi4vcGxhbnRpbGxhcy9jdC9naXJvLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnR9ICAgICAgZnJvbSAgXCIuL3BsYW50aWxsYXMvbWVudS9tZW51LmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFZhbGlkYUNvbXBvbmVudH0gICAgZnJvbSAgXCIuL3BsYW50aWxsYXMvc2cvdmFsaWRhLmNvbXBvbmVudFwiXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgIHsgcGF0aDogXCJcIiwgICAgICAgICAgICAgICBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQgfSxcclxuICAgICB7IHBhdGg6IFwib3BlL2NhdGVnb3JpYVwiLCAgY29tcG9uZW50OiBDYXRlZ29yaWFDb21wb25lbnQgfSxcclxuICAgICB7IHBhdGg6IFwiY3QvZ2lyb1wiLCAgICAgICAgY29tcG9uZW50OiBHaXJvQ29tcG9uZW50IH0sXHJcbiAgICAgeyBwYXRoOiBcInNnL3ZhbGlkYVwiLCAgICAgIGNvbXBvbmVudDogVmFsaWRhQ29tcG9uZW50fSxcclxuICAgIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICBDYXRlZ29yaWFDb21wb25lbnQsXHJcbiAgICBHaXJvQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhQ29tcG9uZW50LFxyXG4gICAgXHJcbl07Il19