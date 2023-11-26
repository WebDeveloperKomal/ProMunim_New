import { Component } from '@angular/core';
import { OtherServicesModel } from './otherservices.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-otherservices',
  templateUrl: './otherservices.component.html',
  styleUrls: ['./otherservices.component.css']
})
export class OtherservicesComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: OtherServicesModel[] = [];
  currentPage: number = 1;
  countries: OtherServicesModel [] | undefined;
  collectionSize =100;

  servicesList:OtherServicesModel[]=[];

  constructor(private apiService:ApiService) {}

  ngOnInit(){
    this.apiService.allOtherServices().subscribe(
      (response:any)=>{
        this.servicesList = response.data;
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
