import { Component } from '@angular/core';
import { DepartmentModel } from './department.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        this.apiService.deleteDepartment(id).subscribe(
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
