import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products = [];
  categories = [ //For products categories
    "All Products",
    "Computers",
    "Phones",
    "Cameras"
  ];
  filterProducts: any;
  activeCategory:String = this.categories[0];
  loginUser;  cartItemList : any =[]
  search:string;
  constructor(private router: Router, 
    private productservice: ProductService,
    private cartService: CartService,
    private user:UserService) { }

  ngOnInit(): void {
    this.productservice.getData().subscribe((data)=>{
    this.products = data;
    this.filterProducts = this.products; // All products 
    
    });
    this.loginUser=JSON.parse(localStorage.getItem('user'));

    //this works for get data from header component search input value!
    this.productservice.search.subscribe((searchCame:string)=>{
      this.search=searchCame;
    });
  }

  onChange(){
    this.router.navigate(['/productdetail']);
  }

  addtocart(item:any){
    const newCartWithUser={
      userId:this.loginUser.id,
      img:item.img,
      productName:item.productName,
      description:item.description,
      price:item.price,
      productId:item.id,
      categories:item.category
    }
    this.cartService.addtoCart(newCartWithUser).subscribe();
  }

  onSelectCategory(category:String){
    if (category == "All Products") {
      this.filterProducts = this.products;
      this.activeCategory = category;
    } else {
      this.filterProducts = this.products.filter(product => category == product.category);
      this.activeCategory = category;
    }
  }
}

