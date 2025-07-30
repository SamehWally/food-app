import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  isHide: boolean = true;
  isHideConfirmPassword: boolean = true;

  resetForm = new FormGroup({
    email: new FormControl(null),
    seed: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  reset(data: FormGroup) {
    // console.log(data.value);

    this._AuthService.onReset(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {
        this._Router.navigate(['/auth/login']);
      },
    });
  }
}
