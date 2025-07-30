import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  
  isHide: boolean = true;
  isHideConfirmPassword: boolean = true;

  imgSrc: any;

  registerForm = new FormGroup({
    userName: new FormControl(null),
    email: new FormControl(null),
    country: new FormControl(null),
    phoneNumber: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  register(data: FormGroup) {
    console.log(data.value);
    let registerData = new FormData();
    registerData.append('userName', data.value.userName);
    registerData.append('email', data.value.email);
    registerData.append('country', data.value.country);
    registerData.append('phoneNumber', data.value.phoneNumber);
    registerData.append('password', data.value.password);
    registerData.append('confirmPassword', data.value.confirmPassword);
    registerData.append('profileImage', this.imgSrc);

    this._AuthService.onRegister(registerData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {
        this._Router.navigate(['/auth/verify']);
      },
    });
  }

  files: File[] = [];

  onSelect(event: any) {
    // console.log(event);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
