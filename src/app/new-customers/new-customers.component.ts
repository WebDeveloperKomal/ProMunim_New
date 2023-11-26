import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewCustomerModel } from './new-customers.component.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.css']
})
export class NewCustomersComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: NewCustomerModel[] = [];
  currentPage: number = 1;
  countries: NewCustomerModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;

  temCustomerList:NewCustomerModel[]=[];

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  }

  ngOnInit(){
    this.apiService.allTempCustomers().subscribe(
      (responce:any)=>{
        this.temCustomerList=responce.data;
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
