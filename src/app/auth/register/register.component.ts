import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAuth, BiometricIDAvailableResult } from "nativescript-fingerprint-auth";


@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  moduleId: module.id,
})
export class RegisterComponent implements OnInit, AfterContentInit {
  private fingerprintAuth: FingerprintAuth;

  constructor( private router: Router,
              ) {
    this.fingerprintAuth = new FingerprintAuth();
               }
              

  ngOnInit() {
  }

  navTo(){
    this.router.navigate(['/login'])
  }

  checkFinger(){
    this.fingerprintAuth.available().then((result: BiometricIDAvailableResult) => {
      console.log(`Biometric ID available? ${result.any}`);
      console.log(`Touch? ${result.touch}`);
      console.log(`Face? ${result.face}`);
    });
  }

  ngAfterContentInit(){
    this.checkFinger()
  }

}
