import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewCustModel } from './add-new-customer.component.model';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AddNewCustModel[] = [];
  currentPage: number = 1;
  countries: AddNewCustModel[] | undefined;
  collectionSize =100;
  addnewcustomer !: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addnewcustomer = this.formBuilder.group({
      companyname: ['', Validators.required], 
      fullname: ['', Validators.required], 
      email: ['', Validators.required] ,
      contactno: ['', Validators.required],
      altcontactno: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      constofcompany: ['', Validators.required],
      segment: ['', Validators.required],
      natureofbus: ['', Validators.required],
      maintitr: ['', Validators.required],
      leadtype: ['', Validators.required],
      leadstatus: ['', Validators.required],
      product: ['', Validators.required],
     
    });
  this.dataarray = [
    {branchid : 1, branchname :'hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 2, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 3, branchname :'vluj' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 4, branchname :'hemda' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 5, branchname :'aimndh' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 6, branchname :'sinhgad' ,branchcode :'SDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 7, branchname :'kothrud' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 8, branchname :'karvenagar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 9, branchname :'Goa' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 10, branchname :'banglore' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 11, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 12, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    {branchid : 13, branchname :'Hadapsar' ,branchcode :'HDR' , branchcity :'PUNE' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
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
}
