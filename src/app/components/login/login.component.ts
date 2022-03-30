import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(private router:Router, private dataService: UserService,private translate:TranslocoService) { }
  
  ngOnInit(): void { //FormGroup yaratıp, html'i form yapısı verilerini login ts'e örtüşdük.
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,30})'),
      ]),
    });
  }

  
  onSubmit(){
    const userInfo={
      email:this.loginForm.get('email').value,
      password:this.loginForm.get('password').value
    }
    
    this.dataService.getData().subscribe((users)=> { //Yapılan Request'e karşılık API'nin tepkisi
      // console.log(users);
      users.forEach(user => {
        // console.log(user);
        if(userInfo.email == user.email && userInfo.password == user.password){
          //LocalStorage setItem ile veriyi ChromeV8'e yazdırdık
          localStorage.setItem('user',JSON.stringify(user));
          this.dataService.login.next(true);
          this.router.navigate(['/products']);
        } else{
          this.errorMessage = 'Bu email ve şifre kullanıcı bulunmamaktadır!';
          this.timer();
        }
      });  
    })
  }
  timer() {
    setTimeout(() => {
      this.errorMessage = '';
    },3000)
  }
  //Kullanıcı kayıt değil ise register butonu ile register componentine yönlendirilir.
  goRegister(){
    this.router.navigate(['/register']);
  }
  changeLang(value:string){
    this.translate.setActiveLang(value);
  }
}
