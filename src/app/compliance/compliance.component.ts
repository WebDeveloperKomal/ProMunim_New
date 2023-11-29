import { Component } from '@angular/core';
import { ComplianceModel } from './compliance.component.model';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.css']
})
export class ComplianceComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;

  currentPage: number = 1;
  countries: ComplianceModel[] | undefined;
  collectionSize =100;
  
  complianceList:ComplianceModel[]=[];
  constructor(private apiService:ApiService, private router:Router) {}
 
  ngOnInit(){
    this.apiService.allCompliances().subscribe(
      (res:any)=>{this.complianceList=res.data},
      (error:any)=>{console.error(error);
      }
    )
  }


  edit(id:number){
    this.router.navigate([`/set/view-compliance/`+id]);
  }

  delete(id:number){
    console.log('ID :::::',id );
    this.apiService.deleteCompliance(id).subscribe(
      (response:any)=>{
        console.log(response.data);
        window.location.reload();
        alert("Record Deleted!");

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
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
}
