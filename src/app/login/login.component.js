"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.isBottomSheetOpen = false;
        this.msg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navTo = function () {
        this.router.navigate(['/items']);
    };
    LoginComponent.prototype.openSheet = function () {
        this.isBottomSheetOpen = true;
        var bottomSheet = this.botttomSheet.nativeElement;
        if (bottomSheet) {
            bottomSheet.translateY = 100;
            bottomSheet.animate({
                translate: { x: 0, y: 0 },
                duration: 200
            });
        }
    };
    LoginComponent.prototype.closeSheet = function () {
        var _this = this;
        var bottomSheet = this.botttomSheet.nativeElement;
        if (bottomSheet) {
            bottomSheet.animate({
                translate: { x: 0, y: 100 },
                duration: 200
            }).then(function () {
                _this.isBottomSheetOpen = false;
            });
        }
        else {
            this.isBottomSheetOpen = false;
        }
    };
    ;
    __decorate([
        core_1.ViewChild("botttomSheet"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "botttomSheet", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF3QztBQVF4QztJQUlFLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsUUFBRyxHQUFFLEVBQUUsQ0FBQztJQUU4QixDQUFDO0lBRXZDLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBTUQsa0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUM3QixXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pCLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBR0QsbUNBQVUsR0FBVjtRQUFBLGlCQVlDO1FBWEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNsQixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQXZDeUI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7d0RBQUM7SUFIekMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLNEIsZUFBTTtPQUp2QixjQUFjLENBNEMxQjtJQUFELHFCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQm90dG9tU2hlZXRPcGVuID0gZmFsc2U7XG4gIG1zZz0gJyc7XG4gIEBWaWV3Q2hpbGQoXCJib3R0dG9tU2hlZXRcIikgYm90dHRvbVNoZWV0OiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5hdlRvKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10pXG4gIH1cblxuXG5cblxuXG4gIG9wZW5TaGVldCgpIHtcbiAgICB0aGlzLmlzQm90dG9tU2hlZXRPcGVuID0gdHJ1ZTtcbiAgICBjb25zdCBib3R0b21TaGVldCA9IHRoaXMuYm90dHRvbVNoZWV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGJvdHRvbVNoZWV0KSB7XG4gICAgICBib3R0b21TaGVldC50cmFuc2xhdGVZID0gMTAwO1xuICAgICAgYm90dG9tU2hlZXQuYW5pbWF0ZSh7XG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgY2xvc2VTaGVldCgpIHtcbiAgICBjb25zdCBib3R0b21TaGVldCA9IHRoaXMuYm90dHRvbVNoZWV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGJvdHRvbVNoZWV0KSB7XG4gICAgICBib3R0b21TaGVldC5hbmltYXRlKHtcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDEwMCB9LFxuICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0JvdHRvbVNoZWV0T3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNCb3R0b21TaGVldE9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbn1cbiJdfQ==