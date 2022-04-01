import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco';

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
    //FormGroup yaratıp, html'i form yapısı verilerini login ts'e örtüşdük.
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
      //Yapılan Request'e karşılık API'nin tepkisi
      // console.log(users);
      users.forEach((user) => {
        // console.log(user);
        if (
          userInfo.email == user.email &&
          userInfo.password == user.password
        ) {
          //LocalStorage setItem ile veriyi ChromeV8'e yazdırdık
          const jwt =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
          const newUser = {
            authority: '1',
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
  //Kullanıcı kayıt değil ise register butonu ile register componentine yönlendirilir.
  goRegister() {
    this.router.navigate(['/register']);
  }
  changeLang(value: string) {
    this.translate.setActiveLang(value);
  }
}
