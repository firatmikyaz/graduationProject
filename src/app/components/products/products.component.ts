import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  listCard: boolean = true;
  products = [];
  categories = [
    //For products categories
    'All Products',
    'Computers',
    'Phones',
    'Cameras',
  ];
  filterProducts: any;
  activeCategory: String = this.categories[0];
  loginUser: any;
  cartItemList: any = [];
  search: string;
  constructor(
    private router: Router,
    private productservice: ProductService,
    private cartService: CartService,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.initData();
    this.productservice.isDeleted.subscribe(() => {
      this.initData();
    });
    this.loginUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.loginUser.authority);

    //this works for get data from header component search input value!
    this.productservice.search.subscribe((searchCame: string) => {
      this.search = searchCame;
    });
  }
  initData() {
    this.productservice.getData().subscribe((data) => {
      this.products = data;
      this.filterProducts = this.products; // All products
    });
  }
  //user go productdetail
  onChange() {
    this.router.navigate(['/productdetail']);
  }
  //User delete product
  onDelete(id: Number) {
    this.productservice.deleteData(id).subscribe(() => {
      this.productservice.isDeleted.next(true);
    });
  }

  //user add product to cart
  addtocart(item: any) {
    const newCartWithUser = {
      userId: this.loginUser.id,
      img: item.img,
      productName: item.productName,
      description: item.description,
      price: item.price,
      productId: item.id,
      categories: item.category,
    };
    this.cartService.addtoCart(newCartWithUser).subscribe();
  }

  //user choose category
  onSelectCategory(category: String) {
    if (category == 'All Products') {
      this.filterProducts = this.products;
      this.activeCategory = category;
    } else {
      this.filterProducts = this.products.filter(
        (product) => category == product.category
      );
      this.activeCategory = category;
    }
  }
  toggle() {
    this.listCard = !this.listCard;
  }
}
