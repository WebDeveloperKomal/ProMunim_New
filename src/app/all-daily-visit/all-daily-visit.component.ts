import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllDailyVisitModel } from './all-daily-visit.component.model';

@Component({
  selector: 'app-all-daily-visit',
  templateUrl: './all-daily-visit.component.html',
  styleUrls: ['./all-daily-visit.component.css']
})
export class AllDailyVisitComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AllDailyVisitModel[] = [];
  currentPage: number = 1;
  countries: AllDailyVisitModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  this.dataarray = [
    {branchid : 'alpesh jain', branchname :'hadapsar' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'MAHARASHTRA FURNITURE'  },
    {branchid : 'R B YADVATE', branchname :'Hadapsar' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'BALAJI ENTERPRISES'  },
    {branchid : 'alpesh jain', branchname :'vluj' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'BALAJI ENTERPRISES'  },
    {branchid : 'R B YADVATE', branchname :'hemda' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'MAHARASHTRA FURNITURE'  },
    {branchid : 'R B YADVATE', branchname :'aimndh' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'R B YADVATE', branchname :'sinhgad' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'alpesh jain', branchname :'kothrud' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'MAHARASHTRA FURNITURE'  },
    {branchid : 'R B YADVATE', branchname :'karvenagar' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'R B YADVATE', branchname :'Goa' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'R B YADVATE', branchname :'banglore' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'MAHARASHTRA FURNITURE'  },
    {branchid : 'R B YADVATE', branchname :'Hadapsar' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'alpesh jain', branchname :'Hadapsar' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'MAHARASHTRA FURNITURE'  },
    {branchid : 'R B YADVATE', branchname :'Hadapsar' ,branchcode :'9822014368' , branchcity :'ARVIND GAIKWAD' , branchaddress:'baba ramdev auto spares'  },
    {branchid : 'alpesh jain', branchname :'Hadapsar' ,branchcode :'9822014368' , branchcity :'SANTOSH DADAS' , branchaddress:'MAHARASHTRA FURNITURE'  },
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
