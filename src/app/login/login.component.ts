import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  isBottomSheetOpen = false;
  msg= '';
  @ViewChild("botttomSheet") botttomSheet: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo() {
    this.router.navigate(['/items'])
  }





  openSheet() {
    this.isBottomSheetOpen = true;
    const bottomSheet = this.botttomSheet.nativeElement;
    if (bottomSheet) {
      bottomSheet.translateY = 100;
      bottomSheet.animate({
        translate: { x: 0, y: 0 },
        duration: 200
      });
    }
  }


  closeSheet() {
    const bottomSheet = this.botttomSheet.nativeElement;
    if (bottomSheet) {
      bottomSheet.animate({
        translate: { x: 0, y: 100 },
        duration: 200
      }).then(() => {
        this.isBottomSheetOpen = false;
      });
    } else {
      this.isBottomSheetOpen = false;
    }
  };

}
