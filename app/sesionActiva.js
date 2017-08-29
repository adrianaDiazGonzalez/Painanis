"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationSettings = require("application-settings");
//sirve para generar que la sesion del usuario permanesca activa
var SesionActiva = (function () {
    function SesionActiva() {
    }
    Object.defineProperty(SesionActiva, "sesion", {
        get: function () {
            var sesion = ApplicationSettings.getString("sesion");
            return !sesion ? new Array() : JSON.parse(sesion);
        },
        set: function (sesion) {
            ApplicationSettings.setString("sesion", JSON.stringify(sesion));
        },
        enumerable: true,
        configurable: true
    });
    return SesionActiva;
}());
exports.SesionActiva = SesionActiva;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VzaW9uQWN0aXZhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VzaW9uQWN0aXZhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQTREO0FBQzVELGdFQUFnRTtBQUNoRTtJQUFBO0lBUUEsQ0FBQztJQVBHLHNCQUFrQixzQkFBTTthQUd4QjtZQUNJLElBQUksTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELENBQUM7YUFORCxVQUEwQixNQUFVO1lBQ2hDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7OztPQUFBO0lBS0wsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuLy9zaXJ2ZSBwYXJhIGdlbmVyYXIgcXVlIGxhIHNlc2lvbiBkZWwgdXN1YXJpbyBwZXJtYW5lc2NhIGFjdGl2YVxyXG5leHBvcnQgY2xhc3MgU2VzaW9uQWN0aXZhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNlc2lvbiAoc2VzaW9uOmFueSkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwic2VzaW9uXCIsIEpTT04uc3RyaW5naWZ5KHNlc2lvbikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2VzaW9uKCk6IGFueSB7XHJcbiAgICAgICAgdmFyIHNlc2lvbiA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwic2VzaW9uXCIpO1xyXG4gICAgICAgIHJldHVybiAhc2VzaW9uID8gbmV3IEFycmF5PGFueT4oKSA6IEpTT04ucGFyc2Uoc2VzaW9uKTtcclxuICAgIH1cclxufSJdfQ==