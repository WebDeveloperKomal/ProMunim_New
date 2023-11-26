import { Component } from '@angular/core';
import { UserModel } from '../branch/branch.component.model';
import { UserRolePermissionModel } from './user-role-permission.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-role-permission',
  templateUrl: './user-role-permission.component.html',
  styleUrls: ['./user-role-permission.component.css']
})
export class UserRolePermissionComponent {
  updaterole !: FormGroup;
  adduserroleForm !: FormGroup;
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: UserRolePermissionModel[] = [];
  currentPage: number = 1;
  countries: UserRolePermissionModel[] | undefined;
  collectionSize =100;
  activeTab: string = 'tab1';
  showdata1 : boolean = true;
  showdata : boolean = false;
  
  showdata2 : boolean = true;
  showdata3 : boolean = false;
  constructor(private formBuilder: FormBuilder) {
    // this.employeeForm = this.formBuilder.group({
    //   location: ['', Validators.required], // Add validation if needed
    //   maindepartment: ['', Validators.required], // Add validation if needed
    //   department: ['', Validators.required] // Add validation if needed
     
    // });


    this.updaterole = this.formBuilder.group({
      parentrole: ['', Validators.required], // Add validation if needed
      Department: ['', Validators.required],
     });

    this.adduserroleForm = this.formBuilder.group({
      employeeid: ['', Validators.required], 
      Department: ['', Validators.required],
     });
  this.dataarray = [
    {branchid : 'Admin', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'BRANCH MANAGER-ENTERPRISE PORTFOLIO RELATIONSHIP MANAGER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'BRANCH OPERATIONS MANAGER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ACCOUNT ACTIVATION OFFICER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ACCOUNT ACTIVATION OFFICER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ACCOUNT ACTIVATION OFFICER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ACCOUNT ACTIVATION OFFICER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'AREA BUSINESS HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'BRANCH HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'BRANCH HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER', branchname :'BRANCH HEAD' ,branchcode :'Retail Branch Vertical' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 14, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 15, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 16, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 17, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 18, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  }, {branchid : 1, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 19, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 20, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 21, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 22, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 23, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 24, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 25, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 26, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 27, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 28, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 29, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 30, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 31, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 32, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
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


changeTab(tabId: string) {
  this.activeTab = tabId;
}

switchTabBasedOnId(id: string) {
  if (id === 'tab1') {
    this.activeTab = 'tab1';
  } else if (id === 'tab2') {
    this.activeTab = 'tab2';
  }else if (id === 'tab3') {
    this.activeTab = 'tab3';
  }
}
delete(){
  confirm("Are you sure to delete this record")
}

shownewrole(){
  this.showdata = !this.showdata;
  this.showdata1 = !this.showdata1
}

shownewrole1(){
  this.showdata2 = !this.showdata2;
  this.showdata3 = !this.showdata3
}
}