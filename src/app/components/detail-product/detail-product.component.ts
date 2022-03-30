import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  productId;
  data;
  loginUser;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // this.loginUser = JSON.parse(localStorage.getItem('user')).id;
    this.route.params.subscribe((params:Params)=>{
      this.productId = params['id'];
    })
    this.productService.getData().subscribe(alldata => {
      alldata.forEach(element => {
        if (element.id == this.productId) {
          this.data = element;
        }
      })
    })
    this.loginUser=JSON.parse(localStorage.getItem('user'));
  }

  addtocart(item:any){
    const newCartWithUser={
      userId:this.loginUser.id,
      img:item.img,
      productName:item.productName,
      description:item.description,
      price:item.price,
      productId:item.id,
      category:item.category
    }
    this.cartService.addtoCart(newCartWithUser).subscribe(data=>{
      console.log(data);
    });
  }
}
