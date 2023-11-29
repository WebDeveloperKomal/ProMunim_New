import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee/employee.component.model';
import { SecurityService } from '../security.service';
import { UserModel } from './userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: EmployeeModel[] = [];
  currentPage: number = 1;
  countries: EmployeeModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  updateuserprofile !: FormGroup;
  user:UserModel = new UserModel();

  constructor(private formBuilder: FormBuilder, private service:SecurityService, private router:Router) {
    // this.employeeForm = this.formBuilder.group({
    //   location: ['', Validators.required], // Add validation if needed
    //   maindepartment: ['', Validators.required], // Add validation if needed
    //   department: ['', Validators.required] // Add validation if needed
     
    // });
    this.updateuserprofile = this.formBuilder.group({
      firstname: ['', Validators.required], // Add validation if needed
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      constno: ['', Validators.required],
      dateofbirth: ['', Validators.required]
     
    });
  }


  ngOnInit(){
    this.service.getUserData().subscribe(
      (response:any)=>{
        this.user = response.data;
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  updateUserProfile(){    
    this.service.updateUserProfile(this.user).subscribe(
      (response:any)=>{
        console.log(response);
        window.location.reload();
        alert("Profile updated!");
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
