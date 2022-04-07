import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; //reactiveform için kullanıyoruz
  errorMessage: string;

  constructor(
    private router: Router,
    private dataService: UserService,
    private translate: TranslocoService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,30})'),
      ]),
    });
  }

  //bring the form input data, save dbjson
  onSubmit() {
    if (this.registerForm.valid) {
      const userInfo = {
        firstName: this.registerForm.get('firstName').value,
        lastName: this.registerForm.get('lastName').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
        authority: '2',
      };

      this.dataService.postData(userInfo).subscribe((element) => {
        console.log(element);
        this.router.navigate(['/login']);
      });
    }
  }
  //user go login page
  goLogin() {
    this.router.navigate(['/login']);
  }
  //user change language
  changeLang(value: string) {
    this.translate.setActiveLang(value);
  }
}
