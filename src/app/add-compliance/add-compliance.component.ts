import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-compliance',
  templateUrl: './add-compliance.component.html',
  styleUrls: ['./add-compliance.component.css']
})
export class AddComplianceComponent {
  complianceForm !: FormGroup;
  dataarray: any[] = [];
  constructor(private formBuilder: FormBuilder) {

    this.complianceForm = this.formBuilder.group({
      complianceName: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
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
}
