import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean;
  search:string;
  constructor(private dataService: UserService,private router:Router,private productService:ProductService,private translate:TranslocoService) { }

  ngOnInit(): void {
    this.dataService.login.subscribe(data => {
      this.login = data;
    });
    if(localStorage.getItem('user')){
      this.login = true;
    }
  }
  onLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.login = false;
    this.dataService.login.next(false);
  }
  onKeyUp(){
  this.productService.search.next(this.search);
  }
  changeLang(value:string){
    this.translate.setActiveLang(value);
  }
}
