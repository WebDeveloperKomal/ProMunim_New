import { Component } from '@angular/core';
import { AllCOmplaintsMainModel } from './all-complaints-main.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-complaints-main',
  templateUrl: './all-complaints-main.component.html',
  styleUrls: ['./all-complaints-main.component.css']
})
export class AllComplaintsMainComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: AllCOmplaintsMainModel[] = [];
  currentPage: number = 1;
  countries: AllCOmplaintsMainModel[] | undefined;
  collectionSize =100;

  complaintList:AllCOmplaintsMainModel[] = [];


  users : any;

  // : AllCOmplaintsMainModel = new AllCOmplaintsMainModel();

  constructor(private formBuilder: FormBuilder , private api : ApiService , private router:Router) {
    // this.employeeForm = this.formBuilder.group({
    //   location: ['', Validators.required], // Add validation if needed
    //   maindepartment: ['', Validators.required], // Add validation if needed
    //   department: ['', Validators.required] // Add validation if needed
     
    // });
}

edit(id:any){
this.router.navigate(['/set/view-customer-complaints-main/'+id]);
}

ngOnInit(){
  this.api.allCustomerComplaint().subscribe(
    ( data: any) => {

      this.complaintList=data.data;
      console.log('Response successful!');
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
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
//   this.countries = this.dataarray
//     .map((country, i) => ({id: i + 1, ...country}))
//     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
// }
}
}
