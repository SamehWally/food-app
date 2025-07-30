import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verfiy-account',
  templateUrl: './verfiy-account.component.html',
  styleUrls: ['./verfiy-account.component.scss'],
})

export class VerfiyAccountComponent {

  verifyForm = new FormGroup({
    email: new FormControl(null),
    code: new FormControl(null),
  });

  constructor(private _AuthService: AuthService) {}

  verify(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onLogin(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

}
