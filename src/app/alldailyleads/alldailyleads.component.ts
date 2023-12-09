import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllDailyLeadsModel } from './alldailyleads.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldailyleads',
  templateUrl: './alldailyleads.component.html',
  styleUrls: ['./alldailyleads.component.css']
})
export class AlldailyleadsComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: AllDailyLeadsModel[] = [];
  currentPage: number = 1;
  countries: AllDailyLeadsModel[] | undefined;
  collectionSize =100;

  leadsList:AllDailyLeadsModel[] = [];

  employeeForm !: FormGroup;

  constructor( private service: ApiService , private router:Router) {
    // this.employeeForm = this.formBuilder.group({
    //   location: ['', Validators.required], // Add validation if needed
    //   maindepartment: ['', Validators.required], // Add validation if needed
    //   department: ['', Validators.required] // Add validation if needed
     
    // });
}

ngOnInit(){
  this.service.alldailyLead().subscribe(
    ( data: any) => {
      this.leadsList=data.data;
      console.log('Response successful!');
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}

edit(id:any){
  this.router.navigate(['/set/view-add-dailyLeads/'+id]);
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
