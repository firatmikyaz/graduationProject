import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: boolean;
  search: string;
  isAdmin: boolean;
  constructor(
    private dataService: UserService,
    private router: Router,
    private productService: ProductService,
    private translate: TranslocoService
  ) {}

  ngOnInit(): void {
    this.dataService.login.subscribe((data) => {
      this.login = data;
    });
    if (localStorage.getItem('user')) {
      this.login = true;
      if (JSON.parse(localStorage.getItem('user')).authority == '1') {
        this.isAdmin = true;
      }
    }
  }
  //for user logout method
  onLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.login = false;
    this.dataService.login.next(false);
  }
  //For search input method, product bring search words
  onKeyUp() {
    this.productService.search.next(this.search);
  }
  //for user choose language (tr,eng)
  changeLang(value: string) {
    this.translate.setActiveLang(value);
  }
}
