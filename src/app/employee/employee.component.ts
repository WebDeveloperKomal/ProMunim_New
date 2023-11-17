import { Component } from '@angular/core';
import { EmployeeModel } from './employee.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  ngOnInit(){
    this.dataarray
  }
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: EmployeeModel[] = [];
  currentPage: number = 1;
  countries: EmployeeModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  this.dataarray = [
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Support - ADMINISTRATIVE',role:'admin'  },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Daund' , branchaddress:'Retail Sales Vertical' ,role:'admin' },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Daund' , branchaddress:'Support - ADMINISTRATIVE',role:'admin'  },
    {branchid : 'A1000', branchname :'hSYSTEM M ADMINemda' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Retail Sales Vertical' ,role:'admin' },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Daund' , branchaddress:'Support - ADMINISTRATIVE'  ,role:'admin'},
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Daund' , branchaddress:'Retail Sales Vertical' ,role:'admin' },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Support - ADMINISTRATIVE',role:'admin'  },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Retail Sales Vertical',role:'admin'  },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Daund' , branchaddress:'Support - ADMINISTRATIVE' ,role:'admin' },
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Retail Sales Vertical'  ,role:'admin'},
    {branchid : 'A1000', branchname :'SYSTEM M ADMIN' ,branchcode :'8888888888' , branchcity :'Hadapsar' , branchaddress:'Support - ADMINISTRATIVE' ,role:'admin' },
    {branchid : 12, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028',role:'admin'  },
    {branchid : 13, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 14, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 15, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 16, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 17, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  ,role:'admin'},
    {branchid : 18, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 19, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },
    {branchid : 20, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028' ,role:'admin' },

   ]
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  this.dataarray = filteredData.filter((data) =>
    data.branchname.toLowerCase().includes(searchString) ||
    data.branchcode.toLowerCase().includes(searchString) ||
    data.branchcity.toLowerCase().includes(searchString) ||
    data.branchaddress.toLowerCase().includes(searchString)
  );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
