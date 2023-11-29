import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../products/products.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  viewproductForm !: FormGroup;
  dataarray: any[] = [];
  product:ProductsModel = new ProductsModel();
  id!:number;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.viewproductForm = this.formBuilder.group({
      productId: ['', Validators.required], // Add validation if needed
      productName: ['', Validators.required], // Add validation if needed
      minValue: ['', Validators.required],
      maxValue: ['', Validators.required]
    
    });
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.ProductById(this.id).subscribe(
      (res:any)=>{console.log(res);},
      (err:any)=>{console.error(err);}
    )
  }


  onSubmit(){
    console.log("DATA READY TO SEND ::: ",this.product);
    this.apiService.updateProduct(this.product).subscribe(
      (res:any)=>{console.log(res);},
      (err:any)=>{console.error(err);}
    )
  }



}
