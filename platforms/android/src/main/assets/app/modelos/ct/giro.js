"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Giro = (function () {
    function Giro() {
    }
    Object.defineProperty(Giro.prototype, "setIdGiro", {
        set: function (iGiro) {
            this.iGiro = iGiro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "getIdGiro", {
        get: function () {
            return this.iGiro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "setGiro", {
        set: function (cGiro) {
            this.cGiro = cGiro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "getGiro", {
        get: function () {
            return this.cGiro;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "setEstGiro", {
        set: function (lActivo) {
            this.lActivo = lActivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "getEstGiro", {
        get: function () {
            return this.lActivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "setDtcGiro", {
        set: function (dtCreado) {
            this.dtCreado = dtCreado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "getDtcGiro", {
        get: function () {
            return this.dtCreado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "setDtmGiro", {
        set: function (dtModificado) {
            this.dtModificado = dtModificado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Giro.prototype, "getDtmGiro", {
        get: function () {
            return this.dtModificado;
        },
        enumerable: true,
        configurable: true
    });
    Giro.prototype.toString = function () {
        return "ID: '" + this.iGiro + "'  Giro: "
            + this.cGiro + " Activo: " + this.lActivo + " Fecha de Creacion: " + this.dtCreado
            + " Fecha de Modificacion: " + this.dtModificado;
    };
    return Giro;
}());
exports.Giro = Giro;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdpcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBNENBLENBQUM7SUFyQ0csc0JBQVcsMkJBQVM7YUFBcEIsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDJCQUFTO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyx5QkFBTzthQUFsQixVQUFtQixLQUFhO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcseUJBQU87YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFVO2FBQXJCLFVBQXNCLE9BQWdCO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsNEJBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFVO2FBQXJCLFVBQXNCLFFBQWdCO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsNEJBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDRCQUFVO2FBQXJCLFVBQXNCLFlBQW9CO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsNEJBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVNLHVCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxLQUFLLEdBQUUsV0FBVztjQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRO2NBQzVFLDBCQUEwQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0QsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdpcm8ge1xyXG4gICAgcHJpdmF0ZSBpR2lybyA6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjR2lybyA6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBsQWN0aXZvOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBkdENyZWFkbzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkdE1vZGlmaWNhZG86IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc2V0IHNldElkR2lybyhpR2lybzogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmlHaXJvID0gaUdpcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGdldElkR2lybygpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaUdpcm87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNldEdpcm8oY0dpcm86IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jR2lybyA9IGNHaXJvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBnZXRHaXJvKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5jR2lybztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2V0RXN0R2lybyhsQWN0aXZvOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLmxBY3Rpdm8gPSBsQWN0aXZvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBnZXRFc3RHaXJvKCk6IGJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubEFjdGl2bztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2V0RHRjR2lybyhkdENyZWFkbzogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmR0Q3JlYWRvID0gZHRDcmVhZG87XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGdldER0Y0dpcm8oKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR0Q3JlYWRvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBzZXREdG1HaXJvKGR0TW9kaWZpY2Fkbzogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmR0TW9kaWZpY2FkbyA9IGR0TW9kaWZpY2FkbztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgZ2V0RHRtR2lybygpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHRNb2RpZmljYWRvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyAoKXtcclxuICAgICAgICByZXR1cm4gXCJJRDogJ1wiKyB0aGlzLmlHaXJvICtcIicgIEdpcm86IFwiIFxyXG4gICAgICAgICAgICArIHRoaXMuY0dpcm8gKyBcIiBBY3Rpdm86IFwiICsgdGhpcy5sQWN0aXZvICsgXCIgRmVjaGEgZGUgQ3JlYWNpb246IFwiICsgdGhpcy5kdENyZWFkbyBcclxuICAgICAgICAgICAgICAgICsgXCIgRmVjaGEgZGUgTW9kaWZpY2FjaW9uOiBcIiArIHRoaXMuZHRNb2RpZmljYWRvO1xyXG4gICAgfVxyXG5cclxufSJdfQ==