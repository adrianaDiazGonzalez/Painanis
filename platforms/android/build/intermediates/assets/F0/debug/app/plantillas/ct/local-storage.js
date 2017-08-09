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
            ApplicationSettings.setString("todos", JSON.stringify(todo));
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2FsLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEQ7QUFFNUQ7SUFBQTtJQVNBLENBQUM7SUFSRyxzQkFBa0IscUJBQUs7YUFJdkI7WUFDSSxJQUFJLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO2FBUEQsVUFBd0IsSUFBZ0I7WUFDcEMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFNTCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCB0b2Rvcyh0b2RvOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdG9kb3MoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgdmFyIHRvZG9zID0gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2Rvc1wiKTtcclxuICAgICAgICByZXR1cm4gIXRvZG9zID8gbmV3IEFycmF5PGFueT4oKSA6IEpTT04ucGFyc2UodG9kb3MpO1xyXG4gICAgfVxyXG59Il19