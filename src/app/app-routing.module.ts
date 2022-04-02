import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { GuardService } from './guards/guard.service';
import { LeaveGuard } from './guards/leave.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [GuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'detailproduct/:id',
    component: DetailProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AdminGuard],
    canDeactivate: [LeaveGuard],
  },
  {
    path: 'remake/:id',
    component: AddComponent,
    canActivate: [AdminGuard],
    canDeactivate: [LeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
