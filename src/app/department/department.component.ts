import { Component } from '@angular/core';
import { DepartmentModel } from './department.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
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

  constructor(private apiService:ApiService, private router:Router) {}

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

  edit(id:number){
    this.router.navigate([`/set/view-department/`+id]);
  }

  delete(id:number){
    confirm("Are you sure to delete this record");
    this.apiService.deleteDepartment(id).subscribe(
      (res:any)=>{
        console.log(res.data);
        window.location.reload();
        alert('Record Deleted!');
      },
      (err:any)=>{console.error(err);}
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


}
