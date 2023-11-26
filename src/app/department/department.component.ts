import { Component } from '@angular/core';
import { DepartmentModel } from './department.component.model';
import { ApiService } from '../api.service';
interface BranchData {
  branchid: number;
  branchname: string;
  branchcode: string;
  branchcity: string;
  branchaddress: string;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: DepartmentModel[] = [];
  currentPage: number = 1;
  countries:DepartmentModel [] | undefined;
  collectionSize =100;
  
  departmentList:DepartmentModel[]=[];

  constructor(private apiService:ApiService) {}

  ngOnInit(){
    this.apiService.allDepartments().subscribe(
      (response:any)=>{
        this.departmentList=response.data;
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
