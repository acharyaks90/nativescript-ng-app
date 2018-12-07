"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var login_component_1 = require("../login/login.component");
var register_component_1 = require("./register/register.component");
var auth_routing_module_1 = require("./auth-routing/auth-routing.module");
var forms_1 = require("nativescript-angular/forms");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                auth_routing_module_1.AuthRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNERBQTBEO0FBQzFELG9FQUFrRTtBQUNsRSwwRUFBdUU7QUFDdkUsb0RBQXFFO0FBWXJFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFUdEIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxzQ0FBaUIsQ0FBQztZQUNqRCxPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLCtCQUF1QjthQUN4QjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGgtcm91dGluZy9hdXRoLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBBdXRoUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7IH1cbiJdfQ==