import { Component } from '@angular/core';
import { EmployeeModel } from './employee.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: EmployeeModel[] = [];
  currentPage: number = 1;
  countries: EmployeeModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;
  EmployeesList:EmployeeModel[]=[];

  constructor(private formBuilder: FormBuilder , private apiService:ApiService) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], 
      maindepartment: ['', Validators.required], 
      department: ['', Validators.required] 
     
    });
  }

  ngOnInit(){
    this.apiService.allEmployees().subscribe(
      (response:any)=>{
        console.log(response.data);        
        this.EmployeesList=response.data;
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
  confirm("Are you sure to delete this Photo")
}
}
