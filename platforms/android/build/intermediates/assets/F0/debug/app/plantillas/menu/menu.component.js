"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.giro = function () {
        this.router.navigate(["/ct/giro"]);
    };
    MenuComponent.prototype.validar = function () {
        this.router.navigate(["/sg/valida"]);
    };
    MenuComponent.prototype.cat = function () {
        this.router.navigate(["/ope/categoria"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ScrollView>\n   <StackLayout>\n    <ActionBar title=\"M\u00E9nu\" class=\"action-bar\"></ActionBar>\n    <Button text = \"Giro\"       class=\"boton\" (tap)=\"giro()\"></Button>\n    <Button text = \"Validar\"     class=\"boton\" (tap)=\"validar()\"></Button>\n    <Button text = \"Categorias\" class=\"boton\" (tap)=\"cat()\"></Button>\n     </StackLayout>\n  </ScrollView>\n  "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFlekMsSUFBYSxhQUFhO0lBRXhCLHVCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVuQyxDQUFDO0lBQ0QsNEJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsK0JBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsMkJBQUcsR0FBSDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksYUFBYTtJQWJ6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGlZQVNUO0tBQ0YsQ0FBQztxQ0FHNkIsZUFBTTtHQUZ4QixhQUFhLENBbUJ6QjtBQW5CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPFNjcm9sbFZpZXc+XHJcbiAgIDxTdGFja0xheW91dD5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNw6ludVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gICAgPEJ1dHRvbiB0ZXh0ID0gXCJHaXJvXCIgICAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwiZ2lybygpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIlZhbGlkYXJcIiAgICAgY2xhc3M9XCJib3RvblwiICh0YXApPVwidmFsaWRhcigpXCI+PC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHRleHQgPSBcIkNhdGVnb3JpYXNcIiBjbGFzcz1cImJvdG9uXCIgKHRhcCk9XCJjYXQoKVwiPjwvQnV0dG9uPlxyXG4gICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9TY3JvbGxWaWV3PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG4gIH1cclxuICBnaXJvKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N0L2dpcm9cIl0pO1xyXG4gICAgfVxyXG4gIFxyXG4gIHZhbGlkYXIoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2cvdmFsaWRhXCJdKTtcclxuICAgIH1cclxuICAgIFxyXG4gIGNhdCgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9vcGUvY2F0ZWdvcmlhXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=