import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  isHide: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private _AuthService: AuthService) {}

  login(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  
}
