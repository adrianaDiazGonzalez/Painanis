"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationSettings = require("application-settings");
var LocalStorage = (function () {
    function LocalStorage() {
    }
    Object.defineProperty(LocalStorage, "todos", {
        get: function () {
            var todos = ApplicationSettings.getString("todos");
            return !todos ? new Array() : JSON.parse(todos);
        },
        set: function (todo) {
            console.log("Mensaje en el local storage", JSON.stringify(todo));
            ApplicationSettings.setString("todos", JSON.stringify(todo));
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2FsLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEQ7QUFFNUQ7SUFBQTtJQVVBLENBQUM7SUFURyxzQkFBa0IscUJBQUs7YUFLdkI7WUFDSSxJQUFJLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO2FBUkQsVUFBd0IsSUFBUztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQztZQUNsRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDOzs7T0FBQTtJQU1MLG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHRvZG9zKHRvZG86IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVuc2FqZSBlbiBlbCBsb2NhbCBzdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHRvZG8pICk7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdG9kb3MoKTogYW55IHtcclxuICAgICAgICB2YXIgdG9kb3MgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcInRvZG9zXCIpO1xyXG4gICAgICAgIHJldHVybiAhdG9kb3MgPyBuZXcgQXJyYXk8YW55PigpIDogSlNPTi5wYXJzZSh0b2Rvcyk7XHJcbiAgICB9XHJcbn0iXX0=