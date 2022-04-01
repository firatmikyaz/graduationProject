import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { GuardService } from './guards/guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CartService } from './services/cart.service';
import { SearchPipe } from './shared/search.pipe';
import { TranslocoRootModule } from './transloco-root.module';
import { AddComponent } from './components/add/add.component';
import { ProductService } from './services/product.service';
import { AdminGuard } from './guards/admin.guard';
import { LoginInterceptor } from './login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,
    SearchPipe,
    AddComponent,
  ],
  imports: [
    /**
     * Reactive formu kullanabilmek için ReactiveFormsModule eklendi.Angular from '@angular/forms' form paketinden importu gerçekleşir.
     */
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslocoRootModule,
  ],
  providers: [
    GuardService,
    UserService,
    CartService,
    ProductService,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
