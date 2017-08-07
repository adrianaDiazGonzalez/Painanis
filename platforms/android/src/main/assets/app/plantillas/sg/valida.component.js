"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Declaración de los componentes de la vista
var ValidaComponent = (function () {
    function ValidaComponent() {
    }
    ValidaComponent.prototype.validar = function () {
        var cp;
        console.log(cp);
    };
    return ValidaComponent;
}());
ValidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: " \n   <ScrollView>\n   <StackLayout >\n    <ActionBar title=\"Direcci\u00F3n\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/book.png\" class=\"ubicacion\" horizontalAlignment=\"center\" verticalAlignment=\"center\" ></Image>\n    <Label text=\"\u00A1Valida tu direcci\u00F3n!\" horizontalAlignment=\"center\"> </Label>\n    <TextField hint=\"CP\" [(ngModel)]=\"cp\"></TextField >\n    <Button text = \"Validar\" class=\"submit-button\" (tap)=\"validar()\"></Button>\n   \n                                   \n    </StackLayout>\n  </ScrollView>\n \n  "
    })
], ValidaComponent);
exports.ValidaComponent = ValidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsNENBQTRDO0FBcUI1QyxJQUFhLGVBQWU7SUFBNUI7SUFVRSxDQUFDO0lBVEMsaUNBQU8sR0FBUDtRQUVJLElBQUksRUFBRSxDQUFBO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBSUgsc0JBQUM7QUFBRCxDQUFDLEFBVkgsSUFVRztBQVZVLGVBQWU7SUFwQjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQ1IseWpCQWFDO0tBQ0YsQ0FBQztHQUdXLGVBQWUsQ0FVekI7QUFWVSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZTpcclxuICBgIFxyXG4gICA8U2Nyb2xsVmlldz5cclxuICAgPFN0YWNrTGF5b3V0ID5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJEaXJlY2Npw7NuXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XHJcbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYm9vay5wbmdcIiBjbGFzcz1cInViaWNhY2lvblwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiID48L0ltYWdlPlxyXG4gICAgPExhYmVsIHRleHQ9XCLCoVZhbGlkYSB0dSBkaXJlY2Npw7NuIVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj4gPC9MYWJlbD5cclxuICAgIDxUZXh0RmllbGQgaGludD1cIkNQXCIgWyhuZ01vZGVsKV09XCJjcFwiPjwvVGV4dEZpZWxkID5cclxuICAgIDxCdXR0b24gdGV4dCA9IFwiVmFsaWRhclwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwidmFsaWRhcigpXCI+PC9CdXR0b24+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1Njcm9sbFZpZXc+XHJcbiBcclxuICBgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYUNvbXBvbmVudCB7XHJcbiAgICB2YWxpZGFyKClcclxuICAgIHtcclxuICAgICAgICB2YXIgY3BcclxuICAgICAgICBjb25zb2xlLmxvZyhjcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIFxyXG4gIH1cclxuIl19