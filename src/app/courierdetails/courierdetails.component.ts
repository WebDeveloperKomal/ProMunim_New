import { Component } from '@angular/core';
import { courierdetailsModel } from './courierdetails.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-courierdetails',
  templateUrl: './courierdetails.component.html',
  styleUrls: ['./courierdetails.component.css']
})
export class CourierdetailsComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: courierdetailsModel [] = [];
  currentPage: number = 1;
  countries: courierdetailsModel [] | undefined;
  collectionSize =100;

  couriorList:courierdetailsModel[]=[];

  constructor(private apiService:ApiService) {}

  ngOnInit(){
    this.apiService.allCouriors().subscribe(
      (response:any)=>{
        this.couriorList=response.data;
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }


applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
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
