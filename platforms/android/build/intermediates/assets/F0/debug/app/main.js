"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
var giro_component_1 = require("./plantillas/ct/giro.component");
var forms_1 = require("nativescript-angular/forms");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [giro_component_1.GiroComponent],
        bootstrap: [giro_component_1.GiroComponent],
        imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule],
    })
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFDNUUsZ0ZBQThFO0FBQzlFLDJDQUF5QztBQUN6QyxzQ0FBdUM7QUFFdkMsaUVBQStEO0FBQy9ELG9EQUFtRTtBQU9uRSxJQUFNLGtCQUFrQjtJQUF4QjtJQUF5QixDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQXBCLGtCQUFrQjtJQUx2QixlQUFRLENBQUU7UUFDUCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzdCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsK0JBQXVCLENBQUM7S0FDekQsQ0FBQztHQUNJLGtCQUFrQixDQUFFO0FBRTFCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2lyb0NvbXBvbmVudCB9IGZyb20gXCIuL3BsYW50aWxsYXMvY3QvZ2lyby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5ATmdNb2R1bGUgKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0dpcm9Db21wb25lbnRdLFxyXG4gICAgYm9vdHN0cmFwOiBbR2lyb0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZV0sXHJcbn0pXHJcbmNsYXNzIEFwcENvbXBvbmVudE1vZHVsZXt9XHJcblxyXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuIl19