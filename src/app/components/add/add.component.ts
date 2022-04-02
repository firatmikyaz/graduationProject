import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  isRemake: boolean;
  product: any;
  reader: FileReader = new FileReader();
  isLeaveSafe: boolean = false;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      category: new FormControl(null),
      img: new FormControl(null),
    });
    this.route.queryParams.subscribe((params: Params) => {
      if (params['remake'] == 'true') {
        this.isRemake = true;
        this.route.params.subscribe((params: Params) => {
          this.productService.getDetail(params['id']).subscribe((product) => {
            this.product = product;
            this.addForm.patchValue({
              name: product?.productName,
              description: product?.description,
              price: product?.price,
              category: product?.category,
            });
          });
        });
      } else {
        this.isRemake = false;
      }
    });
  }
  //event for select a file or not
  onChange(event: any) {
    this.reader.readAsDataURL(event.target.files[0]);
  }
  //submit button and create an new object to send json-server
  onSubmit(): void {
    const newAdd = {
      productName: this.addForm.get('name').value,
      description: this.addForm.get('description').value,
      price: this.addForm.get('price').value,
      category: this.addForm.get('category').value,
      img: this.reader.result,
    };
    if (this.isRemake) {
      if (this.addForm.get('img').value == null) {
        const newAddd = {
          productName: this.addForm.get('name').value,
          description: this.addForm.get('description').value,
          price: this.addForm.get('price').value,
          category: this.addForm.get('category').value,
        };
        this.productService.updateData(newAddd, this.product.id).subscribe();
      } else {
        this.productService.updateData(newAdd, this.product.id).subscribe();
      }
    } else {
      console.log(newAdd);

      this.productService.addData(newAdd).subscribe(
        () => {
          this.isLeaveSafe = true;
          this.router.navigate(['/products']);
        },
        (error) => {
          this.isLeaveSafe = false;
        }
      );
    }
  }
}
