import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewAddDailyLeadsModel } from './view-add-dailyleads.component.model';

@Component({
  selector: 'app-view-add-dailyleads',
  templateUrl: './view-add-dailyleads.component.html',
  styleUrls: ['./view-add-dailyleads.component.css']
})
export class ViewAddDailyleadsComponent {
  viewadddailyleads !: FormGroup;
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: ViewAddDailyLeadsModel[] = [];
  currentPage: number = 1;
  countries: ViewAddDailyLeadsModel[] | undefined;
  collectionSize =100;
  
  activeTab: string = 'tab1';


  // ngOnInit(){
  //   this.dataarray
  // }

  constructor(private formBuilder: FormBuilder) {
    this.viewadddailyleads = this.formBuilder.group({
      visitdate: ['', Validators.required],
      description: ['', Validators.required], 
      nextvisitdate: ['', Validators.required] 
     
    });
  this.dataarray = [
    {branchid : 1, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
   
    {branchid : 2, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
    {branchid : 3, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
    {branchid : 4, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
    {branchid : 5, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
    {branchid : 6, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
    {branchid : 7, branchname :'2017-05-02' ,branchcode :'HE HAVE CA' , branchcity :'No Next Visit' , branchaddress:'SN. 295, Plot No.13, Opp A M College, Mahadev Nagar , Hadapsar, Pune:411028'  },
    
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
  }
}
}
