"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent(page) {
        this.page = page;
        page.actionBarHidden = true; //sirve para ocultar la barra de titulo de la ventana
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        template: "<page-router-outlet></page-router-outlet>"
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsZ0NBQStCO0FBUS9CLElBQWEsWUFBWTtJQUN2QixrQ0FBa0M7SUFDbEMsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMscURBQXFEO0lBQ3RGLENBQUM7SUFDRCxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLDJDQUEyQztLQUN0RCxDQUFDO3FDQUkwQixXQUFJO0dBRm5CLFlBQVksQ0FLeEI7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYWluXCIsXHJcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAvL3NpcnZlIHBhcmEgb2N1bHRhciBsYSBiYXJyYSBkZSB0aXR1bG8gZGUgbGEgdmVudGFuYVxyXG59XHJcbn1cclxuIl19