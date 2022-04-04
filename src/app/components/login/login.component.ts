import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco'; //for language management

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private router: Router,
    private dataService: UserService,
    private translate: TranslocoService
  ) {}

  ngOnInit(): void {
    //FormGroup create, html communication ts
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,30})'),
      ]),
    });
  }

  onSubmit() {
    const userInfo = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };

    this.dataService.getData().subscribe((users) => {
      //The response of the API in response to the Request made
      users.forEach((user) => {
        // console.log(user);
        if (
          userInfo.email == user.email &&
          userInfo.password == user.password
        ) {
          //We print data to ChromeV8 with LocalStorage setItem
          const jwt =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
          const newUser = {
            // authority: '1',
            authority: user.authority,
            email: user.email,
            firstName: user.firstName,
            id: user.id,
            lastName: user.lastName,
            jwt: jwt,
          };
          localStorage.setItem('user', JSON.stringify(newUser));
          this.dataService.login.next(true);
          this.router.navigate(['/products']);
        } else {
          this.errorMessage = 'Bu email ve şifre kullanıcı bulunmamaktadır!';
          this.timer();
        }
      });
    });
  }
  timer() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  //The user is prompted to register
  goRegister() {
    this.router.navigate(['/register']);
  }
  //language method
  changeLang(value: string) {
    this.translate.setActiveLang(value);
  }
}
