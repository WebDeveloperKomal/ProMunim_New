import { Component } from '@angular/core';
import { ProductFeesModel } from './productfees.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productfees',
  templateUrl: './productfees.component.html',
  styleUrls: ['./productfees.component.css']
})
export class ProductfeesComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: ProductFeesModel [] = [];
  currentPage: number = 1;
  countries: ProductFeesModel [] | undefined;
  collectionSize =100;

  ProductFeeList:ProductFeesModel[]=[];
  
  constructor(private apiService:ApiService) {}

ngOnInit(){
  this.apiService.allProductfees().subscribe(
  (response:any)=>{
    console.log(response);
    
    this.ProductFeeList = response.data;
  },
  (error:any)=>{
    console.error(error);
  }
  )
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
delete(){
  confirm("Are you sure to delete this record")
}


}
