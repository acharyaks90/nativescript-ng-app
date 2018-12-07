"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_fingerprint_auth_1 = require("nativescript-fingerprint-auth");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.fingerprintAuth = new nativescript_fingerprint_auth_1.FingerprintAuth();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.navTo = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.checkFinger = function () {
        this.fingerprintAuth.available().then(function (result) {
            console.log("Biometric ID available? " + result.any);
            console.log("Touch? " + result.touch);
            console.log("Face? " + result.face);
        });
    };
    RegisterComponent.prototype.ngAfterContentInit = function () {
        this.checkFinger();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QywrRUFBNEY7QUFTNUY7SUFHRSwyQkFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLCtDQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR2Qsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFrQztZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUEyQixNQUFNLENBQUMsR0FBSyxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLE1BQU0sQ0FBQyxLQUFPLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBMUJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FJNkIsZUFBTTtPQUh4QixpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZpbmdlcnByaW50QXV0aCwgQmlvbWV0cmljSURBdmFpbGFibGVSZXN1bHQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZpbmdlcnByaW50LWF1dGhcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIGZpbmdlcnByaW50QXV0aDogRmluZ2VycHJpbnRBdXRoO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICApIHtcbiAgICB0aGlzLmZpbmdlcnByaW50QXV0aCA9IG5ldyBGaW5nZXJwcmludEF1dGgoKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuYXZUbygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gIH1cblxuICBjaGVja0Zpbmdlcigpe1xuICAgIHRoaXMuZmluZ2VycHJpbnRBdXRoLmF2YWlsYWJsZSgpLnRoZW4oKHJlc3VsdDogQmlvbWV0cmljSURBdmFpbGFibGVSZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBCaW9tZXRyaWMgSUQgYXZhaWxhYmxlPyAke3Jlc3VsdC5hbnl9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgVG91Y2g/ICR7cmVzdWx0LnRvdWNofWApO1xuICAgICAgY29uc29sZS5sb2coYEZhY2U/ICR7cmVzdWx0LmZhY2V9YCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKXtcbiAgICB0aGlzLmNoZWNrRmluZ2VyKClcbiAgfVxuXG59XG4iXX0=