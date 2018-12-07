"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("~/app/login/login.component");
var register_component_1 = require("../register/register.component");
var routes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                router_1.NativeScriptRouterModule.forChild(routes)
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLCtEQUE2RDtBQUM3RCxxRUFBbUU7QUFFbkUsSUFBTSxNQUFNLEdBQVc7SUFFckIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Q0FDbkQsQ0FBQztBQWFGO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFWN0IsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDMUM7WUFDRCxPQUFPLEVBQUM7Z0JBQ04saUNBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICd+L2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiBcbiAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcbl07XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6W1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=