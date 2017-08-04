"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GiroComponent = (function () {
    function GiroComponent(router) {
        this.router = router;
        this.lista = [];
    }
    GiroComponent.prototype.giroagregar = function () {
        this.router.navigate(["/ct/agregar"]);
    };
    GiroComponent.prototype.ngOnInit = function () {
        this.lista.push({ name: "farmacia", id: 1 });
        this.lista.push({ name: "Frutas", id: 2 });
        this.lista.push({ name: "Comida", id: 3 });
    };
    return GiroComponent;
}());
GiroComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n     <ActionBar title=\"Giros\" class=\"action-bar\"></ActionBar>\n  <GridLayout>\n   <Button text = \" Agregar giro \"    (tap)=\"giroagregar()\"></Button>\n    <ListView [items]=\"lista\" class=\"small-spacing\">\n      <ng-template let-item=\"item\">\n        <Label [text]=\"item.name\" class=\"medium-spacing\"></Label>\n      </ng-template>\n    </ListView>\n  </GridLayout>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], GiroComponent);
exports.GiroComponent = GiroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFpQnpDLElBQWEsYUFBYTtJQUN4Qix1QkFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFNbkMsVUFBSyxHQUFrQixFQUFFLENBQUM7SUFKMUIsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGFBQWE7SUFkekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxzWUFVUDtLQUNKLENBQUM7cUNBRTZCLGVBQU07R0FEeEIsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJHaXJvc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxyXG4gIDxHcmlkTGF5b3V0PlxyXG4gICA8QnV0dG9uIHRleHQgPSBcIiBBZ3JlZ2FyIGdpcm8gXCIgICAgKHRhcCk9XCJnaXJvYWdyZWdhcigpXCI+PC9CdXR0b24+XHJcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cImxpc3RhXCIgY2xhc3M9XCJzbWFsbC1zcGFjaW5nXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cclxuICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5uYW1lXCIgY2xhc3M9XCJtZWRpdW0tc3BhY2luZ1wiPjwvTGFiZWw+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L0xpc3RWaWV3PlxyXG4gIDwvR3JpZExheW91dD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdpcm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuXHJcbiAgfVxyXG4gIGdpcm9hZ3JlZ2FyKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3QvYWdyZWdhclwiXSk7XHJcbiAgfVxyXG4gIGxpc3RhOiBBcnJheTxPYmplY3Q+ID0gW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5saXN0YS5wdXNoKHsgbmFtZTogXCJmYXJtYWNpYVwiICwgaWQ6IDEgfSk7XHJcbiAgICB0aGlzLmxpc3RhLnB1c2goeyBuYW1lOiBcIkZydXRhc1wiICwgaWQ6IDJ9KTtcclxuICAgIHRoaXMubGlzdGEucHVzaCh7IG5hbWU6IFwiQ29taWRhXCIgLCBpZDogM30pO1xyXG4gIH1cclxuXHJcbn0iXX0=