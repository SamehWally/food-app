import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotForm = new FormGroup({
    email: new FormControl(null),
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  forgot(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onForgot(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {
        this._Router.navigate(['/auth/reset']);
      },
    });
  }
}
