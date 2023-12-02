import { Component } from '@angular/core';
import { ProductsModel } from './products.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: ProductsModel[] = [];
  currentPage: number = 1;
  countries: ProductsModel[] | undefined;
  collectionSize =100;
  
  productList:ProductsModel[]=[];

  constructor(private apiservice:ApiService,private router:Router) {}

  ngOnInit(){
    this.apiservice.allProducts().subscribe(
      (response:any)=>{
        this.productList = response.data;
      },
      (error:any)=>{
        console.error(error);
        
      }
    )
  }

  edit(id:number){
    this.router.navigate(['/set/view-product/'+id]);
  }


  delete(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) 
      {
        this.apiservice.deleteProduct(id).subscribe(
          (res:any)=>{
            console.log(res.data);
            Swal.fire({
              title: "Record Deleted!",
              icon: "success"
            });
          },
          (err:any)=>{
            console.error(err);
            Swal.fire({
              title: "Error!",
              icon: "error"
            });
          }
        );
        setInterval(()=>{window.location.reload()},1000);
      }
    });
  }

applyFilter(): void {
  // const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


}
