import { Component } from '@angular/core';
import { AllCustomerListModel } from './all-customer-list.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customer-list',
  templateUrl: './all-customer-list.component.html',
  styleUrls: ['./all-customer-list.component.css']
})
export class AllCustomerListComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: AllCustomerListModel[] = [];
  currentPage: number = 1;
  countries: AllCustomerListModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;


  allCust:AllCustomerListModel[]=[];

  constructor(private formBuilder: FormBuilder , private api:ApiService , private router:Router ) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  
}

ngOnInit(){
  this.api.allCustomer().subscribe(
    ( data: any) => {
      this.allCust=data.data;
      console.log('Response successful Customer!',data.data);
      localStorage.setItem('tid', data.data[0].tId);
      console.log('tid', data.data[0].tId);
      
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}

edit(id : any){
  this.router.navigate(['/set/view-customer-details-new/'+id]);
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
