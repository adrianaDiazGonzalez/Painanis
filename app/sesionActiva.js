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
            console.log("jason", JSON.stringify(sesion));
            ApplicationSettings.setString("sesion", JSON.stringify(sesion));
        },
        enumerable: true,
        configurable: true
    });
    return SesionActiva;
}());
exports.SesionActiva = SesionActiva;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VzaW9uQWN0aXZhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VzaW9uQWN0aXZhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQTREO0FBQzVELGdFQUFnRTtBQUNoRTtJQUFBO0lBU0EsQ0FBQztJQVJHLHNCQUFrQixzQkFBTTthQUl4QjtZQUNJLElBQUksTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELENBQUM7YUFQRCxVQUEwQixNQUFVO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDOzs7T0FBQTtJQUtMLG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbi8vc2lydmUgcGFyYSBnZW5lcmFyIHF1ZSBsYSBzZXNpb24gZGVsIHVzdWFyaW8gcGVybWFuZXNjYSBhY3RpdmFcclxuZXhwb3J0IGNsYXNzIFNlc2lvbkFjdGl2YSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzZXNpb24gKHNlc2lvbjphbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImphc29uXCIsSlNPTi5zdHJpbmdpZnkoc2VzaW9uKSk7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJzZXNpb25cIiwgSlNPTi5zdHJpbmdpZnkoc2VzaW9uKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXNpb24oKTogYW55IHtcclxuICAgICAgICB2YXIgc2VzaW9uID0gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJzZXNpb25cIik7XHJcbiAgICAgICAgcmV0dXJuICFzZXNpb24gPyBuZXcgQXJyYXk8YW55PigpIDogSlNPTi5wYXJzZShzZXNpb24pO1xyXG4gICAgfVxyXG59Il19