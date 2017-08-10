"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones de recursos a utilizar
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var persona_1 = require("../../modelos/sg/persona");
var persona_2 = require("../../servicios/sg/persona");
//Declaración de los componentes de la vista
var PersonaComponent = (function () {
    function PersonaComponent(page, personaService) {
        this.page = page;
        this.personaService = personaService;
        this.firstSwitchState = false;
        this.secondSwitchState = true;
        page.actionBarHidden = true;
        this.persona = new persona_1.Persona();
        this.persona.persona = "0";
        this.persona.tipoPersona = "1";
        /* this.persona.nombre="";
         this.persona.apaterno="";
         this.persona.amaterno="";*/
        this.persona.genero = false;
        this.persona.fechanac = "18/08/1992";
        /* this.persona.edad="";
         this.persona.telefono="";
         this.persona.correo="";
         this.persona.usuario="";
         this.persona.contrasena="";*/
        this.persona.activo = true;
    }
    PersonaComponent.prototype.submit = function () {
        this.personaService.postQuote(this.persona);
    };
    PersonaComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = false;
        }
        else {
            this.secondSwitchState = true;
        }
    };
    PersonaComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1970;
        datePicker.month = 1;
        datePicker.day = 1;
    };
    PersonaComponent.prototype.onDateChanged = function (args) {
        /*console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    };
    PersonaComponent.prototype.onDayChanged = function (args) {
        /*console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);*/
    };
    PersonaComponent.prototype.onMonthChanged = function (args) {
        /* console.log("Month changed");
         console.log("New value: " + args.value);
         console.log("Old value: " + args.oldValue);*/
    };
    PersonaComponent.prototype.onYearChanged = function (args) {
        /*   console.log("Year changed");
           console.log("New value: " + args.value);
           console.log("Old value: " + args.oldValue);*/
    };
    return PersonaComponent;
}());
PersonaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [persona_2.PersonaService],
        moduleId: module.id,
        templateUrl: "persona.html",
        styleUrls: ["../css/persona.css", "../../app.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, persona_2.PersonaService])
], PersonaComponent);
exports.PersonaComponent = PersonaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxnQ0FBK0I7QUFDL0Isc0NBQTBDO0FBQzFDLG9EQUFtRDtBQUNuRCxzREFBNEQ7QUFPNUQsNENBQTRDO0FBUzVDLElBQWEsZ0JBQWdCO0lBS3pCLDBCQUFvQixJQUFVLEVBQVUsY0FBOEI7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUovRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBSTVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQztRQUM5Qjs7b0NBRTRCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRSxZQUFZLENBQUM7UUFDckM7Ozs7c0NBSThCO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQztJQUc5QixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZDs7cURBRTZDO0lBQ2pELENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiOztxREFFNkM7SUFDakQsQ0FBQztJQUVGLHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2Y7O3NEQUU4QztJQUNqRCxDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLElBQUk7UUFDakI7O3dEQUVnRDtJQUNsRCxDQUFDO0lBQ0osdUJBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBcEVZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsd0JBQWMsQ0FBQztRQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDcEIsV0FBVyxFQUFDLGNBQWM7UUFDMUIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxDQUFDO0tBQ25ELENBQUM7cUNBTzRCLFdBQUksRUFBMEIsd0JBQWM7R0FMN0QsZ0JBQWdCLENBb0U1QjtBQXBFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFjaW9uZXMgZGUgcmVjdXJzb3MgYSB1dGlsaXphclxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uYSB9IGZyb20gXCIuLi8uLi9tb2RlbG9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgUGVyc29uYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljaW9zL3NnL3BlcnNvbmFcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBkYXRlUGlja2VyTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5cclxuXHJcbi8vRGVjbGFyYWNpw7NuIGRlIGxvcyBjb21wb25lbnRlcyBkZSBsYSB2aXN0YVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6IFtQZXJzb25hU2VydmljZV0sXHJcbiAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6XCJwZXJzb25hLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4uL2Nzcy9wZXJzb25hLmNzc1wiLCBcIi4uLy4uL2FwcC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSB0cnVlO1xyXG4gICAgcGVyc29uYTogUGVyc29uYTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGVyc29uYVNlcnZpY2U6IFBlcnNvbmFTZXJ2aWNlKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlOyAgXHJcbiAgICAgICAgdGhpcy5wZXJzb25hID0gbmV3IFBlcnNvbmEoKTtcclxuICAgICAgICB0aGlzLnBlcnNvbmEucGVyc29uYT1cIjBcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEudGlwb1BlcnNvbmE9XCIxXCI7XHJcbiAgICAgICAvKiB0aGlzLnBlcnNvbmEubm9tYnJlPVwiXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmFwYXRlcm5vPVwiXCI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25hLmFtYXRlcm5vPVwiXCI7Ki9cclxuICAgICAgICB0aGlzLnBlcnNvbmEuZ2VuZXJvPWZhbHNlO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5mZWNoYW5hYz0gXCIxOC8wOC8xOTkyXCI7XHJcbiAgICAgICAvKiB0aGlzLnBlcnNvbmEuZWRhZD1cIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS50ZWxlZm9ubz1cIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5jb3JyZW89XCJcIjtcclxuICAgICAgICB0aGlzLnBlcnNvbmEudXN1YXJpbz1cIlwiO1xyXG4gICAgICAgIHRoaXMucGVyc29uYS5jb250cmFzZW5hPVwiXCI7Ki9cclxuICAgICAgICB0aGlzLnBlcnNvbmEuYWN0aXZvPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN1Ym1pdCgpe1xyXG4gICAgICAgIHRoaXMucGVyc29uYVNlcnZpY2UucG9zdFF1b3RlKHRoaXMucGVyc29uYSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0U3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IHRydWU7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTcwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAxO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gMTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJEYXRlIGNoYW5nZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgdmFsdWU6IFwiICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7Ki9cclxuICAgIH1cclxuXHJcbiAgICBvbkRheUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIC8qY29uc29sZS5sb2coXCJEYXkgY2hhbmdlZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTsqL1xyXG4gICAgfVxyXG5cclxuICAgb25Nb250aENoYW5nZWQoYXJncykge1xyXG4gICAgICAgLyogY29uc29sZS5sb2coXCJNb250aCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2xkIHZhbHVlOiBcIiArIGFyZ3Mub2xkVmFsdWUpOyovXHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgLyogICBjb25zb2xlLmxvZyhcIlllYXIgY2hhbmdlZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTsqL1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19