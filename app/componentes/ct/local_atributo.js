"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationSettings = require("application-settings");
var LocalStorage = (function () {
    function LocalStorage() {
    }
    Object.defineProperty(LocalStorage, "atributo", {
        get: function () {
            var atributo = ApplicationSettings.getString("atributo");
            return !atributo ? new Array() : JSON.parse(atributo);
        },
        set: function (todo) {
            ApplicationSettings.setString("atributo", JSON.stringify(todo));
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxfYXRyaWJ1dG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhbF9hdHJpYnV0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUE0RDtBQUU1RDtJQUFBO0lBU0EsQ0FBQztJQVJHLHNCQUFrQix3QkFBUTthQUkxQjtZQUNJLElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELENBQUM7YUFQRCxVQUEyQixJQUFnQjtZQUN2QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDOzs7T0FBQTtJQU1MLG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGF0cmlidXRvKHRvZG86IEFycmF5PGFueT4pIHtcclxuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImF0cmlidXRvXCIsIEpTT04uc3RyaW5naWZ5KHRvZG8pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhdHJpYnV0bygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICB2YXIgYXRyaWJ1dG8gPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImF0cmlidXRvXCIpO1xyXG4gICAgICAgIHJldHVybiAhYXRyaWJ1dG8gPyBuZXcgQXJyYXk8YW55PigpIDogSlNPTi5wYXJzZShhdHJpYnV0byk7XHJcbiAgICB9XHJcbn0iXX0=